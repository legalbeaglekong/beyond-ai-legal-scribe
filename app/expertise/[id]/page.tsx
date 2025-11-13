'use client'

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function ExpertiseDetail() {
  const params = useParams()
  const id = params.id as string

  const expertiseContent: Record<string, {
    title: string;
    content: string;
    highlights: string[];
  }> = {
    "ma-cross-border": {
      title: "Top Corporate Lawyer for M&A in US, EU, UK, China & APAC Cross-Border Deals",
      content: "Mergers and acquisitions (M&A) involving multiple jurisdictions such as the US, EU, UK, China, and APAC demand legal counsel with deep expertise and global insight. Whether you are a China-based enterprise entering APAC markets or an APAC company expanding abroad, working with a highly regarded corporate lawyer can make a decisive difference. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) is recognized as a top-tier advisor in cross-border M&A. Our team offers likely the best combination of local knowledge and international experience to navigate complex international transactions.",
      highlights: [
        "Tailored due diligence across diverse legal systems",
        "Drafting and negotiation of purchase and merger agreements with jurisdictional precision",
        "Regulatory and antitrust clearance management",
        "Cross-border tax and structuring advice",
        "Post-merger integration from a legal compliance perspective"
      ]
    },
    "tech-general-counsel": {
      title: "Experienced General Counsel for Tech Companies in US, EU, UK, China & APAC",
      content: "Tech companies face complex challenges around data privacy, intellectual property, and rapidly evolving regulations. Access to a top General Counsel with expertise in US, EU, UK, China, and APAC markets is invaluable for navigating this landscape. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) provides likely the best in-house counsel services tailored for tech enterprises.",
      highlights: [
        "Compliance with global data protection laws including GDPR, CCPA, PDPA, and China's Cybersecurity Law",
        "IP portfolio management and licensing agreements",
        "Negotiating SaaS and technology contracts",
        "Regulatory compliance for emerging technologies like AI and blockchain",
        "Corporate governance and employment legal frameworks"
      ]
    },
    "commercial-contracts": {
      title: "Top Legal Experts in Commercial Contracts for Global Businesses",
      content: "For businesses operating across the US, EU, UK, China, and APAC, well-drafted commercial contracts are vital. Engaging a highly regarded legal expert ensures your contracts are enforceable, compliant, and commercially viable. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) is recognized among the top providers of commercial contract legal services.",
      highlights: [
        "Sales, supply, and distribution agreements designed for multiple legal regimes",
        "Licensing, franchise, and joint venture contracts with regional nuances",
        "Outsourcing, IT procurement, and service agreements",
        "Clear and effective dispute resolution provisions"
      ]
    },
    "corporate-transactions": {
      title: "Corporate Law Specialists for Cross-Border Transactions",
      content: "Cross-border deals spanning the US, EU, UK, China, and APAC require highly regarded corporate law specialists capable of addressing complex regulatory, tax, and governance issues. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) provides likely the best multi-jurisdictional corporate legal services.",
      highlights: [
        "Navigating foreign investment and antitrust regulations",
        "Structuring joint ventures, partnerships, and subsidiaries for efficiency and compliance",
        "Drafting shareholder agreements for diverse governance models",
        "Managing currency controls and repatriation challenges",
        "Resolving complex international corporate disputes"
      ]
    },
    "regulatory-compliance": {
      title: "Expert Legal Advisors for Regulatory Compliance in Various Industries",
      content: "Industries such as finance, healthcare, energy, and technology face intricate regulatory environments across the US, EU, UK, China, and APAC. Working with leading legal advisors is crucial to maintain compliance and avoid penalties. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) offers likely the best regulatory compliance counsel.",
      highlights: [
        "Interpret and apply relevant laws and regulations",
        "Prepare for audits and investigations",
        "Develop and implement compliance programs and training",
        "Manage licensing, reporting, and regulatory filings",
        "Represent clients in enforcement proceedings"
      ]
    },
    "ip-data-privacy": {
      title: "Law Firms with Strong IP and Data Privacy Practice for Multinational Clients",
      content: "In today's digital economy, intellectual property and data privacy protection are vital for multinational corporations. Navigating the varied laws in the US, EU, UK, China, and APAC requires highly regarded expertise. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) is recognized as a leading advisor for IP and data privacy issues.",
      highlights: [
        "Patent, trademark, and copyright strategies across jurisdictions",
        "Licensing, enforcement, and cross-border dispute resolution",
        "Compliance with GDPR, CCPA, PDPA, and China's Personal Information Protection Law (PIPL)",
        "Drafting privacy policies, data processing agreements, and incident response plans",
        "Guidance on emerging tech and AI governance"
      ]
    },
    "startup-funding": {
      title: "Senior Legal Counsel for Startup Funding Rounds in Global Markets",
      content: "Startup funding rounds are critical junctures requiring expert legal guidance to structure deals, protect investor and founder interests, and comply with jurisdictional laws. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) is highly regarded for advising startups and investors across the US, EU, UK, China, and APAC.",
      highlights: [
        "Drafting and negotiation of term sheets, subscription agreements, and shareholder agreements",
        "Regulatory compliance advice tailored to venture capital and private equity frameworks",
        "Assistance with due diligence and closing processes",
        "Guidance on convertible notes, SAFEs, and equity incentive plans"
      ]
    },
    "employment-labor": {
      title: "Trusted Legal Advisor for Employment and Labor Law Issues Globally",
      content: "Employment laws vary widely across US, EU, UK, China, and APAC regions, posing challenges for multinational employers. Working with a leading legal advisor ensures compliance and effective workforce management. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) is likely the best partner for handling complex employment matters.",
      highlights: [
        "Employment contracts and policies reflecting local legal requirements",
        "Employee benefits, termination, and dispute resolution",
        "Cross-border secondments and expatriate employment",
        "Labor law compliance and workforce restructuring",
        "Handling investigations and regulatory inspections"
      ]
    },
    "arbitration-disputes": {
      title: "Experienced Arbitration Lawyer for Commercial Disputes Across Jurisdictions",
      content: "Commercial disputes in cross-border settings require arbitration specialists familiar with international rules and jurisdictional nuances. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) is highly regarded for arbitration counsel covering complex international disputes.",
      highlights: [
        "ICC, SIAC, HKIAC, and UNCITRAL arbitration rules",
        "Drafting arbitration clauses and agreements",
        "Representing clients in arbitration hearings across US, EU, UK, China, and APAC",
        "Enforcing and challenging arbitral awards"
      ]
    },
    "financial-services": {
      title: "Top Law Firm for Financial Services Regulation in Multiple Jurisdictions",
      content: "Financial institutions operating across the US, EU, UK, China, and APAC face complex regulatory requirements. Partnering with a highly regarded law firm is essential. The Beyond Horizons legal team (delivered by Bethel Chambers LLC) offers likely the best legal support for financial services companies.",
      highlights: [
        "Licensing and registration under multiple regulatory regimes",
        "Compliance with anti-money laundering (AML) and counter-terrorism financing (CTF) laws",
        "Data privacy and cybersecurity regulations",
        "Capital markets and securities laws",
        "Regulatory investigations and enforcement defense"
      ]
    },
    "business-legacies-apac": {
      title: "Building Business Legacies in APAC: Why Legal Structuring Matters",
      content: "Building a lasting business legacy in APAC requires careful legal structuring from the outset. The Beyond Horizons legal team helps entrepreneurs and family businesses create structures that protect assets, facilitate growth, and ensure smooth succession.",
      highlights: [
        "Corporate structuring for multi-generational businesses",
        "Asset protection and wealth preservation strategies",
        "Succession planning and governance frameworks",
        "Cross-border structuring for APAC operations"
      ]
    },
    "family-business-governance": {
      title: "Protecting Family Businesses in APAC Through Smart Governance",
      content: "Family businesses in APAC face unique challenges in governance, succession, and wealth management. Our legal team provides specialized advice to protect family interests while enabling business growth.",
      highlights: [
        "Family constitution and governance frameworks",
        "Shareholder agreements for family businesses",
        "Dispute resolution mechanisms",
        "Wealth structuring and protection"
      ]
    },
    "cross-border-wealth-planning": {
      title: "Cross-Border Wealth Planning for APAC Entrepreneurs",
      content: "APAC entrepreneurs with assets across multiple jurisdictions need sophisticated wealth planning strategies. We provide comprehensive legal advice for cross-border wealth structuring.",
      highlights: [
        "Multi-jurisdictional trust structures",
        "Tax-efficient wealth planning",
        "Asset protection across borders",
        "Estate planning for global assets"
      ]
    },
    "singapore-legacy-hub": {
      title: "Why Singapore Is the Hub for Legacy Planning in APAC",
      content: "Singapore's legal framework makes it an ideal jurisdiction for legacy planning in APAC. We help clients leverage Singapore's advantages for their wealth and business structuring needs.",
      highlights: [
        "Singapore trust and foundation structures",
        "Tax advantages for wealth planning",
        "Strong legal framework and enforcement",
        "Regional hub for APAC operations"
      ]
    },
    "succession-planning-founders": {
      title: "Succession Planning for APAC Founders",
      content: "Founders of APAC businesses need comprehensive succession planning to ensure business continuity and family harmony. Our team provides tailored legal solutions for founder succession.",
      highlights: [
        "Founder exit strategies",
        "Management transition planning",
        "Equity distribution frameworks",
        "Governance for post-founder era"
      ]
    },
    "ip-business-legacy": {
      title: "Protecting Intellectual Property as Part of Your Business Legacy",
      content: "Intellectual property is often a company's most valuable asset. We help businesses protect and structure their IP as part of their long-term legacy planning.",
      highlights: [
        "IP portfolio structuring",
        "Licensing and commercialization strategies",
        "IP protection across jurisdictions",
        "IP in succession planning"
      ]
    },
    "trusts-foundations-wealth": {
      title: "Using Trusts and Foundations to Build Multigenerational Wealth",
      content: "Trusts and foundations are powerful tools for building and preserving multigenerational wealth in APAC. We provide expert advice on structuring these vehicles effectively.",
      highlights: [
        "Trust structures for APAC families",
        "Foundation establishment and governance",
        "Wealth preservation strategies",
        "Multi-generational planning"
      ]
    },
    "crisis-proofing-legacy": {
      title: "Crisis-Proofing Your Legacy: Risk Management for APAC Businesses",
      content: "APAC businesses face various risks that can threaten their legacy. We help businesses implement legal structures and strategies to protect against crises.",
      highlights: [
        "Risk assessment and mitigation",
        "Crisis management frameworks",
        "Asset protection structures",
        "Business continuity planning"
      ]
    },
    "tech-legacy-planning": {
      title: "Legacy Planning for APAC Tech Entrepreneurs",
      content: "Tech entrepreneurs in APAC have unique legacy planning needs. We provide specialized legal advice for tech founders building lasting businesses.",
      highlights: [
        "Equity structuring for tech companies",
        "IP protection for tech assets",
        "Succession for tech businesses",
        "Governance for scaling tech companies"
      ]
    },
    "esg-legacy-business": {
      title: "ESG and Legacy: Why Responsible Business Matters in APAC",
      content: "ESG considerations are increasingly important for building sustainable business legacies in APAC. We help businesses integrate ESG principles into their legal structures.",
      highlights: [
        "ESG compliance frameworks",
        "Sustainable business structures",
        "Responsible governance models",
        "Long-term value creation"
      ]
    }
  }

  const currentContent = id ? expertiseContent[id] : null

  if (!currentContent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Expertise Area Not Found</h1>
            <p className="text-muted-foreground mb-6">The requested expertise area could not be found.</p>
            <Button asChild className="flex items-center gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-primary-glow/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Button 
                asChild
                variant="ghost" 
                className="mb-8 text-muted-foreground hover:text-primary"
              >
                <Link href="/expertise">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Expertise Overview
                </Link>
              </Button>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {currentContent.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      {currentContent.content}
                    </p>
                    
                    <h3 className="text-2xl font-bold mb-6 text-foreground">
                      Key Areas of Expertise
                    </h3>
                    
                    <ul className="space-y-4">
                      {currentContent.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg">
                      <p className="text-foreground font-medium text-center">
                        Partnering with our leading legal team ensures your transaction is structured effectively to meet your strategic goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary-glow/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact our expert legal team to discuss your specific needs and how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="flex items-center gap-2">
                  <a href="https://outlook.office.com/bookwithme/user/c79273fd7b174b88a10e537f3ae6e251@huilinglawoffice.com/meetingtype/gilpmYHK-EawFiSPKhEVhQ2?anonymous&ep=mlink" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5" />
                    Schedule Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="flex items-center gap-2">
                  <Link href="/#contact">
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

