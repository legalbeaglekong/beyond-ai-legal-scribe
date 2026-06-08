import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Megaphone, Calendar, ArrowRight } from "lucide-react";

const announcements = [
  {
    title: "Bethel Chambers LLC Expands Aviation Practice Across APAC",
    date: "March 15, 2026",
    excerpt:
      "We are pleased to announce the expansion of our aviation and aerospace practice, bringing specialist counsel to operators, lessors and regulators across the Asia-Pacific region.",
    tag: "Firm News",
  },
  {
    title: "Beyond Horizons Joins Singapore FinTech Festival 2025",
    date: "November 8, 2025",
    excerpt:
      "Our team will be attending SFF 2025 to engage with founders and institutional stakeholders at the frontier of digital assets and regulatory technology.",
    tag: "Events",
  },
  {
    title: "New Fractional General Counsel Service Now Live",
    date: "October 1, 2025",
    excerpt:
      "Beyond Horizons launches its outsourced senior-level legal support programme, designed for scaling enterprises that need counsel without the full-time overhead.",
    tag: "Service Launch",
  },
];

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
        <div className="max-w-5xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">
              Stay Informed
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Announcements
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The latest updates from our practice — firm news, service
              launches and upcoming engagements.
            </p>
          </div>

          <div className="space-y-8">
            {announcements.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row gap-6 bg-card border border-border rounded-sm p-8 shadow-minimal hover:shadow-hover transition-smooth"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Megaphone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium bg-accent/10 text-accent uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif text-foreground mb-3 group-hover:text-accent transition-smooth">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-smooth font-sans uppercase tracking-wider">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-16 max-w-2xl mx-auto">
            For media enquiries or to receive announcements directly, please
            contact us via the link below.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnnouncementsPage;
