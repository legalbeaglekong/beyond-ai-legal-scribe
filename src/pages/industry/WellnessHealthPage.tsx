import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Heart, Cpu, Shield, Smartphone } from "lucide-react";

const data: IndustryPageData = {
  slug: "wellness-health",
  seo: {
    title: "Wellness & Health Law Singapore — Healthcare Regulation, Digital Health & MedTech | Beyond Horizons Legal",
    description: "Specialist healthcare and wellness lawyers in Singapore. Medical device regulation, digital health, telemedicine, health data privacy. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Wellness & Health Law — Healthcare Regulation, Digital Health & MedTech Counsel",
    subtitle: "Specialised legal expertise for healthcare providers, wellness technology companies, medical device manufacturers, and digital health platforms navigating Asia-Pacific's evolving regulatory landscape.",
    badges: ["Chambers-Ranked Firm", "ESG & Green Finance Certified", "Cross-Border Health Regulation Expertise"],
  },
  overview: {
    heading: "What We Do in Wellness & Health Law",
    services: [
      { icon: Shield, title: "Healthcare Compliance", description: "Regulatory advisory on licensing, clinical trial approvals, Health Sciences Authority (HSA) submissions, and healthcare advertising standards across ASEAN." },
      { icon: Cpu, title: "Medical Device Regulation", description: "CE marking, FDA pathways, HSA Class A–D device registration, and cross-border medical device distribution agreements." },
      { icon: Smartphone, title: "Digital Health Solutions", description: "Telemedicine platform structuring, health data privacy (PDPA, HIPAA cross-border), SaMD regulatory classification, and AI-in-healthcare governance." },
      { icon: Heart, title: "Wellness Technology Frameworks", description: "Legal structures for wellness apps, wearable health technology, nutraceutical regulation, and health-related consumer protection compliance." },
    ],
    stats: ["30+ healthcare and wellness matters advised", "10+ APAC jurisdictions", "Digital health & AI-in-medicine focus", "Dual English & Singapore law qualification"],
  },
  comparison: {
    heading: "Specialist Health & Wellness Counsel vs. General Practice",
    otherLabel: "General Commercial Firms",
    rows: [
      { feature: "Regulatory Depth", other: "Broad regulatory practice, health is one of many sectors", bh: "Focused health regulatory expertise with cross-border ASEAN and international experience" },
      { feature: "Digital Health Understanding", other: "Treat as standard technology contract", bh: "Understand SaMD classification, telemedicine licensing, and health AI governance frameworks" },
      { feature: "Data Privacy in Health", other: "Generic PDPA/GDPR advice", bh: "Health-specific data protection — clinical data, patient consent architectures, cross-border health data transfers" },
      { feature: "Pricing", other: "Premium hourly billing", bh: "Transparent, value-aligned pricing — fixed-fee options for regulatory submissions" },
      { feature: "ESG & Sustainability", other: "Separate practice group", bh: "Integrated ESG advisory — health sector sustainability reporting, green healthcare facilities" },
      { feature: "Innovation Mindset", other: "Conservative, precedent-driven", bh: "Forward-looking — advising on AI diagnostics, digital therapeutics, and next-gen wellness platforms" },
    ],
  },
  spotlight: {
    heading: "The APAC Digital Health Opportunity",
    cards: [
      { title: "Market Growth", description: "APAC digital health market projected at $100B+ by 2028, with Singapore positioned as Southeast Asia's MedTech hub." },
      { title: "Regulatory Complexity", description: "Rising regulatory complexity — HSA, TGA, PMDA, NMPA frameworks diverging, requiring specialist cross-border navigation." },
      { title: "AI in Healthcare", description: "AI-in-healthcare regulation emerging across ASEAN, creating new compliance requirements for digital health platforms." },
    ],
    analysis: "Navigating this opportunity requires lawyers who understand both the technology and the regulation. Beyond Horizons Legal combines cross-border regulatory expertise with genuine understanding of digital health business models.",
  },
  faqs: {
    heading: "Frequently Asked Questions — Wellness & Health Law",
    items: [
      { question: "What regulations apply to digital health platforms in Singapore?", answer: "Digital health platforms must comply with the Healthcare Services Act, PDPA for health data, and potentially HSA regulations if the platform qualifies as a medical device (SaMD). Telemedicine services require specific licensing." },
      { question: "How do I register a medical device with HSA?", answer: "HSA classifies medical devices into Classes A through D based on risk. Registration involves submitting technical documentation, clinical evidence, and quality management system certifications through the CRIS portal." },
      { question: "What is SaMD and how is it regulated?", answer: "Software as a Medical Device (SaMD) is software intended for medical purposes without being part of a hardware device. Regulatory classification depends on the seriousness of the condition and the significance of the information provided." },
      { question: "Do wellness apps need regulatory approval in Singapore?", answer: "Wellness apps that make medical claims or provide diagnostic functions may be classified as medical devices requiring HSA registration. Pure lifestyle and fitness apps generally fall outside medical device regulation." },
      { question: "How does cross-border telemedicine licensing work in ASEAN?", answer: "Each ASEAN country has distinct telemedicine licensing requirements. Singapore's framework under the Healthcare Services Act requires registration, while other jurisdictions have varying levels of regulation and cross-border recognition." },
      { question: "What data protection rules apply to health data in Singapore?", answer: "Health data is subject to the PDPA with additional sector-specific requirements under healthcare legislation. Cross-border transfers must comply with PDPA transfer limitation obligations and any applicable healthcare-specific data protection rules." },
    ],
  },
  cta: {
    heading: "Navigating health regulation with confidence",
    description: "From medical device registration to digital health platform structuring, our specialist team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Cybersecurity & Emerging Technology", slug: "cybersecurity-tech" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
    { title: "Energy Transition", slug: "energy-transition" },
  ],
};

const WellnessHealthPage = () => <IndustryPageLayout data={data} />;
export default WellnessHealthPage;
