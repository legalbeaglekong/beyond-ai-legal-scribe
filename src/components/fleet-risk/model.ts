import raw from '@/data/fleetRisk.json';
export const fleetSeed = raw;
export type Aircraft = typeof raw.aircraft[number];
export type Position = { hex: string; lat: number; lon: number; heading: number; observed_at: string; on_ground: boolean; altitude_ft: number; country: string; airport?: string };
export type FleetEvent = { id: string; detected_at: string; source: string; source_url: string; headline: string; category: string; severity: string; countries: string[]; airports: string[]; lat: number | null; lon: number | null; radius_km: number; test: boolean; expires_at?: string; verified?: boolean };
export type SourceStatus = { key: string; name: string; status: string; last_run: string | null; cadence: number; licence: string; url: string };
export type Review = { alert_key: string; reviewer_name: string; decision: string; note: string; created_at: string };
export type Workspace = { clients?: Aircraft[]; tests?: FleetEvent[]; jurisdictions?: Record<string, { ctc: string; altA: boolean; awg: string; czib: boolean; sanctions: boolean; travel: string; detention: boolean; verified_by: string; verified_at: string }> };
export type Alert = { key: string; aircraft: string; rule: string; severity: string; reason: string; event?: FleetEvent; test: boolean };
export const band = (score: number) => score >= 75 ? 'Critical' : score >= 50 ? 'High' : score >= 25 ? 'Medium' : 'Low';
export function distance(lat: number, lon: number, lat2: number, lon2: number) { const r = Math.PI / 180; const a = Math.sin((lat2-lat)*r/2)**2 + Math.cos(lat*r)*Math.cos(lat2*r)*Math.sin((lon2-lon)*r/2)**2; return 6371 * 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); }
export function scoreAircraft(a: Aircraft, p: Position | undefined, events: FleetEvent[], workspace: Workspace) {
  const jurisdiction = (country: string) => { const v = workspace.jurisdictions?.[country]; if (!v?.verified_by) return null; const factors: [string, number][] = [];
    if (v.ctc === 'no') factors.push(['Not a CTC contracting state',25]); else if (!v.altA) factors.push(['No Alternative A',10]);
    if (v.awg === 'Low' || v.awg === 'Medium') factors.push([`AWG ${v.awg}`,v.awg === 'Low' ? 20 : 10]);
    if(v.czib) factors.push(['Active CZIB',25]); if(v.sanctions) factors.push(['Aviation sanctions programme',30]); if(v.travel !== 'none') factors.push(['Travel advice',v.travel === 'all' ? 15 : 8]);
    return { score: Math.min(100,factors.reduce((s,f)=>s+f[1],0)), factors, country }; };
  const countries = [...new Set([p?.country,a.lessee_country,a.operator_country,a.registry_country].filter((c): c is string => !!c))];
  const results = countries.map(jurisdiction); const known = results.filter((v): v is NonNullable<typeof v> => v !== null).sort((x,y)=>y.score-x.score); const j = results.every(Boolean) ? known[0] : undefined;
  const attachment: [string,number][] = []; const current = p ? jurisdiction(p.country) : null;
  if(current) attachment.push(['40% of current jurisdiction',current.score*.4]);
  const airport = fleetSeed.airports.find(x=>x.icao===p?.airport);
  // Supplied airport closures are unverified; never score them as current facts.
  if(!a.example && a.arrears_days !== null && Number(a.arrears_days)>30) attachment.push(['Manual arrears',Number(a.arrears_days)>60?35:20]);
  if(p && Date.now()-new Date(p.observed_at).getTime()>7*86400000) attachment.push(['No position for seven days',15]);
  if(current && workspace.jurisdictions?.[p?.country ?? '']?.detention) attachment.push(['Verified detention/lien flag',10]);
  const sanctions: [string,number][] = [];
  if(p && workspace.jurisdictions?.[p.country]?.sanctions) sanctions.push(['Current aviation-sanctions country',40]);
  const relevant = events.filter(e=>e.verified && !e.test && e.countries.includes(p?.country ?? '') && Date.now()-new Date(e.detected_at).getTime()<30*86400000);
  if(relevant.some(e=>e.category==='detention')) attachment.push(['Detention/lien event',15]);
  return { jurisdiction: j?.score ?? null, attachment: current && p ? Math.min(100,attachment.reduce((s,f)=>s+f[1],0)) : null, sanctions: null as number|null, factors: { jurisdiction: j?.factors ?? [], attachment, sanctions }, country: j?.country, airport, incomplete: !j || !p };
}
export function matchAlerts(aircraft: Aircraft[], positions: Position[], events: FleetEvent[]): Alert[] {
 return aircraft.flatMap(a=>{ const p=positions.find(p=>p.hex.toLowerCase()===a.icao24_hex?.toLowerCase()); return events.filter(e=>(e.verified || e.test) && (!e.expires_at || new Date(e.expires_at).getTime()>Date.now())).flatMap(e=>{
 const home=e.airports.includes(a.home_base_icao);const here=!!p?.on_ground && e.airports.includes(p.airport ?? '');const near=!!p && e.lat!==null && e.lon!==null && distance(p.lat,p.lon,e.lat,e.lon)<=e.radius_km;
 const country=e.countries.some(c=>[p?.country,a.lessee_country,a.operator_country,a.registry_country].includes(c));
 const rules: [string,string,string][]=[]; if(home||here)rules.push(['R1',here?'Critical':'High',here?'Aircraft on the ground at event airport':'Event at home base']);if(near)rules.push(['R2','High','Within event radius']);if(country)rules.push(['R3',['conflict','sanctions'].includes(e.category)?'High':'Medium','Country match']);if(e.category==='fuel'&&(home||here))rules.push(['R4','High','Fuel event at current airport or home base']);
 return rules.map(([rule,severity,reason])=>({key:`${a.registration}:${rule}:${e.id}`,aircraft:a.registration,rule,severity,reason,event:e,test:e.test})); }); });
}