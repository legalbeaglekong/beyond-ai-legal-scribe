import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { countries, type Aircraft } from './data';
import type { Risk } from './engine';

type Props = { fleet: Aircraft[]; risks: Record<string, Risk>; selected: string | null; trail: [number, number][]; showZones: boolean; onSelect: (reg: string) => void };

const icon = (heading: number, level: string, dark: boolean, sel: boolean) => L.divIcon({
  className: '', iconSize: [28, 28], iconAnchor: [14, 14],
  html: `<div class="fd-plane fd-${dark ? 'dark' : level}${sel ? ' fd-sel' : ''}" style="transform:rotate(${heading - 45}deg)">✈</div>`,
});

export default function DemoMap({ fleet, risks, selected, trail, showZones, onSelect }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<Record<string, L.Marker>>({});
  const overlay = useRef<L.LayerGroup | null>(null);
  const selectRef = useRef(onSelect); selectRef.current = onSelect;

  useEffect(() => {
    if (!host.current) return;
    const m = L.map(host.current, { scrollWheelZoom: true, worldCopyJump: true, zoomControl: true }).setView([12, 85], 3);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '© OpenStreetMap contributors © CARTO', maxZoom: 12, subdomains: 'abcd' }).addTo(m);
    overlay.current = L.layerGroup().addTo(m); map.current = m;
    const ro = new ResizeObserver(() => m.invalidateSize()); ro.observe(host.current);
    return () => { ro.disconnect(); m.remove(); map.current = null; markers.current = {}; };
  }, []);

  useEffect(() => {
    const m = map.current; if (!m) return;
    for (const a of fleet) {
      const r = risks[a.reg]; if (!r) continue; const p = r.pos;
      const ic = icon(p.onGround ? 0 : p.heading, r.level, p.dark, selected === a.reg);
      let mk = markers.current[a.reg];
      if (!mk) { mk = L.marker([p.lat, p.lon], { icon: ic, keyboard: true, title: a.reg }).addTo(m); mk.on('click', () => selectRef.current(a.reg)); markers.current[a.reg] = mk; }
      else { mk.setLatLng([p.lat, p.lon]); mk.setIcon(ic); }
      mk.bindTooltip(`${a.reg} · ${a.type} · risk ${r.overall}${p.dark ? ' · last known' : ''}`);
    }
  }, [fleet, risks, selected]);

  useEffect(() => {
    const m = map.current, g = overlay.current; if (!m || !g) return; g.clearLayers();
    const a = fleet.find(x => x.reg === selected); if (!a) return;
    if (trail.length > 1) L.polyline(trail, { className: 'fd-trail', weight: 1.5 }).addTo(g);
    if (showZones) {
      for (const iso of a.terms.lease.excludedCountries) { const c = countries[iso]; if (!c) continue; const [s, w, n, e] = c.box; L.rectangle([[s, w], [n, e]], { className: 'fd-zone-excluded', weight: 1 }).bindTooltip(`${c.name} · Excluded Country (approx. area)`).addTo(g); }
      for (const c of Object.values(countries)) {
        if (a.terms.insurance.geographicLimits.includes(c.iso) && !a.terms.insurance.warExcludedCountries.includes(c.iso)) continue;
        if (a.terms.lease.excludedCountries.includes(c.iso)) continue;
        const [s, w, n, e] = c.box; L.rectangle([[s, w], [n, e]], { className: 'fd-zone-insurance', weight: 1 }).bindTooltip(`${c.name} · outside sample insurance limits (approx. area)`).addTo(g);
      }
      ensurePatterns(m);
    }
  }, [fleet, selected, trail, showZones]);

  return <div ref={host} className="fd-map" role="application" aria-label="Simulated fleet map" />;
}

function ensurePatterns(m: L.Map) {
  const svg = m.getPanes().overlayPane.querySelector('svg'); if (!svg || svg.querySelector('#fd-hatch-red')) return;
  const ns = 'http://www.w3.org/2000/svg'; const defs = document.createElementNS(ns, 'defs');
  defs.innerHTML = `<pattern id="fd-hatch-red" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#E5484D" stroke-width="2" stroke-opacity=".7"/></pattern><pattern id="fd-hatch-amber" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.4" fill="#E5A23B" fill-opacity=".7"/></pattern>`;
  svg.prepend(defs);
}
