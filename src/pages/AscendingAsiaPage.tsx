import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EbookViewer from "@/components/ebook/EbookViewer";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { SITE_URL, BRAND_FULL, WHATSAPP_URL } from "@/config/business";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const FEDERAL_REGISTER_URL =
  "https://www.federalregister.gov/documents/2026/08/19/2026-16979/adjusting-imports-of-unmanned-aircraft-systems-and-unmanned-aircraft-systems-components-into-the";

const BIZADAPT_URL = "https://www.enterprisesg.gov.sg/financial-support/business-adaptation-grant";

const regulatoryConcernOptions = [
  "Section 232 / UAS tariff & content-origin",
  "Singapore AAM market entry",
  "CAAS / UAS operating permissions",
  "APAC ownership or joint-venture structuring",
  "Aircraft leasing / finance documents",
];

export const section232Faqs = [
  {
    question: "What is Section 232 for UAS, and when did it go live?",
    answer:
      "Section 232 here refers to US national-security tariff measures on unmanned aircraft systems and certain components under Proclamation 11055. Annex I and II measures are described as live from 3 September 2026 (US Eastern). Annex III component timing is described as 9 February 2027. Always confirm dates and product coverage in the Federal Register — lists and guidance can be updated.",
  },
  {
    question: "Why do APAC suppliers care if they are not a US importer of record?",
    answer:
      "If you supply UAS, parts, or critical technology into US programmes, buyers and importers will often push origin and certification risk upstream into contracts — warranties, audit rights, and who pays if preferential treatment fails. The commercial fight is frequently the file, not only the headline percentage.",
  },
  {
    question: "What is the “partner-country” path in plain English?",
    answer:
      "For certain partner jurisdictions, the proclamation describes lower duty caps if the importer certifies that substantially all critical components and technology originate in the US or listed partners. Marketing a finished good as “from” a partner country is not automatically enough. Treat “substantially all critical” as a documentation and supply-chain problem until Commerce verification practice is clear on your facts.",
  },
  {
    question: "What should we put in supplier / OEM contracts now?",
    answer:
      "Typically clarify who owns HTS support, content-origin evidence, sub-tier attestations, and the response file if CBP or a customer challenges treatment; what happens to price and delivery if duty changes; and audit/cooperation duties. Exact clauses depend on your stack — this page is not a form contract.",
  },
  {
    question: "How does Ascending Asia / Beyond Horizons help?",
    answer:
      "Ascending Asia is Beyond Horizons’ AAM market-entry playbook for APAC structuring and regulatory anchoring (Singapore-focused). On Section 232 UAS, we can help APAC clients pressure-test contract and origin-paper allocation for US-programme supply — often alongside US customs specialists. Soft next step: register for the guide and/or schedule a consultation. Beyond Horizons / Bethel Chambers LLC is an EnterpriseSG BizAdapt pre-approved vendor for Legal & Contractual Matters; that is not a government endorsement.",
  },
] as const;

