import { createFileRoute, redirect } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import { FleetMonitor } from '@/components/fleet-risk/FleetMonitor';
import type { Workspace } from '@/components/fleet-risk/model';
export const Route=createFileRoute('/fleet-risk')({
 beforeLoad:async()=>{const {data}=await supabase.rpc('has_private_demo_access');if(!data)throw redirect({to:'/auth',search:{redirect:'/fleet-risk'}});},
 head:()=>({meta:[{title:'Fleet Risk Monitor Demo | Beyond Horizons'},{name:'description',content:'Private aircraft fleet monitor demonstration for attachment, jurisdiction and sanctions risk, with transparent data limits and human review.'},{name:'robots',content:'noindex, nofollow'},{property:'og:title',content:'Fleet Risk Monitor Demo | Beyond Horizons'},{property:'og:description',content:'Private fleet risk triage with source transparency and human review.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}],links:[{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap'}]}),
 loader:async()=>{const {error:initError}=await supabase.rpc('initialize_fleet_monitor');if(initError)throw new Error('Private fleet workspace could not be opened.');const [w,r,reviews]=await Promise.all([supabase.from('fleet_monitor_workspaces').select('payload').single(),supabase.from('fleet_monitor_roles').select('role').single(),supabase.from('fleet_monitor_reviews').select('*').order('created_at',{ascending:false})]);if(w.error||r.error||reviews.error)throw new Error('Private fleet records could not be read.');return{initial:w.data.payload as Workspace,role:r.data.role,reviews:reviews.data};},
 component:Page,
});
function Page(){const data=Route.useLoaderData();return <FleetMonitor {...data}/>;}