import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Bot, Settings, Shield, FileCheck, TrendingUp, MapPin, AlertTriangle } from "lucide-react";

const data: IndustryPageData = {
  slug: "robotics",
  seo: {
    title: "Robot Leasing & RaaS Counsel Singapore | Liability & Autonomous Systems — Beyond Horizons",
    description: "Robot leasing and Robotics-as-a-Service counsel in Singapore — RaaS contracts, liability, RLSS co-funding checks, and path/road AV hooks. Book a consultation.",
  },
  hero: {
    title: "Robot Leasing & RaaS Legal Counsel Singapore — Autonomous Systems & Liability",
    subtitle: "Plain-English counsel for robot leasing and Robotics-as-a-Service: asset ownership, maintenance, performance, data, insurance, liability and regulatory pathways for deployments across Asia-Pacific.",
    badges: ["Robot Leasing", "Asset Finance & Leasing Experience", "Autonomous Systems Regulatory"],
  },
  intro: { paragraphs: ["A robot lease should allocate who owns and maintains the asset, how residual value and redelivery work, what happens on damage or obsolescence, and how insurance and liability sit across lessor, lessee, and any RaaS operator. Beyond Horizons adapts aircraft leasing disciplines — including maintenance, redelivery, and risk allocation — to industrial, surgical, and service robots rather than treating robots as generic office equipment."] },
  overview: {
    heading: "What We Do in Robotics & Automation Law",
    services: [
      { icon: Bot, title: "Robot Leasing Agreements", description: "Structuring operating leases, finance leases, and sale-and-leaseback arrangements for industrial robots, surgical robots, and service robots — adapting proven aircraft leasing frameworks." },
      { icon: Settings, title: "Robotics-as-a-Service (RaaS)", description: "RaaS contract structures for physical robot fleets — SLA and uptime commitments, performance pricing, data ownership, OEM/integrator/deployer allocation, and end-of-service transition. RaaS is not pure software SaaS." },
      { icon: Shield, title: "Liability & Insurance Frameworks", description: "Product liability allocation, autonomous decision-making liability, employer's liability for robot workers, insurance programme structuring, and indemnity chains." },
      { icon: FileCheck, title: "Regulatory Compliance", description: "Workplace safety regulations for robots, autonomous vehicle frameworks, drone operation licensing, and cross-border robotics deployment compliance." },
    ],
    stats: ["Robot leasing legal frameworks", "Aircraft leasing discipline adapted to robots", "RaaS contract structuring", "Autonomous systems liability advisory"],
  },
  contentSections: [
    { heading: "Robot leasing agreements", paragraphs: ["Operating leases, finance leases and sale-and-leaseback arrangements should address residual value, maintenance, redelivery, insurance, damage and obsolescence. We adapt aircraft leasing disciplines to the operational realities of industrial, surgical and service robots."] },
    { heading: "Robotics-as-a-Service (RaaS) — not just software SaaS", paragraphs: ["RaaS combines a physical robot fleet with service levels, uptime or performance pricing, data ownership, maintenance and end-of-service transition. Contracts should allocate responsibility across the OEM, integrator, deployer and RaaS operator so physical-asset, software and data risks do not fall into gaps."] },
    { heading: "Liability & insurance frameworks", paragraphs: ["Product liability, autonomous decision-making, employer liability for robot workers, contractual indemnities and insurance can overlap. MOT, LTA, MOM and sector rules evolve, so allocation should be tested against current official guidance before deployment."] },
    { heading: "Robot Leasing Support Scheme (RLSS / BCA)", paragraphs: ["Where BCA’s RLSS may support a built-environment robot lease, documents should address current eligibility conditions, permitted asset use, audit and reporting rights, maintenance, and early termination or non-compliance. Confirm current BCA materials: this is not a grant-approval guarantee."] },
    { heading: "Path-AV / AMA sandbox", paragraphs: ["Public-path autonomous mobility, such as robosweepers, is discussed under Active Mobility Act sandbox framing, while road AVs follow Road Traffic Act and LTA authorisation tracks. Expanded geofences or use cases may require fresh approvals, insurance and liability work."], links: [{ label: "Singapore Robotics Law", to: "/singapore-robotics-law" }] },
    { heading: "Commercial road-AV / on-demand fares", paragraphs: ["AV platform operators considering expansion beyond trial zones or commercial on-demand fares typically need to address current MOT/LTA approvals, fleet and operator contracts, liability and insurance, and employment terms for safety or remote operators. Public market developments are context only; rules evolve and official requirements should be confirmed before go-live."] },
  ],
  comparison: {
    heading: "Why Robotics Needs Specialist Legal Counsel",
    otherLabel: "General Technology Firms",
    rows: [
      { feature: "Asset Finance Expertise", other: "Treat robot leasing as standard equipment lease", bh: "Apply Chambers-ranked aircraft finance leasing expertise to robot assets — sophisticated residual value, redelivery, and maintenance structures" },
      { feature: "Liability Understanding", other: "Apply generic product liability templates", bh: "Bespoke autonomous system liability frameworks — addressing AI decision-making, shared liability, and evolving regulatory standards" },
      { feature: "RaaS Structuring", other: "Use generic equipment or software templates", bh: "Purpose-built RaaS contracts addressing physical asset risks, performance commitments, data, and maintenance obligations unique to robotics" },
      { feature: "Regulatory Navigation", other: "Wait for settled regulation", bh: "Proactive — tracking ASEAN, EU AI Act, and Singapore's autonomous systems regulatory development" },
      { feature: "Cross-Sector Knowledge", other: "Pure technology focus", bh: "Unique intersection of asset finance, technology, and industrial expertise" },
      { feature: "Commercial Delivery", other: "General technology or equipment models", bh: "A coordinated asset, service, data and liability framework for the deployment model" },
    ],
  },
  spotlight: {
    heading: "The Rise of Robot Leasing & RaaS",
    cards: [
      { icon: TrendingUp, title: "Market Growth", description: "Robot leasing and RaaS models continue to expand across industrial, service, and autonomous deployments." },
      { icon: MapPin, title: "Singapore Investment", description: "Singapore investing heavily in robotics adoption through the National Robotics Programme, driving demand for legal frameworks." },
      { icon: AlertTriangle, title: "Liability Gap", description: "Liability and insurance frameworks lagging behind deployment, creating urgent need for specialist legal structuring." },
    ],
    analysis: "The robotics legal landscape is evolving rapidly. Early legal structuring — drawing on proven asset finance frameworks — gives companies a competitive advantage in deploying and financing robotics at scale.",
  },
  faqs: {
    heading: "Frequently Asked Questions — Robot Leasing & Robotics Law",
    items: [
      { question: "What is robot leasing and how does it work?", answer: "Robot leasing allows companies to use robots without purchasing them outright, similar to aircraft leasing. Structures include operating leases, finance leases, and sale-and-leasebacks, with provisions for maintenance, redelivery conditions, and technology upgrades." },
      { question: "What is Robotics-as-a-Service (RaaS) and how is it structured legally?", answer: "RaaS typically combines a physical robot fleet with service levels, performance or uptime commitments, data ownership rules, and end-of-service transition — closer to asset-backed service contracting than pure software SaaS. Counsel helps define OEM, integrator, and deployer responsibilities so liability and IP do not fall into gaps when the robot is in a customer site." },
      { question: "Who is liable when an autonomous robot causes injury?", answer: "Liability can sit across product liability, operator negligence, contractual indemnities, and insurance — depending on who controls the robot, how autonomy is configured, and what the contracts say. Autonomous decision-making does not automatically erase manufacturer or deployer duties. Rules for robots and AVs continue to evolve under MOT/LTA and other frameworks; get counsel to map the chain before deployment. General information only." },
      { question: "How do aircraft leasing frameworks apply to robot leasing?", answer: "Aircraft leasing has developed sophisticated frameworks for asset residual value, maintenance reserves, redelivery conditions, and cross-border enforcement. These principles can be adapted to robot leasing, particularly for high-value industrial and surgical robots." },
      
      { question: "How should data ownership be handled in RaaS agreements?", answer: "RaaS agreements should clearly address ownership of operational data, performance data, and any AI-generated insights. Key provisions include data access rights, portability, confidentiality, and current PDPA requirements." },
      { question: "How is Robotics-as-a-Service (RaaS) structured legally — and how does it differ from software SaaS?", answer: "RaaS typically combines a physical robot fleet with service levels, performance or uptime commitments, data ownership rules, and end-of-service transition — closer to asset-backed service contracting than pure software SaaS. Counsel helps define OEM, integrator, and deployer responsibilities so liability and IP do not fall into gaps when the robot is in a customer site." },
      { question: "What is Singapore’s Robot Leasing Support Scheme (RLSS), and what should lessors or contractors check?", answer: "RLSS (associated with BCA support for robot leasing in the built environment) can co-fund eligible leasing arrangements. Lease documents should still address eligibility conditions, permitted asset use, audit/reporting rights, maintenance, and what happens on early termination or non-compliance. Confirm current BCA scheme rules before you rely on co-funding — this page is not a grant approval. Soft next step: schedule a consultation." },
      { question: "What does Singapore’s Active Mobility Act path-AV sandbox allow, and how does it relate to road-AV rules?", answer: "Path AVs (for example robosweepers on public paths) are discussed under Active Mobility Act sandbox framing, while road AVs follow Road Traffic Act / LTA authorisation tracks. Expanding use cases, geofences, or commercial operations usually needs fresh approvals and clear liability/insurance allocation. Confirm current LTA/MOT requirements; see also our Singapore Robotics Law hub." },
      { question: "What should an AV platform put in place before expanding on-demand autonomous rides and charging commercial fares?", answer: "Typically: MOT/LTA approvals beyond the trial zone, fleet and operator contracts, insurance and liability allocation across OEM / operator / remote safety roles, and employment terms for safety or remote operators. Public reporting on commercial road-AV pilots illustrates why operators need counsel before go-live — Beyond Horizons does not claim to have advised any named operator unless confirmed separately. Rules evolve; confirm official requirements and schedule a consultation." },
    ],
  },
  cta: {
    heading: "Deploying robots? Deploy the right legal framework first.",
    description: "From robot leasing structures to RaaS contracts, we can help map the legal framework. Schedule a consultation or email HL@beyondhorizons.sg.",
  },
  relatedPages: [
    { title: "Aviation", slug: "aviation" },
    { title: "Cybersecurity & Emerging Technology", slug: "cybersecurity-tech" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
    { title: "Singapore Robotics Law", slug: "/singapore-robotics-law" },
    { title: "AI Code Counsel", slug: "/industry/ai-code-counsel" },
    { title: "Singapore Employment Law", slug: "/singapore-employment-law" },
    { title: "Fractional GC", slug: "/industry/fractional-gc" },
    { title: "Why Specialist Counsel", slug: "/why-specialist-counsel" },
  ],
};

const RoboticsPage = () => <IndustryPageLayout data={data} />;
export default RoboticsPage;
