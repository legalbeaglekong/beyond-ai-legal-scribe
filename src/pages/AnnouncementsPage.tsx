import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Megaphone, Calendar, ExternalLink } from "lucide-react";

const announcement = {
  title: "Beyond Horizons Appointed as a Pre-Approved Vendor for Enterprise Singapore's Business Adaptation Grant",
  date: "1 June 2026",
  tag: "Firm News",
};

const AnnouncementsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Announcements | Beyond Horizons</title>
        <meta
          name="description"
          content="Latest news, firm updates and event announcements from Beyond Horizons by Bethel Chambers LLC."
        />
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">
              Stay Informed
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Announcements
            </h1>
          </div>

          <article className="bg-card border border-border rounded-sm p-8 md:p-12 shadow-minimal">
            <div className="flex items-start gap-5 mb-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Megaphone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium bg-accent/10 text-accent uppercase tracking-wider">
                    {announcement.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                    <Calendar className="h-3.5 w-3.5" />
                    {announcement.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-foreground leading-snug">
                  {announcement.title}
                </h2>
              </div>
            </div>

            <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Beyond Horizons by Bethel Chambers LLC has been appointed as a pre-approved vendor for the Legal and Contractual Advisory activity under Enterprise Singapore's Business Adaptation Grant (BizAdapt).
              </p>

              <p>
                BizAdapt supports Singapore-based enterprises affected by tariff measures to adapt their operations and strengthen supply chain resilience. Following the Budget 2026 enhancements, eligible SMEs may receive co-funding of up to 70% of eligible costs (up to 50% for non-SMEs), capped at S$100,000 per enterprise. The grant is available until 6 October 2027.
              </p>

              <div>
                <p className="text-foreground font-medium mb-2">As a pre-approved vendor, we are able to assist eligible enterprises with:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Contract-related work</strong> – reviewing and redrafting contract clauses, identifying risks in contractual obligations, and supporting renegotiations that may be cross-border in nature.</li>
                  <li><strong>Disputes-related work</strong> – advising on and executing dispute resolution strategies, including mediation and arbitration, across jurisdictions.</li>
                </ul>
              </div>

              <p>
                With dual qualification in English and Singapore law and deep cross-border expertise spanning aviation, maritime, space, and advanced air mobility, we are well positioned to support enterprises navigating the commercial and legal complexities of the current tariff environment.
              </p>

              <h3 className="text-lg font-serif text-foreground mt-8 mb-4">Illustrative Case Studies</h3>

              <div className="border-l-2 border-accent/30 pl-5 space-y-8">
                <div>
                  <h4 className="text-base font-serif text-foreground font-medium mb-3">Case Study 1: Cross-Border Supply Chain Renegotiation</h4>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-foreground">Situation:</strong> A Singapore-based manufacturing SME sourced critical components from suppliers in the United States and mainland China. Following the imposition of new tariff measures, the landed cost of key inputs increased by over 20%, rendering its existing supply agreements commercially unviable. The company's contracts were governed by a mix of English law and the law of the PRC, and contained rigid pricing and minimum order provisions with no tariff adjustment mechanism.
                    </p>
                    <p>
                      <strong className="text-foreground">How we helped:</strong> We reviewed the company's supply agreements across both jurisdictions, identified force majeure and hardship provisions that could be invoked, and drafted renegotiation proposals to each counterparty. Where the contracts lacked adequate adjustment mechanisms, we redrafted the relevant clauses to incorporate tariff escalation triggers and cost-sharing arrangements. We also advised on the enforceability of the revised terms under both English and PRC law.
                    </p>
                    <p>
                      <strong className="text-foreground">Outcome:</strong> The company successfully renegotiated pricing terms with all three suppliers without disrupting its production timeline, and now has contractual protections in place against future tariff fluctuations.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-serif text-foreground font-medium mb-3">Case Study 2: Commercial Lease Dispute Arising from Tariff Impact</h4>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-foreground">Situation:</strong> A Singapore-based food and beverage company operated under a long-term equipment lease for specialised kitchen and refrigeration units imported from the EU. When tariff measures increased the cost of replacement parts and servicing, the lessor sought to pass those additional costs through to the lessee mid-term. The lessee disputed the lessor's entitlement to do so under the existing agreement.
                    </p>
                    <p>
                      <strong className="text-foreground">How we helped:</strong> We reviewed the lease agreement, identified that the cost pass-through clause was ambiguously drafted and did not clearly extend to tariff-related increases, and advised the client on its legal position. We then represented the client in mediation with the lessor, presenting a structured counter-proposal that allocated the tariff burden proportionately between the parties for the remainder of the lease term.
                    </p>
                    <p>
                      <strong className="text-foreground">Outcome:</strong> The matter was resolved through mediation within six weeks, avoiding costly litigation. The parties agreed on a revised cost-sharing arrangement and amended the lease to include a clear tariff adjustment mechanism going forward.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm italic pt-4 border-t border-border">
                Note: The above scenarios are illustrative and do not refer to any specific client or matter. They are intended to demonstrate the types of work that may be supported under the BizAdapt grant.
              </p>

              <p>
                If your business has been affected by tariff measures and you would like to explore how BizAdapt can help, please reach out to our founder, Hui Ling Teo.
              </p>

              <p>
                For more details on the BizAdapt grant, please visit{" "}
                <a
                  href="https://www.enterprisesg.gov.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-smooth underline underline-offset-2"
                >
                  EnterpriseSG's website
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>.
              </p>

              <div className="pt-6 border-t border-border">
                <h4 className="text-base font-serif text-foreground font-medium mb-2">About Beyond Horizons by Bethel Chambers LLC</h4>
                <p className="text-sm">
                  Beyond Horizons is a Singapore-based boutique law firm specialising in aviation, maritime, space, advanced air mobility, and robot law. Named in the ALB Singapore Firms to Watch 2026 ranking, the firm provides tailored cross-border legal solutions under English and Singapore law.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnnouncementsPage;
