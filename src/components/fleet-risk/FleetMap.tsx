import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { fleetSeed, type Aircraft, type FleetEvent, type Position } from './model';
export default function FleetMap({ aircraft, positions, events, dark, onSelect }: {aircraft:Aircraft[];positions:Position[];events:FleetEvent[];dark:boolean;onSelect:(a:Aircraft)=>void}) {
 const host=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!host.current)return;const map=L.map(host.current,{scrollWheelZoom:false}).setView([20,45],2);
 L.tileLayer(dark?'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png':'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:dark?'© OpenStreetMap © CARTO':'© OpenStreetMap contributors',maxZoom:18}).addTo(map);
 const bounds:L.LatLngExpression[]=[];
 positions.forEach(p=>{const a=aircraft.find(a=>a.icao24_hex?.toLowerCase()===p.hex.toLowerCase());if(!a)return;const icon=L.divIcon({className:'fleet-plane-marker',html:'✈',iconSize:[30,30],iconAnchor:[15,15]});const marker=L.marker([p.lat,p.lon],{icon}).addTo(map);marker.bindTooltip(a.registration);marker.on('click',()=>onSelect(a));bounds.push([p.lat,p.lon]);});
 // Hollow home-base markers are not aircraft positions.
 aircraft.forEach(a=>{if(positions.some(p=>p.hex.toLowerCase()===a.icao24_hex?.toLowerCase()))return;const airport=fleetSeed.airports.find(p=>p.icao===a.home_base_icao);if(!airport)return;const marker=L.marker([airport.lat,airport.lon],{icon:L.divIcon({className:'fleet-base-marker',html:'◇',iconSize:[24,24]})}).addTo(map);marker.bindTooltip(`${a.registration} · home base only; no live position`);marker.on('click',()=>onSelect(a));bounds.push([airport.lat,airport.lon]);});
 events.filter(e=>(e.verified||e.test)&&e.lat!==null&&e.lon!==null).forEach(e=>{if(e.lat===null||e.lon===null)return;L.circle([e.lat,e.lon],{radius:e.radius_km*1000,className:e.test?'fleet-test-circle':'fleet-event-circle'}).bindTooltip(e.test?'TEST EVENT':e.category).addTo(map);});
 if(bounds.length)map.fitBounds(L.latLngBounds(bounds),{padding:[35,35],maxZoom:5});const resize=new ResizeObserver(()=>map.invalidateSize());resize.observe(host.current);return()=>{resize.disconnect();map.remove();};
 },[aircraft,positions,events,dark,onSelect]);
 return <div ref={host} className="fleet-map" aria-label="Fleet position and event map"/>;
}