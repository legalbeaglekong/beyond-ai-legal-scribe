import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EbookViewer from "@/components/ebook/EbookViewer";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { SITE_URL, BRAND_FULL, WHATSAPP_URL } from "@/config/business";
import { Button } from "@/components/ui/button";
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
            <div className="max-w-xl mx-auto">

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
                  <a href={BIZADAPT_URL} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded border border-border p-4 text-sm text-foreground hover:bg-secondary/60 transition-colors">
                    <ExternalLink className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <span>EnterpriseSG BizAdapt</span>
                  </a>
                </div>
              </aside>
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
