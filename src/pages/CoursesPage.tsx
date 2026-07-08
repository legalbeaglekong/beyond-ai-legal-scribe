import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, GraduationCap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "@/config/business";

const SITE = "https://beyondhorizons.sg";
const CANONICAL = `${SITE}/courses`;
const COLLECTION_URL = "https://hui-ling-s-site-be86.thinkific.com/collections";

const courses = [
  {
    title: "Cap Table Cleanup 101",
    description: "Practical guide to cleaning up a Singapore private company's cap table to position for investment: share classes, capital reductions and buybacks, founder reverse vesting, ESOP/ESOW, converting SAFEs and notes, nominees and RORC, holding-company structures and tax.",
    image: "https://import.cdn.thinkific.com/937875/KCHbDo9tQiaA4OmmzMz9_captable-course-cover.png",
    url: "https://hui-ling-s-site-be86.thinkific.com/courses/cap-table-cleanup-101",
  },
  {
    title: "Negotiating Business Jet Sale & Purchase Agreements 101",
    description: "Practical guide to negotiating pre-owned business jet sale and purchase agreements: the LOI, deposit, pre-purchase inspection, as-is delivery, title and escrow closing, the third-party manager transition, registries and tax.",
    image: "https://import.cdn.thinkific.com/937875/dVrSJvUqTpmcEWObZWpQ_bizjet-course-cover.png",
    url: "https://hui-ling-s-site-be86.thinkific.com/courses/business-jet-sale-purchase-agreements-101",
  },
  {
    title: "AI & Work Contracts 101",
    description: "Update Singapore employment, service, consultancy and platform-worker agreements for AI: worker classification, the Workplace Fairness Act, AI-agent accountability, automated hiring, shadow AI, IP and social media.",
    image: "https://import.cdn.thinkific.com/937875/27flFgJjSJmAg3GxCy9W_ai-work-contracts-101-cover.png",
    url: "https://hui-ling-s-site-be86.thinkific.com/courses/ai-work-contracts-101",
  },
  {
    title: "Cape Town Convention & Aircraft Repossession 101",
    description: "Practical guide to the Cape Town Convention and aircraft repossession: international interests, the Registry, priority, default remedies, IDERAs, deregistration, Alternative A insolvency and English-law structuring.",
    image: "https://import.cdn.thinkific.com/937875/FzYXYIITy6pa66jJGUjw_cape-town-course-cover.png",
    url: "https://hui-ling-s-site-be86.thinkific.com/courses/cape-town-aircraft-repossession-101",
  },
  {
    title: "Robot & Embodied AI Law 101",
    description: "Practical guide to robot, agentic and embodied-AI law: liability, auditability, autonomous vehicles, drones, AI Act and governance frameworks, contracts, ISO standards, insurance and export controls.",
    image: "https://import.cdn.thinkific.com/937875/3wtApkS1Sob319aarmAS_robot-course-cover.png",
    url: "https://hui-ling-s-site-be86.thinkific.com/courses/robot-embodied-ai-law-101",
  },
  {
    title: "Tariff Contract Amendments 101",
    description: "Free Singapore guide to tariff and cross-border trade contracts: force majeure, hardship, non-performance, breach. Best-practice, effective legal contract amendments and Incoterms for businesses facing tariffs.",
    image: "https://import.cdn.thinkific.com/937875/Uh0FjPeTR96RAFekstOs_cover-option-B.png",
    url: "https://hui-ling-s-site-be86.thinkific.com/courses/tariff-contract-amendments-101",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: courses.map((course, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: course.url,
    name: course.title,
    description: course.description,
  })),
};

const CoursesPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Legal & Business Courses | Beyond Horizons</title>
        <meta
          name="description"
          content="Free self-paced primers from Beyond Horizons: cap tables, business jet sale-purchase agreements, AI & work contracts, Cape Town aircraft repossession, robot law, and tariff contract amendments."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Free Legal & Business Courses | Beyond Horizons" />
        <meta
          property="og:description"
          content="Free self-paced primers from Beyond Horizons: cap tables, business jets, AI contracts, aircraft repossession, robot law and tariff amendments."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
              {t("courses.heroLabel")}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              {t("courses.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("courses.heroDesc")}
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.url}
                  className="border-border/30 bg-card card-lift overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={640}
                      height={360}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-accent text-accent-foreground">
                        {t("courses.free")}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {course.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("courses.startCourse")}: ${course.title}`}
                      >
                        {t("courses.startCourse")} <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="default"
                size="default"
                className="font-semibold"
                asChild
              >
                <a href={COLLECTION_URL} target="_blank" rel="noopener noreferrer">
                  {t("courses.allCourses")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30 border-y border-border/30">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <div className="teal-line mx-auto mb-6" />
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              {t("courses.ctaTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("courses.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {t("courses.ctaButton")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;
