import Legal500Text from "@/components/Legal500Text";
import { Link } from "@/lib/router-compat";
import { useParams, useNavigate } from "@/lib/router-compat";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ac = "text-primary underline underline-offset-2";
const st = "text-foreground";
const Ext = ({ href, children }: { href: string; children: import("react").ReactNode }) => <a href={href} target="_blank" rel="noopener" className={ac}>{children}</a>;
const acraSection = (
  <section className="section-padding bg-background">
    <div className="max-w-3xl mx-auto container-padding">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">What changes for Singapore companies from 20 October 2026 (ACRA)?</h2>
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>The Accounting and Corporate Regulatory Authority (ACRA) has announced that the next phase of the Corporate and Accounting Laws (Amendment) Act 2025 takes effect on 20 October 2026. ACRA's notice lists six groups of changes. Three matter to most companies when they file their annual return or deal with their registered office; the others concern filings that most private companies do not make, and accounting firms.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className={st}>Annual return.</strong> When filing, a company must confirm that what ACRA holds is correct for its directors, chief executive officers (CEOs), secretaries, auditors and relevant members. ACRA gives examples of the details covered, including names, identification details, nationality, contact and registered office addresses, appointment dates and, where relevant, shareholdings. There is also a new question on whether anyone is acting as CEO. A company limited by guarantee must also confirm the total number of members it last reported. ACRA suggests checking and updating records in <Ext href="https://www.bizfile.gov.sg/">Bizfile</Ext> (ACRA's online filing portal) before filing.</li>
          <li><strong className={st}>Registered office and records.</strong> Companies no longer have to keep the registered office open to the public for set minimum hours each business day. Records must still be open to inspection: a person who wants to inspect must give reasonable notice, and the company must then make the records available for at least two hours on each relevant business day. A change of registered office address must still be filed within 14 days.</li>
          <li><strong className={st}>Striking off.</strong> The process is shortened. For a voluntary striking off, the Gazette notice can be published as early as the day the notice is sent; for a striking off started by the Registrar, as early as 15 days after ACRA's letter to the company. ACRA's notice also covers changes to restoring struck-off entities.</li>
          <li><strong className={st}>Filings removed.</strong> The statement in lieu of prospectus is abolished, and public limited companies with a share capital no longer need to hold a statutory meeting or prepare a statutory report. Most private companies are not affected.</li>
          <li><strong className={st}>Accounting firms.</strong> Public accountants may renew their registration for one, two or three years, and professional indemnity insurance requirements are extended to accounting firms run as sole proprietorships or partnerships. These do not change what an ordinary company files.</li>
        </ul>
        <p><strong className={st}>Plain reading.</strong> For a lean company, the practical step is usually a records check in Bizfile before the next annual return, and a short note on who handles inspection requests. A fractional general counsel can run that check as part of a retainer. If that would be useful, you are welcome to write to <a href="mailto:HL@beyondhorizons.sg" className={ac}>HL@beyondhorizons.sg</a>.</p>
        <p><em>General information on Singapore law as at October 2026, based on <Ext href="https://www.acra.gov.sg/news-events/news-announcements/commencement-of-key-changes-under-the-corporate-and-accounting-laws--amendment--act-2025-on-20-october-2026/">ACRA's notice of 6 October 2026</Ext>; not legal advice. Check ACRA's notice and the Act for the full position. Beyond Horizons by Bethel Chambers LLC is a Singapore law practice group, not an English law firm.</em></p>
      </div>
    </div>
  </section>
);

