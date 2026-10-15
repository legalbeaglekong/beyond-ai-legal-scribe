import { createFileRoute } from '@tanstack/react-router';
import { FleetMonitor } from '@/components/fleet-risk/FleetMonitor';
export const Route=createFileRoute('/fleet-risk')({
 ssr:false,
 head:()=>({meta:[{title:'Fleet Risk Monitor Demo | Beyond Horizons'},{name:'description',content:'Public aircraft fleet monitor demonstration for attachment, jurisdiction and sanctions risk, with transparent data limits and human review.'},{name:'robots',content:'noindex, nofollow'},{property:'og:title',content:'Fleet Risk Monitor Demo | Beyond Horizons'},{property:'og:description',content:'Public fleet risk triage with source transparency and human review.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}],links:[{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap'}]}),
 component:Page,
});
function Page(){return <FleetMonitor initial={{}} role="viewer" reviews={[]} publicView/>;}