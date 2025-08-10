import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileSignature, Wallet, Bot } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      title: "Compliance first",
      text:
        "We start by completing required KYC and AML checks to keep everything compliant. Then, we send you an engagement letter to review and sign.",
      Icon: ShieldCheck,
    },
    {
      title: "Kickoff & billing",
      text:
        "Once that’s done and any retainer paid, we get to work. You’ll receive invoices monthly or by project milestones, whichever we agreed on, and you’ll always confirm them before payment.",
      Icon: FileSignature,
    },
    {
      title: "Simple automation (optional)",
      text:
        "If you prefer, we can automate invoicing to make things even easier for you.",
      Icon: Wallet,
    },
    {
      title: "AI-powered oversight",
      text:
        "We also use AI tools to track time and keep an eye on your contracts, so nothing slips through the cracks.",
      Icon: Bot,
    },
  ];

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How We Work With You",
    description:
      "Our simple, compliant onboarding and delivery process with optional automation and AI-enhanced oversight.",
    step: [
      {
        "@type": "HowToStep",
        name: "KYC & AML + Engagement Letter",
        text:
          "We start by completing required KYC and AML checks to keep everything compliant. Then, we send you an engagement letter to review and sign.",
      },
      {
        "@type": "HowToStep",
        name: "Retainer & Invoicing",
        text:
          "Once that’s done and any retainer paid, we get to work. You’ll receive invoices monthly or by project milestones (as agreed), always confirmed before payment.",
      },
      {
        "@type": "HowToStep",
        name: "Automated Invoicing (Optional)",
        text:
          "If you prefer, we can automate invoicing to make things even easier for you.",
      },
      {
        "@type": "HowToStep",
        name: "AI Tools for Time & Contracts",
        text:
          "We use AI tools to track time and monitor your contracts so nothing slips through the cracks.",
      },
    ],
  } as const;

  return (
    <section id="how-we-work" aria-labelledby="how-we-work-title" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="how-we-work-title" className="text-3xl md:text-4xl font-semibold tracking-tight">
            How We Work With You
          </h2>
          <p className="mt-3 text-muted-foreground">
            A transparent, compliant process designed for clarity, speed, and confidence.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text, Icon }) => (
            <article key={title} className="h-full">
              <Card className="h-full shadow-minimal">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      </div>
    </section>
  );
};

export default HowWeWork;
