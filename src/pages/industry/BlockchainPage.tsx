import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Shield, Code, Coins, Layers } from "lucide-react";

const data: IndustryPageData = {
  slug: "blockchain-digital-assets",
  seo: {
    title: "Blockchain & Digital Assets Law Singapore — Crypto Regulation, DeFi & Token Counsel | Beyond Horizons Legal",
    description: "Blockchain-certified digital assets lawyers in Singapore. MAS licensing, token offerings, DeFi, RWA tokenisation. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Blockchain & Digital Assets Law — Token Regulation, DeFi & Web3 Counsel",
    subtitle: "Cutting-edge legal frameworks for blockchain ventures, digital asset issuers, crypto exchanges, and Web3 projects — with certified blockchain technology expertise and deep understanding of MAS regulatory requirements.",
    badges: ["Blockchain Technology Certified", "MAS Regulatory Expertise", "Cross-Border Token Structuring"],
  },
  overview: {
    heading: "What We Do in Blockchain & Digital Assets Law",
    services: [
      { icon: Shield, title: "Digital Asset Compliance", description: "MAS Payment Services Act licensing, digital payment token service regulation, VASP compliance, and cross-border crypto regulatory navigation." },
      { icon: Code, title: "Blockchain Technology Law", description: "Smart contract legal frameworks, DAO governance structures, blockchain IP protection, and technology licensing agreements." },
      { icon: Coins, title: "Token Offerings & Structuring", description: "Security token offerings (STOs), utility token classifications, real-world asset (RWA) tokenisation, and cross-border token distribution frameworks." },
      { icon: Layers, title: "DeFi Legal Frameworks", description: "Decentralised finance protocol governance, DeFi lending/borrowing legal structures, yield farming compliance, and cross-border DeFi regulatory analysis." },
    ],
    stats: ["Blockchain Technology Certified", "MAS PSA licensing expertise", "RWA tokenisation pioneer — aircraft asset tokenisation", "Multi-jurisdictional token structuring"],
  },
  comparison: {
    heading: "Why Choose Specialist Blockchain Counsel",
    otherLabel: "Traditional Law Firms",
    rows: [
      { feature: "Technical Understanding", other: "Rely on external tech consultants for blockchain basics", bh: "Blockchain Technology Certified — genuine technical understanding of protocols, smart contracts, and consensus mechanisms" },
      { feature: "Regulatory Agility", other: "Wait for settled regulation before advising", bh: "Proactive regulatory navigation — advise through regulatory uncertainty with structured risk frameworks" },
      { feature: "Token Structuring", other: "Apply securities law templates to novel token structures", bh: "Bespoke token classification analysis — utility, security, payment token frameworks across jurisdictions" },
      { feature: "Innovation Track Record", other: "Treated blockchain as niche/risky", bh: "Published thought leader — authored on RWA tokenisation of aircraft assets, STO frameworks" },
      { feature: "Pricing", other: "Hourly billing at premium rates", bh: "Transparent pricing — fixed-fee options for regulatory opinions and token structuring" },
      { feature: "Cross-Border", other: "Refer to local counsel on ad-hoc basis", bh: "Established global network for multi-jurisdictional token launches" },
    ],
  },
  spotlight: {
    heading: "Pioneering RWA Tokenisation in Aviation",
    cards: [
      { title: "Who STO my (aircraft) ABS?", description: "Beyond Horizons Legal has published original research on real-world asset tokenisation of aircraft assets — exploring how securitised token offerings and decentralised finance can transform aviation asset financing.", link: "https://beyondhorizons.substack.com/p/who-sto-my-aircraft-abs-securitised", linkText: "Read the Full Analysis" },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — Blockchain & Digital Assets Law",
    items: [
      { question: "Is cryptocurrency legal in Singapore?", answer: "Cryptocurrency is legal in Singapore. The MAS regulates digital payment token services under the Payment Services Act, requiring licensing for exchanges, custodians, and other service providers." },
      { question: "What is the MAS Payment Services Act and how does it regulate digital tokens?", answer: "The Payment Services Act provides a licensing framework for payment services including digital payment token services. It imposes AML/CFT requirements, technology risk management standards, and consumer protection obligations on licensed entities." },
      { question: "What is the difference between a security token and a utility token?", answer: "A security token represents ownership or rights in an underlying asset and is regulated as a capital markets product under the Securities and Futures Act. A utility token provides access to a product or service and may not be regulated as a security, depending on its characteristics." },
      { question: "How do I structure a compliant token offering from Singapore?", answer: "Structuring requires careful analysis of token classification, applicable exemptions under the SFA, MAS licensing requirements, and cross-border distribution rules. Each jurisdiction where tokens are offered may impose additional requirements." },
      { question: "What legal issues arise with DeFi protocols?", answer: "Key issues include regulatory classification of protocol activities, liability allocation in decentralised governance, smart contract risk, cross-border regulatory compliance, and the application of existing financial regulations to novel DeFi structures." },
      { question: "What is RWA tokenisation and how does it work legally?", answer: "Real-world asset tokenisation involves representing ownership of physical or financial assets as digital tokens on a blockchain. Legal structuring requires addressing securities regulation, asset custody, transfer restrictions, and cross-border recognition of tokenised ownership." },
    ],
  },
  cta: {
    heading: "Building on blockchain? Build on solid legal ground.",
    description: "From token structuring to MAS licensing, our blockchain-certified team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Cybersecurity & Emerging Technology", slug: "cybersecurity-tech" },
    { title: "Aviation", slug: "aviation" },
    { title: "Trade & Tariff", slug: "trade-tariff" },
  ],
};

const BlockchainPage = () => <IndustryPageLayout data={data} />;
export default BlockchainPage;
