import { Link } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck2, Layers, ArrowRight, ExternalLink, Lock } from "lucide-react";

const demos = [
  {
    icon: FileCheck2,
    title: "CP Dashboard",
    tag: "Conditions Precedent Tracker",
    description:
      "A live demonstration of how we track conditions precedent on a cross-border transaction — checklist status, document log, reviewer sign-off, and one-click Excel and Word exports. Illustrative data only; no client information.",
    note: "Sign-in required — private demo",
    href: "/cp-tracker",
    external: false,
  },
  {
    icon: Layers,
    title: "Tiered DR",
    tag: "Dispute Resolution Clauses",
    description:
      "An interactive walkthrough of tiered dispute resolution clauses — negotiation, mediation, and arbitration escalations — and how drafting choices affect enforceability across jurisdictions.",
    note: "Hosted on its own site",
    href: "https://tiereddr.beyondhorizons.sg",
    external: true,
  },
];

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="teal-line mx-auto mb-8" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">
            Beyond Horizons
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
            Interactive Demos
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Working demonstrations of the tools and trackers we build for transactional
            and disputes work. All demos use illustrative data only.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto container-padding grid grid-cols-1 md:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <Card key={demo.title} className="border border-border bg-card shadow-md card-lift flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-5">
                  <demo.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{demo.tag}</p>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">{demo.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {demo.description}
                </p>
                <div className="flex items-center justify-between gap-4">
                  {demo.external ? (
                    <Button asChild variant="outline">
                      <a href={demo.href} target="_blank" rel="noopener noreferrer">
                        Open demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline">
                      <Link to={demo.href}>
                        Open demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    {!demo.external && <Lock className="h-3 w-3" />}
                    {demo.note}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="max-w-2xl mx-auto container-padding mt-12 text-center text-xs text-muted-foreground leading-relaxed">
          These demonstrations are provided for general information only and do not
          constitute legal advice. Demo content is illustrative and does not reflect
          any client matter.
        </p>
      </section>

      <Footer />
    </div>
  );
}
