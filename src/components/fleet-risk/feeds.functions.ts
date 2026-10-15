import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { XMLParser } from 'fast-xml-parser';
import { z } from 'zod';
import { distance, fleetSeed, type FleetEvent, type Position, type SourceStatus } from './model';

export const refreshFleetFeeds = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
 .inputValidator(z.object({ mode: z.enum(['example','client']) }))
 .handler(async ({ data, context }) => {
  let aircraft = fleetSeed.aircraft;
  if(data.mode === 'client') {
   const { data: row, error } = await context.supabase.from('fleet_monitor_workspaces').select('payload').eq('user_id',context.userId).single();
   if(error) throw new Error('Client fleet could not be read.');
   const parsed = z.object({ clients: z.array(z.object({ icao24_hex: z.string().regex(/^[a-fA-F0-9]{6}$/).nullable(), registry_country: z.string().length(2) }).passthrough()).optional() }).parse(row.payload);
   aircraft = (parsed.clients ?? []) as typeof aircraft;
  }
  const sources: SourceStatus[]=[];const positions:Position[]=[];const events:FleetEvent[]=[];const now=new Date().toISOString();
  const fetchText = async (url:string) => { const response=await fetch(url,{signal:AbortSignal.timeout(10000)});if(!response.ok)throw new Error(`Provider returned ${response.status}`);return response.text(); };
  const run = async(key:string,name:string,cadence:number,licence:string,url:string,read:(text:string)=>void) => { try {read(await fetchText(url));sources.push({key,name,cadence,licence,url,last_run:now,status:'Updated'});}catch(error){sources.push({key,name,cadence,licence,url,last_run:now,status:error instanceof Error?error.message:'Unavailable'});} };
  // No more than three outbound requests concurrently; private inputs stay server-side.
  const hexes=aircraft.map(a=>a.icao24_hex?.toLowerCase()).filter((h):h is string=>!!h);
  const sky=`https://opensky-network.org/api/states/all?${hexes.map(h=>`icao24=${encodeURIComponent(h)}`).join('&')}`;
  await Promise.all([
   data.mode==='example' && hexes.length ? run('positions','OpenSky Network',10,'Research/non-commercial only; licensed provider required for client use.',sky,text=>{
    const d=JSON.parse(text) as {states?:unknown[][]};for(const s of d.states??[]){if(typeof s[5]!=='number'||typeof s[6]!=='number'||typeof s[3]!=='number')continue;const lat=s[6],lon=s[5];const nearest=fleetSeed.airports.map(a=>({...a,d:distance(lat,lon,a.lat,a.lon)})).sort((a,b)=>a.d-b.d)[0];const airport=s[8]===true && nearest && nearest.d<15 ? nearest:undefined;
     positions.push({hex:String(s[0]),lat,lon,heading:Number(s[10]??0),observed_at:new Date(s[3]*1000).toISOString(),on_ground:s[8]===true,altitude_ft:Number(s[7]??0)*3.28084,country:airport?.country_iso2??'',airport:airport?.icao});}
   }) : Promise.resolve(sources.push({key:'positions',name:'Licensed position provider',cadence:10,licence:'Required for client work. No client data sent to OpenSky.',url:'https://opensky-network.org',last_run:null,status:'Not configured'})),
   run('disasters','USGS earthquakes',30,'Public earthquake feed; GDACS disaster adapter pending.', 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',text=>{const d=JSON.parse(text) as {features?:{id:string;properties:{title:string;url:string;time:number;mag:number};geometry:{coordinates:number[]}}[]};for(const f of d.features??[]){events.push({id:`usgs:${f.id}`,detected_at:new Date(f.properties.time).toISOString(),source:'USGS',source_url:f.properties.url,headline:f.properties.title.split(' ').slice(0,20).join(' '),category:'disaster',severity:f.properties.mag>=6?'high':'medium',countries:[],airports:[],lat:f.geometry.coordinates[1]??null,lon:f.geometry.coordinates[0]??null,radius_km:50,test:false,verified:true});}}),
   run('news','GDELT aviation news',15,'Source headline/link only; classification requires human verification.',`https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent('(airport OR aircraft) (closed OR fuel OR sanctions OR detained)')}&mode=ArtList&format=json&timespan=24h&maxrecords=30`,text=>{const d=JSON.parse(text) as {articles?:{url:string;title:string;seendate:string;domain:string}[]};for(const a of d.articles??[])events.push({id:a.url,detected_at:now,source:a.domain,source_url:a.url,headline:a.title.split(' ').slice(0,20).join(' '),category:'unclassified',severity:'unreviewed',countries:[],airports:[],lat:null,lon:null,radius_km:50,test:false,verified:false});})
  ]);
  // Fetching bulletins is not the same as interpreting or verifying their countries/FIRs.
  await run('airspace','EASA CZIB',360,'Bulletins require human country/FIR verification. NOTAM access not configured.','https://www.easa.europa.eu/en/domains/air-operations/czibs',text=>{if(!text.includes('Conflict Zone'))throw new Error('Bulletin page could not be recognised');});
  const airspace=sources.find(s=>s.key==='airspace');if(airspace?.status==='Updated')airspace.status='Retrieved — human verification required';
  sources.push({key:'sanctions',name:'OFAC / UK / EU / UN screening',cadence:1440,licence:'Possible matches require compliance review; screening adapter not configured.',url:'https://sanctionslist.ofac.treas.gov/',last_run:null,status:'Not configured'});
  // XML parser is available for provider RSS adapters without DOM/Node dependencies.
  void XMLParser;
  return { positions, events, sources, refreshed_at:now };
 });