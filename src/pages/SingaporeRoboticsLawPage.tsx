import PillarPage from "@/components/PillarPage";
import { Bot, FileText, Scale, Briefcase, Shield, Calendar } from "lucide-react";

const SingaporeRoboticsLawPage = () => (
  <PillarPage
    slug="singapore-robotics-law"
    eyebrow="Singapore-anchored · Cross-border Robotics"
    h1="Robotics & Autonomous Systems — Singapore-anchored, Cross-border Counsel"
    intro="Singapore is one of the world's most robot-dense economies. We advise robotics OEMs, integrators, deployers and investors on safety regulation, product liability, autonomous vehicle frameworks, AI risk overlay, IP, and commercial structuring — coordinated across Singapore and the OEM and deployment jurisdictions."
    badges={["Autonomous Vehicles", "Service & Industrial Robotics", "AI + Product Liability"]}
    metaTitle="Singapore Robotics Lawyer — AV, Service Robots, AI | Beyond Horizons"
    metaDescription="Singapore robotics legal counsel: autonomous vehicles (LTA), service & industrial robots, drone and AGV deployment, product liability, AI risk overlay, IP and M&A."
    ogTitle="Singapore Robotics Law — Autonomous Systems, Liability & Commercial"
    ogDescription="Specialist Singapore robotics counsel for OEMs, integrators, deployers and investors across AVs, service robots and industrial automation."
    breadcrumbName="Singapore Robotics Law"
    serviceType="Robotics and Autonomous Systems Law"
    serviceDescription="Singapore robotics and autonomous systems legal counsel — AV regulation, service and industrial robotics, product liability, AI risk overlay, IP and commercial structuring."
    services={[
      { icon: Bot, title: "Autonomous Vehicles", desc: "LTA's AV testing and deployment frameworks (Road Traffic (AV) Rules), trial authorisation, public-road deployment, data-sharing protocols and AV insurance." },
      { icon: FileText, title: "Service & Industrial Robotics", desc: "Deployment in healthcare, F&B, logistics, construction and manufacturing — including BCA, MOM Workplace Safety, and IMDA approvals where applicable." },
      { icon: Scale, title: "Product Liability & Safety", desc: "Product safety standards (ISO 10218, ISO 13482), CE/UL adjacency for ASEAN, recall strategy, and tort/contract liability allocation up the supply chain." },
      { icon: Briefcase, title: "Commercial & RaaS Structuring", desc: "Robotics-as-a-Service contracting, uptime SLAs, integration agreements, OEM/integrator/deployer risk allocation and channel partner agreements." },
      { icon: Shield, title: "AI Risk & Governance Overlay", desc: "Where robotics meets ML — IMDA Model AI Governance Framework alignment, AI Verify, bias and explainability, and the EU AI Act for ASEAN-EU exports." },
      { icon: Calendar, title: "IP, M&A and Strategic Investment", desc: "Patent and trade-secret strategy, open-source / ROS licensing audits, robotics M&A, fundraising and IP-backed financing." },
    ]}
    updates={[]}
    faqs={[
      { q: "How does Singapore regulate autonomous vehicles?", a: "The Land Transport Authority (LTA) regulates AVs under the Road Traffic Act and the Road Traffic (Autonomous Motor Vehicles) Rules 2017 (and updates). Operators need trial authorisation, must comply with safety driver and data-sharing requirements, and may apply for staged public-road deployment in defined zones (e.g. Punggol, Tengah)." },
      { q: "Are there specific Singapore laws for robots?", a: "There is no single 'Robotics Act'. Robotics deployments are governed by a combination of: product safety (Consumer Protection (Safety Requirements) Regulations), workplace safety (WSHA), sector-specific regulation (LTA for AVs, MOH for medical, IMDA for telecoms/AI), and contract/tort law." },
      { q: "What standards apply to industrial and service robots?", a: "ISO 10218 (industrial robots), ISO/TS 15066 (collaborative robots), ISO 13482 (personal-care robots) and IEC 61508 (functional safety) are the baseline. Singapore generally aligns with international standards rather than imposing bespoke ones." },
      { q: "Who is liable if a robot or AV causes harm?", a: "Liability is typically allocated across the OEM, software supplier, integrator, deployer and (for AVs) operator/owner — through a mix of statutory product liability, common-law negligence, and contractual indemnities. Insurance coverage and clear contractual allocation are essential." },
      { q: "Can I deploy delivery drones in Singapore?", a: "Drones for commercial use require CAAS UAS operator and pilot permits, plus activity permits for specific operations. BVLOS and over-population operations face additional restrictions. Maritime drones (USVs) fall under MPA frameworks." },
      { q: "How does AI regulation affect robotics?", a: "Where the robot embeds machine-learning components, the IMDA Model AI Governance Framework, AI Verify, and (for ASEAN-EU export) the EU AI Act overlay apply. High-risk classifications can trigger conformity assessments, documentation and human-oversight requirements." },
      { q: "How does Beyond Horizons support robotics clients?", a: "We advise robotics OEMs, integrators, deployers and investors on regulatory strategy, safety and liability allocation, RaaS commercial structuring, AI overlay, IP and M&A — and we coordinate with Singapore's robotics innovation ecosystem (A*STAR, NTU, SUTD, IMDA)." },
    ]}
    relatedKeywords={["robot", "robotics", "autonomous", "av", "drone", "uas", "automation", "agv"]}
    relatedHeading="Related Insights — Robotics & Autonomous Systems"
    ctaHeading="Schedule a Singapore Robotics Consultation"
    ctaBody="Whether you are launching an AV pilot, deploying a service robot fleet, or structuring a RaaS contract, we can help. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Robotics Practice", to: "/industry/robotics" }}
    lastUpdatedISO="2026-06-09"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeRoboticsLawPage;