const AscendingAsiaPage = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleGuideRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") || "").trim();
    const officialEmail = String(formData.get("officialEmail") || "").trim();
    const companyName = String(formData.get("companyName") || "").trim();
    const title = String(formData.get("title") || "").trim();
    const launchWindow = String(formData.get("launchWindow") || "").trim();
    const concern = String(formData.get("regulatoryConcern") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setFormStatus("submitting");
    setFormError("");

    const inquiry = [
      "Ascending Asia guide registration",
      companyName ? `Company: ${companyName}` : "Company: Not provided",
      title ? `Title: ${title}` : "Title: Not provided",
      launchWindow ? `Launch window: ${launchWindow}` : "Launch window: Not provided",
      concern ? `Primary regulatory concern: ${concern}` : "Primary regulatory concern: Not provided",
      message ? `Message: ${message}` : "Message: Not provided",
    ].join("\n");

    try {
      const { error } = await supabase.functions.invoke("send-contact-inquiry", {
        body: {
          name: fullName,
          email: officialEmail,
          company: companyName,
          message: inquiry,
        },
      });

      if (error) throw error;
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
      setFormError("We could not submit the registration. Please email HL@beyondhorizons.sg or chat on WhatsApp.");
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Ascending Asia: Legal Strategies for Advanced Air Mobility Market Entry 2026",
            author: { "@type": "Organization", name: BRAND_FULL },
            publisher: { "@type": "Organization", name: BRAND_FULL },
            inLanguage: "en",
            url: `${SITE_URL}/ascending-asia`,
            isAccessibleForFree: true,
            about: "Advanced Air Mobility regulation in Asia-Pacific",
          })}
        </script>
      </Helmet>
      <Header />
      <main className="pt-[72px] md:pt-[88px]">
        <h1 className="sr-only">
          Ascending Asia — Legal Strategies for Advanced Air Mobility Market Entry 2026
        </h1>
        <section className="bg-background section-padding">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 items-start">
              <div className="space-y-7">
                <div className="space-y-5">
                  <p className="text-xs uppercase tracking-widest text-accent font-semibold">
                    Public counsel note
                  </p>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                    Section 232 UAS tariffs — what APAC AAM & UAS suppliers should watch
                  </h2>
                </div>

                <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    As of <strong className="text-foreground">3 September 2026</strong>, Section 232 tariffs on unmanned aircraft systems (UAS) and certain UAS components are described as in force under <strong className="text-foreground">Proclamation 11055</strong> (Federal Register doc <strong className="text-foreground">2026-16979</strong>, 91 FR 53699). Confirm the live text: {" "}
                    <a href={FEDERAL_REGISTER_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">
                      Federal Register Proclamation 11055 / 2026-16979
                    </a>
                  </p>
                  <p>
                    For Singapore and wider APAC operators and suppliers selling into US programmes, the headline tariff rate is often not the only constraint. The harder file is usually <strong className="text-foreground">content-origin certification</strong> — and <strong className="text-foreground">who owns the paperwork</strong> when CBP asks. Is that how your contracts allocate the file today?
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    ["100% ad valorem", "Annex I (UAS MTOW >25 kg, thermal imagers, docking stations, certain critical components)"],
                    ["25%", "Annex II (UAS MTOW ≤25 kg)"],
                    ["25%", "Annex III components from 9 February 2027"],
                  ].map(([rate, body]) => (
                    <div key={rate} className="rounded border border-border bg-card p-5 shadow-minimal">
                      <p className="text-2xl font-serif font-bold text-accent">{rate}</p>
                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded border border-border bg-secondary/40 p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-foreground">Partner-country path (as proclaimed)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Products of Japan, the Republic of Korea, Taiwan, Switzerland, Liechtenstein, or an EU member — duty often described as <strong className="text-foreground">no higher than 15%</strong> including Column 1; <strong className="text-foreground">United Kingdom — no higher than 10%</strong> — <strong className="text-foreground">only if</strong> importers certify that <strong className="text-foreground">substantially all critical components and technology</strong> originate in the US or a listed partner (as proclaimed). A “partner country” finished-good label is not the same as origin paper through the bill of materials.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-foreground">What counsel typically tests (commercial / contractual)</h3>
                  <ol className="grid md:grid-cols-3 gap-4 list-none p-0">
                    {[
                      ["BOM / content-origin", "Does the bill of materials support “substantially all critical,” or only marketing on the finished good?"],
                      ["APAC supply-chain paper", "Can suppliers document origin through sub-tiers?"],
                      ["Who owns the docs", "In the contract, who owns HTS classification support, origin certs, and the CBP file if treatment is challenged?"],
                    ].map(([title, body], index) => (
                      <li key={title} className="rounded border border-border bg-card p-5 shadow-minimal">
                        <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                        <h4 className="mt-2 text-base font-serif font-bold text-foreground">{title}</h4>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{body}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <a href="#ascending-asia-playbook">
                      Register for guide <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Schedule consultation
                    </a>
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground leading-relaxed space-y-2 border-t border-border pt-5">
                  <p>
                    Beyond Horizons (Bethel Chambers LLC) is an EnterpriseSG <a href={BIZADAPT_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-foreground">BizAdapt pre-approved vendor</a> for Legal & Contractual Matters.
                  </p>
                  <p className="italic">
                    General information only — not legal advice and not tariff advice. Not a prediction of CBP treatment. Confirm the Federal Register text. Grant eligibility is EnterpriseSG’s determination.
                  </p>
                </div>
              </div>

              <aside className="lg:sticky lg:top-28 rounded border border-border bg-card p-6 shadow-minimal space-y-7">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold">Register</p>
                    <h3 className="mt-2 text-xl font-serif font-bold text-foreground">Get the Ascending Asia playbook</h3>
                  </div>
                  <form onSubmit={handleGuideRegistration} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="fullName">Full name</Label>
                      <Input id="fullName" name="fullName" required autoComplete="name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="officialEmail">Official email</Label>
                      <Input id="officialEmail" name="officialEmail" type="email" required autoComplete="email" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="grid gap-2">
                        <Label htmlFor="companyName">Company</Label>
                        <Input id="companyName" name="companyName" autoComplete="organization" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" autoComplete="organization-title" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="regulatoryConcern">Primary Regulatory Concern</Label>
                      <select
                        id="regulatoryConcern"
                        name="regulatoryConcern"
                        defaultValue="Section 232 / UAS tariff & content-origin"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {regulatoryConcernOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="launchWindow">Launch window</Label>
                      <Input id="launchWindow" name="launchWindow" placeholder="e.g. 2026 pilot, 2027 commercial" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Context</Label>
                      <Textarea id="message" name="message" placeholder="Optional note on product type, buyer geography, or counsel already involved." />
                    </div>
                    <Button type="submit" className="w-full" disabled={formStatus === "submitting"}>
                      {formStatus === "submitting" ? "Submitting…" : "Register for guide"}
                    </Button>
                    {formStatus === "success" && (
                      <p className="text-xs text-foreground leading-relaxed">Registration received. We will follow up by email.</p>
                    )}
                    {formStatus === "error" && (
                      <p className="text-xs text-destructive leading-relaxed">{formError}</p>
                    )}
                  </form>
                </div>

                <div className="minimal-divider" />

                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-foreground">Primary sources</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Check the official text and grant page before relying on dates, coverage or eligibility.
                  </p>
                </div>
                <div className="space-y-3">
                  <a href={FEDERAL_REGISTER_URL} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded border border-border p-4 text-sm text-foreground hover:bg-secondary/60 transition-colors">
                    <ExternalLink className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span>Federal Register — Proclamation 11055 / 2026-16979</span>
                  </a>
                  <a href={BIZADAPT_URL} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded border border-border p-4 text-sm text-foreground hover:bg-secondary/60 transition-colors">
                    <ExternalLink className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span>EnterpriseSG BizAdapt</span>
                  </a>
                </div>
              </aside>
            </div>

            <div className="mt-14 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-5">Section 232 UAS FAQs</h3>
              <Accordion type="single" collapsible className="border-t border-border">
                {section232Faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`section-232-${index}`}>
                    <AccordionTrigger className="text-left text-base font-serif text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        <section id="ascending-asia-playbook" aria-label="Ascending Asia playbook">
        <TranslationProvider>
          <EbookViewer />
        </TranslationProvider>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AscendingAsiaPage;
