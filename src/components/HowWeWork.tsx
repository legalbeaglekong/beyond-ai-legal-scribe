import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileSignature, Wallet, Bot } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    { title: "Compliance first", text: "We start by completing required KYC and AML checks to keep everything compliant. Then, we send you an engagement letter to review and sign.", Icon: ShieldCheck },
    { title: "Kickoff & billing", text: "Once that's done and any retainer paid, we get to work. You'll receive invoices monthly or by project milestones, whichever we agreed on.", Icon: FileSignature },
    { title: "Simple automation", text: "If you prefer, we can automate invoicing to make things even easier for you.", Icon: Wallet },
    { title: "Digital oversight", text: "We use digital tools to track time and keep an eye on your contracts, so nothing slips through the cracks.", Icon: Bot },
  ];

  return (
    <section id="how-we-work" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-12">
          <div className="teal-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            How We Work With You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A transparent, compliant process designed for clarity, speed, and confidence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text, Icon }, i) => (
            <Card key={title} className="border-border/30 bg-card card-lift">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <CardTitle className="text-sm font-serif">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
