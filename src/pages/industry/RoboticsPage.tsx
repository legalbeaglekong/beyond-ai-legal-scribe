import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Bot, Settings, Shield, FileCheck, TrendingUp, MapPin, AlertTriangle } from "lucide-react";

const data: IndustryPageData = {
  slug: "robotics",
  seo: {
    title: "Robot Leasing & Robotics Law Singapore — SaaS, Autonomous Systems & Liability | Beyond Horizons Legal",
    description: "Pioneer robotics lawyers in Singapore. Robot leasing, SaaS contracts, autonomous systems liability, regulatory compliance. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Robot Leasing & Robotics Law — SaaS, Autonomous Systems & Liability Counsel",
    subtitle: "Pioneering legal frameworks for robot leasing structures, robotics-as-a-service agreements, autonomous system liability, and regulatory compliance — helping companies deploy and finance robotics across Asia-Pacific and beyond.",
    badges: ["Robotics Legal Pioneer", "Asset Finance & Leasing Expertise (Chambers Ranked)", "Autonomous Systems Regulatory"],
  },
  overview: {
    heading: "What We Do in Robotics & Automation Law",
    services: [
      { icon: Bot, title: "Robot Leasing Agreements", description: "Structuring operating leases, finance leases, and sale-and-leaseback arrangements for industrial robots, surgical robots, and service robots — adapting proven aircraft leasing frameworks." },
      { icon: Settings, title: "Robotics-as-a-Service (SaaS)", description: "SaaS contract structures, SLA frameworks, performance-based pricing models, data ownership provisions, and end-of-service transition clauses." },
      { icon: Shield, title: "Liability & Insurance Frameworks", description: "Product liability allocation, autonomous decision-making liability, employer's liability for robot workers, insurance programme structuring, and indemnity chains." },
      { icon: FileCheck, title: "Regulatory Compliance", description: "Workplace safety regulations for robots, autonomous vehicle frameworks, drone operation licensing, and cross-border robotics deployment compliance." },
    ],
    stats: ["Pioneer in robot leasing legal frameworks", "Aircraft leasing expertise applied to robotics", "SaaS contract structuring", "Autonomous systems liability advisory"],
  },
  comparison: {
    heading: "Why Robotics Needs Specialist Legal Counsel",
    otherLabel: "General Technology Firms",
    rows: [
      { feature: "Asset Finance Expertise", other: "Treat robot leasing as standard equipment lease", bh: "Apply Chambers-ranked aircraft finance leasing expertise to robot assets — sophisticated residual value, redelivery, and maintenance structures" },
      { feature: "Liability Understanding", other: "Apply generic product liability templates", bh: "Bespoke autonomous system liability frameworks — addressing AI decision-making, shared liability, and evolving regulatory standards" },
      { feature: "SaaS Structuring", other: "Use standard SaaS templates", bh: "Purpose-built SaaS contracts addressing physical asset risks, performance warranties, and maintenance obligations unique to robotics" },
      { feature: "Regulatory Navigation", other: "Wait for settled regulation", bh: "Proactive — tracking ASEAN, EU AI Act, and Singapore's autonomous systems regulatory development" },
      { feature: "Cross-Sector Knowledge", other: "Pure technology focus", bh: "Unique intersection of asset finance, technology, and industrial expertise" },
      { feature: "Pricing", other: "Premium hourly for novel legal work", bh: "Transparent pricing — pioneer market positioning with value-aligned fees" },
    ],
  },
  spotlight: {
    heading: "The Rise of Robot Leasing & SaaS",
    cards: [
      { icon: TrendingUp, title: "Market Growth", description: "Global robotics market projected at $200B+ by 2030, with the SaaS model growing 25%+ annually." },
      { icon: MapPin, title: "Singapore Investment", description: "Singapore investing heavily in robotics adoption through the National Robotics Programme, driving demand for legal frameworks." },
      { icon: AlertTriangle, title: "Liability Gap", description: "Liability and insurance frameworks lagging behind deployment, creating urgent need for specialist legal structuring." },
    ],
    analysis: "The robotics legal landscape is evolving rapidly. Early legal structuring — drawing on proven asset finance frameworks — gives companies a competitive advantage in deploying and financing robotics at scale.",
  },
  faqs: {
    heading: "Frequently Asked Questions — Robot Leasing & Robotics Law",
    items: [
      { question: "What is robot leasing and how does it work?", answer: "Robot leasing allows companies to use robots without purchasing them outright, similar to aircraft leasing. Structures include operating leases, finance leases, and sale-and-leasebacks, with provisions for maintenance, redelivery conditions, and technology upgrades." },
      { question: "What is Robotics-as-a-Service (SaaS) and how is it structured legally?", answer: "SaaS is a subscription model where companies pay for robot use on a per-unit, per-hour, or per-task basis. Legal structuring addresses service levels, performance guarantees, data ownership, liability allocation, and end-of-service transitions." },
      { question: "Who is liable when an autonomous robot causes injury?", answer: "Liability depends on the circumstances and may fall on the manufacturer, deployer, operator, or software developer. Specialist legal frameworks address the allocation of responsibility for autonomous decision-making and the evolving regulatory landscape." },
      { question: "How do aircraft leasing frameworks apply to robot leasing?", answer: "Aircraft leasing has developed sophisticated frameworks for asset residual value, maintenance reserves, redelivery conditions, and cross-border enforcement. These principles can be adapted to robot leasing, particularly for high-value industrial and surgical robots." },
      
      { question: "How should data ownership be handled in SaaS agreements?", answer: "SaaS agreements should clearly address ownership of operational data, performance data, and any AI-generated insights. Key provisions include data access rights, portability, confidentiality, and compliance with PDPA requirements." },
    ],
  },
  cta: {
    heading: "Deploying robots? Deploy the right legal framework first.",
    description: "From robot leasing structures to SaaS contracts, our pioneering robotics legal team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Aviation", slug: "aviation" },
    { title: "Cybersecurity & Emerging Technology", slug: "cybersecurity-tech" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
  ],
};

const RoboticsPage = () => <IndustryPageLayout data={data} />;
export default RoboticsPage;