export const maFaqs = [
  {
    question: "Are you a Singapore tax lawyer firm?",
    answer: "Beyond Horizons by Bethel Chambers LLC is a corporate and commercial practice group. We often advise on cross-border tax and structuring issues inside transactions (M&A, investments, group reorganisations). We do not hold out as a full-service tax controversies boutique focused only on IRAS litigation. If your matter is primarily a tax dispute, personal tax filing, or transfer-pricing controversy, we may refer or work alongside specialist tax counsel or advisers.",
  },
  {
    question: "What tax-related help do you give on cross-border M&A?",
    answer: "Typically: flagging structuring and jurisdictional issues in diligence, coordinating with tax advisers on the deal timeline, reflecting tax allocation and covenant points in transaction documents, and aligning Singapore / English-law workstreams with overseas counsel. Exact scope depends on the deal — we do not quote a fixed tax “package” on this page.",
  },
  {
    question: "When should I hire a specialist tax lawyer or Big Four tax team instead?",
    answer: "Often when you need IRAS investigations or appeals, complex transfer pricing controversies, tax opinion letters as the main deliverable, or compliance filings and returns. Dedicated tax partners at large firms and Big Four tax practices are built for that lane. We remain useful when the buying moment is the deal and you want counsel who can run the transaction while plugging into tax specialists.",
  },
  {
    question: "Can Beyond Horizons help if my issue is a company deal or restructuring?",
    answer: "Yes — many “tax lawyer” searches are really about how to structure an investment, exit, holding company, or cross-border acquisition efficiently and lawfully. Tell us whether the need is personal tax, corporate deal structuring, or a dispute. A short consultation helps route you correctly (including referrals when we are not the right fit).",
  },
  {
    question: "How do I start?",
    answer: "Schedule a consultation or contact us via the site (including WhatsApp). Bring a one-paragraph summary: jurisdictions, timeline, and whether you already have a tax adviser. General website information is not legal advice and does not create a solicitor-client relationship.",
  },
  {
    question: "What does a cross-border M&A lawyer in Singapore do?",
    answer: "Typically, coordinates due diligence across jurisdictions, drafts and negotiates the share or asset purchase agreement, manages regulatory and merger-control filings with local counsel, and aligns the deal structure with tax and post-closing integration.",
  },
  {
    question: "Do you advise on the laws of other countries in an M&A deal?",
    answer: "We advise on Singapore law directly and give English law input through Hui Ling Teo, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. We do not advise on other laws, including US, EU, Chinese and other APAC laws; for those we work with local counsel and coordinate their advice.",
  },
  {
    question: "Is Singapore law commonly used for cross-border deals in Asia?",
    answer: "Singapore law and Singapore-seated arbitration are often chosen for regional deals, but the right governing law depends on the parties, the assets and the financing. We can discuss the options at the outset.",
  },
  {
    question: "When should we bring in cross-border M&A counsel?",
    answer: "Usually before a term sheet or letter of intent is signed, so that structure, conditions, regulatory timing and key protections can be considered early rather than renegotiated later.",
  },
];

export const techFaqs = [
  {
    "question": "What is product counsel for a SaaS or AI company?",
    "answer": "Product counsel is legal support that sits close to the product team: reviewing new features and data flows, keeping customer terms and privacy notices consistent with how the product works, and flagging licensing and regulatory questions for emerging technologies such as AI before launch. Beyond Horizons by Bethel Chambers LLC provides this from Singapore."
  },
  {
    "question": "Do you advise on data protection laws outside Singapore?",
    "answer": "We advise on Singapore's PDPA. Where other data protection regimes apply to your users or customers, advice on those laws is obtained from and coordinated with foreign counsel, so you keep one point of contact."
  },
  {
    "question": "How is this different from fractional general counsel?",
    "answer": "This page covers technology and product legal work for tech companies, scoped matter by matter. Fractional general counsel is an ongoing retainer in which a senior lawyer acts as your in-house legal function across your legal matters within the agreed scope, including corporate, employment and board work. A tech company can use either, or both."
  },
  {
    "question": "How do we start?",
    "answer": "Send a short email to HL@beyondhorizons.sg describing your product, your stage and the contracts or questions you need help with. Scope and fees are set in an engagement letter before work begins."
  }
];

const ExpertiseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const expertiseContent: Record<string, {
    title: string;
    content: string;
    highlights: string[];
  }> = {
    "ma-cross-border": {
      title: "Cross-Border M&A Counsel — Singapore-anchored",
      content: "Mergers and acquisitions (M&A) involving multiple jurisdictions such as the US, EU, UK, China, and APAC need coordinated legal counsel. Whether you are a China-based enterprise entering APAC markets or an APAC company expanding abroad, working with experienced corporate counsel can help. Beyond Horizons by Bethel Chambers LLC advises on cross-border M&A from Singapore. We combine Singapore law advice with coordination of foreign counsel across the jurisdictions involved in a transaction.",
      highlights: [
        "Tailored due diligence across diverse legal systems",
        "Drafting and negotiation of purchase and merger agreements with jurisdictional precision",
        "Regulatory and antitrust clearance management",
        "Cross-border tax and structuring advice",
        "Post-merger integration from a legal compliance perspective"
      ]
    },
    "tech-general-counsel": {
      title: "Legal Counsel for Tech Companies — SaaS, Platforms, Data and AI Products",
      content: "Tech companies face complex challenges around data privacy, intellectual property, and rapidly evolving regulations. Beyond Horizons by Bethel Chambers LLC advises SaaS, platform, data and AI product companies from Singapore on the legal work that sits closest to the product: product counsel, customer terms and privacy, IP and licensing, and technology commercial contracts. Advice on other laws is coordinated with foreign counsel.",
      highlights: [
        "Product counsel for SaaS, platform and AI products: feature and data-flow reviews, and terms that match how the product works",
        "Customer terms, platform terms of use and privacy notices",
        "Compliance with Singapore's PDPA, with foreign counsel coordinated for other regimes",
        "IP portfolio management and licensing agreements",
        "Negotiating SaaS and technology contracts",
        "Regulatory compliance for emerging technologies like AI and blockchain",
        "Corporate governance and employment legal frameworks"
      ]
    },
    "commercial-contracts": {
      title: "Top Legal Experts in Commercial Contracts for Global Businesses",
      content: "For businesses operating across borders, well-drafted commercial contracts are vital. Careful drafting helps make contracts clear and workable. Beyond Horizons by Bethel Chambers LLC advises on commercial contracts.",
      highlights: [
        "Sales, supply, and distribution agreements designed for multiple legal regimes",
        "Licensing, franchise, and joint venture contracts with regional nuances",
        "Outsourcing, IT procurement, and service agreements",
        "Clear and effective dispute resolution provisions"
      ]
    },
    "corporate-transactions": {
      title: "Corporate Law Specialists for Cross-Border Transactions",
      content: "Cross-border deals raise regulatory, tax and governance issues that need coordinated advice; advice on laws other than Singapore and English law is obtained from foreign counsel. Beyond Horizons by Bethel Chambers LLC advises on cross-border corporate transactions from Singapore.",
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
      content: "Industries such as finance, healthcare, energy, and technology face intricate regulatory environments across jurisdictions. Legal advice can help organisations manage compliance risk. Beyond Horizons by Bethel Chambers LLC advises on regulatory compliance.",
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
      content: "In today's digital economy, intellectual property and data privacy protection are vital for multinational corporations. Navigating varied laws across jurisdictions needs coordinated advice. Beyond Horizons by Bethel Chambers LLC advises on IP and data privacy issues.",
      highlights: [
        "Patent, trademark, and copyright strategies across jurisdictions",
        "Licensing, enforcement, and cross-border dispute resolution",
        "Compliance with Singapore's PDPA, with foreign counsel coordinated for other regimes",
        "Drafting privacy policies, data processing agreements, and incident response plans",
        "Guidance on emerging tech and AI governance"
      ]
    },
    "startup-funding": {
      title: "Senior Legal Counsel for Startup Funding Rounds in Global Markets",
      content: "Startup funding rounds are critical junctures requiring expert legal guidance to structure deals, protect investor and founder interests, and comply with jurisdictional laws. Beyond Horizons by Bethel Chambers LLC advises startups and investors from Singapore.",
      highlights: [
        "Drafting and negotiation of term sheets, subscription agreements, and shareholder agreements",
        "Regulatory compliance advice tailored to venture capital and private equity frameworks",
        "Assistance with due diligence and closing processes",
        "Guidance on convertible notes, SAFEs, and equity incentive plans"
      ]
    },
    "employment-labor": {
      title: "Trusted Legal Advisor for Employment and Labor Law Issues Globally",
      content: "Employment laws vary across jurisdictions, posing challenges for multinational employers; we advise on Singapore law and coordinate foreign counsel elsewhere. Legal advice can help employers manage workforce compliance. Beyond Horizons by Bethel Chambers LLC advises on employment matters.",
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
      content: "Commercial disputes in cross-border settings require arbitration specialists familiar with international rules and jurisdictional nuances. Beyond Horizons by Bethel Chambers LLC advises on arbitration covering international disputes.",
      highlights: [
        "ICC, SIAC, HKIAC, and UNCITRAL arbitration rules",
        "Drafting arbitration clauses and agreements",
        "Representing clients in arbitration, with foreign counsel coordinated where other laws apply",
        "Enforcing and challenging arbitral awards"
      ]
    },
    "financial-services": {
      title: "Financial Services Regulation Counsel — Singapore-anchored",
      content: "Financial institutions operating across the US, EU, UK, China, and APAC face complex regulatory requirements. Beyond Horizons by Bethel Chambers LLC advises financial services businesses from Singapore, and coordinates advice on other laws with foreign counsel.",
      highlights: [
        "Licensing and registration under multiple regulatory regimes",
        "Compliance with anti-money laundering (AML) and counter-terrorism financing (CTF) laws",
        "Data privacy and cybersecurity regulations",
        "Capital markets and securities laws",
        "Regulatory investigations and enforcement defense"
      ]
    }
  };

  const currentContent = id ? expertiseContent[id] : null;

  if (!currentContent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Expertise Area Not Found</h1>
            <p className="text-muted-foreground mb-6">The requested expertise area could not be found.</p>
            <Button onClick={() => navigate("/")} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const seoTitleMap: Record<string, string> = {
    "ma-cross-border": "Cross-Border M&A Lawyer Singapore | Beyond Horizons",
    "tech-general-counsel": "Legal Counsel for Tech Companies Singapore | Beyond Horizons",
    "commercial-contracts": "Commercial Contracts Counsel | Beyond Horizons",
    "corporate-transactions": "Cross-Border Corporate Counsel | Beyond Horizons",
    "regulatory-compliance": "Regulatory Compliance Counsel | Beyond Horizons",
    "ip-data-privacy": "IP & Data Privacy Counsel | Beyond Horizons",
    "startup-funding": "Startup Funding Counsel | Beyond Horizons",
    "employment-labor": "Global Employment Counsel | Beyond Horizons",
    "arbitration-disputes": "International Arbitration | Beyond Horizons",
    "financial-services": "Financial Services Regulation | Beyond Horizons",
  };
  const seoTitle = (id && seoTitleMap[id]) || `${currentContent.title.slice(0, 50)} | Beyond Horizons`;
  const seoDescription = id === "ma-cross-border"
    ? "Cross-border M&A lawyer in Singapore: due diligence, purchase agreements, regulatory clearances and deal structuring, with foreign counsel coordinated."
    : id === "tech-general-counsel" ? "Singapore-anchored counsel for SaaS, platform, data and AI product companies: product counsel, terms and privacy, IP and licensing, technology contracts." : currentContent.content.substring(0, 160);
  const showMaFaqs = id === "ma-cross-border";
  const pageFaqs = showMaFaqs ? maFaqs : id === "tech-general-counsel" ? techFaqs : [];

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: currentContent.title,
            provider: {
              "@type": "Organization",
              name: id === "tech-general-counsel" ? "Beyond Horizons by Bethel Chambers LLC" : "Bethel Chambers LLC",
              url: "https://beyondhorizons.sg"
            },
            description: id === "tech-general-counsel" ? "Beyond Horizons by Bethel Chambers LLC advises SaaS, platform, data and AI product companies from Singapore on product counsel, customer terms and privacy, IP and licensing, and technology commercial contracts. Advice on other laws is coordinated with foreign counsel." : currentContent.content,
            areaServed: "Asia-Pacific",
            url: `https://beyondhorizons.sg/expertise/${id}`,
            serviceType: "Legal Service"
          })}
        </script>
        {pageFaqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: pageFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            })}
          </script>
        )}
      </Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-primary-glow/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="mb-8 text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Why Choose Us
              </Button>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {currentContent.title}
              </h1>
              {showMaFaqs && (
                <p className="text-lg leading-relaxed text-muted-foreground text-left">
                  <strong className="text-foreground">In short.</strong> Beyond Horizons by Bethel Chambers LLC acts as Singapore-based counsel on cross-border mergers and acquisitions: due diligence across legal systems, purchase and merger agreements, regulatory and antitrust clearance coordination, and how deal structures interact with tax. Singapore law advice is given directly; English law input is given through Hui Ling Teo, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore; and advice on other laws, including local tax, is obtained from and coordinated with foreign counsel. We will say when a matter needs a specialist tax or disputes team instead. Beyond Horizons by Bethel Chambers LLC is a Singapore law practice group, not an English law firm.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-card to-card/80 backdrop-blur-xs border-0 shadow-elegant">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      {currentContent.content}
                      {id === "commercial-contracts" && <> Companies that need that contract support continuously, as part of wider senior legal cover, can also retain <Link to="/industry/fractional-gc" className="text-primary underline">fractional general counsel support</Link>.</>}
                      {id === "startup-funding" && <> Companies that raise in successive rounds can also hold this work within <Link to="/industry/fractional-gc" className="text-primary underline">fractional general counsel</Link> support, alongside their other legal matters.</>}
                      {id === "corporate-transactions" && <> Where joint ventures and shareholder matters are a continuing part of the business, they can be covered by <Link to="/industry/fractional-gc" className="text-primary underline">fractional in-house legal counsel</Link> on a retainer.</>}
                      {id === "ma-cross-border" && <> Growing companies with an acquisition alongside fundraising or joint venture work can also retain a <Link to="/industry/fractional-gc" className="text-primary underline">fractional GC</Link> to hold the company's side across those workstreams.</>}
                    </p>
                    
                    {id === "tech-general-counsel" && (<>{/* Tech-company answer */}<h2 className="text-2xl font-bold mb-6 text-foreground">What does legal counsel for a tech company in Singapore cover?</h2><p className="text-lg leading-relaxed text-muted-foreground mb-8">For SaaS, platform, data and AI product companies, it usually covers four strands of work: product counsel; customer terms and privacy, including compliance with Singapore's PDPA; IP and licensing; and technology commercial contracts such as SaaS and vendor agreements. Beyond Horizons by Bethel Chambers LLC advises on these from Singapore and coordinates foreign counsel for other regimes.</p></>)}
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

                    {id === "regulatory-compliance" && <><p className="mt-8 text-muted-foreground leading-relaxed">Where compliance work is continuing rather than one-off, it can sit within a <Link to="/industry/fractional-gc" className={ac}>fractional general counsel retainer</Link>.</p>{acraSection}</>}
                    {id === "commercial-contracts" && <p className="mt-8 text-muted-foreground leading-relaxed">For Singapore and English law supply and manufacturing contracts, see our <Link to="/singapore-manufacturing-supply-agreements" className="text-primary underline">manufacturing and supply agreement counsel</Link> page.</p>}

                    {showMaFaqs && (
                      <p className="mt-8 text-muted-foreground leading-relaxed">
                        On tax, we advise as <strong className="text-foreground">corporate / transactional counsel</strong> on how deals and structures interact with tax issues across borders. We are not a substitute for a dedicated tax disputes practice or Big Four return preparation — and we will say so when you need that specialist lane.
                      </p>
                    )}
                    
                    {id === "financial-services" && <p className="mt-6 text-muted-foreground">Where a financing involves aircraft or a lease interest, see our <Link to="/industry/aviation" className="text-primary underline">aviation finance leasing</Link> page for English-law lease and finance documents coordinated from Singapore.</p>}
                    {id === "financial-services" && <p className="mt-6 text-muted-foreground">For continuing regulatory and contract support, see <Link to="/industry/fractional-gc" className={ac}>fractional general counsel in Singapore</Link>.</p>}
                    {id === "tech-general-counsel" && (<div className="mt-8 space-y-4"><h3 className="text-2xl font-bold text-foreground">Ongoing general counsel cover</h3><p className="text-muted-foreground leading-relaxed">For companies that want ongoing general counsel cover across their legal matters, not only technology and product work, see <Link to="/industry/fractional-gc" className="text-primary underline">fractional general counsel</Link>. Fractional GC plans start from SGD 4,000 per month to access <Legal500Text text="Chambers Asia-Pacific 2026 (Aviation: Finance) and Legal 500 Asia Pacific 2026 (Asset Finance) ranked counsel" />, Hui Ling Teo, with more than a decade of experience, including at international law firms. What each plan covers is agreed in an engagement letter. To discuss your product, your contracts or ongoing cover, email <a href="mailto:HL@beyondhorizons.sg" className="text-primary underline">HL@beyondhorizons.sg</a>.</p></div>)}
                    <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg">
                      <p className="text-foreground font-medium text-center">
                        Speak with us about how your transaction can be structured to meet your goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {pageFaqs.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {pageFaqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`ma-faq-${index}`} className={id === "tech-general-counsel" ? "group" : undefined}>
                      <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
                      <AccordionContent {...(id === "tech-general-counsel" ? { forceMount: true as const } : {})} className={id === "tech-general-counsel" ? "text-muted-foreground leading-relaxed group-data-[state=closed]:hidden" : "text-muted-foreground leading-relaxed"}>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary-glow/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us to discuss your specific needs and how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExpertiseDetail;