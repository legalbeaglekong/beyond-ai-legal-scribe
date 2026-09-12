import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, GraduationCap } from "lucide-react";
import { WHATSAPP_URL, EMAIL } from "@/config/business";

const SITE = "https://beyondhorizons.sg";
const CANONICAL = `${SITE}/courses`;
const THINKIFIC = "https://hui-ling-s-site-be86.thinkific.com";

const utm = (slug: string) =>
  `?utm_source=beyondhorizons&utm_medium=courses_hub&utm_campaign=thinkific&utm_content=${slug}`;

const COLLECTION_URL = `${THINKIFIC}/collections${utm("collections")}`;

const featured = {
  title: "Negotiating Business Jet Sale & Purchase Agreements 101",
  image:
    "https://import.cdn.thinkific.com/937875/dVrSJvUqTpmcEWObZWpQ_bizjet-course-cover.png",
  url: `${THINKIFIC}/courses/business-jet-sale-purchase-agreements-101${utm(
    "business-jet-sale-purchase-agreements-101",
  )}`,
  talkTo: "/industry/aviation",
  paragraphs: [
    "A practical educational guide to negotiating pre-owned business jet sale and purchase agreements. Walk through the deal stages in plain English: the letter of intent (what is non-binding — and what is not), deposit mechanics, pre-purchase inspection and technical acceptance, as-is / where-is delivery and the English-law overlay, title and escrow closing, liens, representations and remedies, the third-party manager transition (novation vs termination), and registries, deregistration and tax-neutral delivery themes.",
    "Built for buyers, sellers, family offices, brokers and in-house counsel who want the map before the mark-up. Educational only — not legal advice.",
  ],
  outline:
    "Outline (educational): Module 1 deal & players · Module 2 diligence & condition · Module 3 SPA clauses · Module 4 manager transition & cross-border mechanics · Module 5 playbook & FAQ.",
};

type CompactCourse = {
  title: string;
  description: string;
  slug: string;
  talkTo: string;
  image?: string;
  related?: { label: string; href: string };
};

const compactCourses: CompactCourse[] = [
  {
    title: "Aviation Finance 101: An Intuitive Understanding",
    description:
      "Educational primer on how aviation finance fits together — from “houses to aircraft,” leasing vs loans, plus bonus themes on portfolio trading, warehouse and PDP financing. Educational only — not legal advice.",
    slug: "AviationFinance101",
    talkTo: "/industry/aviation",
  },
  {
    title: "Cape Town Convention & Aircraft Repossession 101",
    description:
      "Educational guide to international interests, the International Registry, priority, default remedies, IDERAs, deregistration, Alternative A insolvency themes and English-law structuring. Educational only — not legal advice.",
    slug: "cape-town-aircraft-repossession-101",
    talkTo: "/industry/aviation",
    image:
      "https://import.cdn.thinkific.com/937875/FzYXYIITy6pa66jJGUjw_cape-town-course-cover.png",
  },
  {
    title: "Cap Table Cleanup 101",
    description:
      "Educational guide to cleaning up a Singapore private company’s cap table ahead of investment: share classes, buybacks, founder reverse vesting, ESOP/ESOW, SAFEs and notes, nominees and holding structures. Educational only — not legal advice.",
    slug: "cap-table-cleanup-101",
    talkTo: "/industry/fractional-gc",
    image:
      "https://import.cdn.thinkific.com/937875/KCHbDo9tQiaA4OmmzMz9_captable-course-cover.png",
  },
  {
    title: "AI & Work Contracts 101",
    description:
      "Educational update path for Singapore employment, service, consultancy and platform-worker agreements touching AI — classification, Workplace Fairness Act themes, automated hiring, shadow-sm AI, IP and social media. Educational only — not legal advice.",
    slug: "ai-work-contracts-101",
    talkTo: "/industry/fractional-gc",
    image:
      "https://import.cdn.thinkific.com/937875/27flFgJjSJmAg3GxCy9W_ai-work-contracts-101-cover.png",
  },
  {
    title: "Robot & Embodied AI Law 101",
    description:
      "Educational primer on robot, agentic and embodied-AI law themes: liability, auditability, contracts, standards, insurance and export controls. Educational only — not legal advice.",
    slug: "robot-embodied-ai-law-101",
    talkTo: "/industry/robotics",
    image:
      "https://import.cdn.thinkific.com/937875/3wtApkS1Sob319aarmAS_robot-course-cover.png",
    related: { label: "robotlaw.beyondhorizons.sg", href: "https://robotlaw.beyondhorizons.sg" },
  },
  {
    title: "Tariff Contract Amendments 101",
    description:
      "Educational Singapore-facing guide to tariff and cross-border trade contracts — force majeure, hardship, non-performance and amendment practice, including Incoterms themes. Educational only — not legal advice.",
    slug: "tariff-contract-amendments-101",
    talkTo: "/industry/trade-tariff",
    image: "https://import.cdn.thinkific.com/937875/Uh0FjPeTR96RAFekstOs_cover-option-B.png",
  },
];

const answers = [
  {
    q: "What are Beyond Horizons courses?",
    a: "Free educational primers on topics we advise on — including business jet sale-and-purchase agreements, aviation finance, Cape Town Convention basics, AI and work contracts, cap tables, robot law and tariff contract amendments. They are general education, not advice on your transaction.",
  },
  {
    q: "Where do I enroll?",
    a: "On Thinkific (linked from each card). beyondhorizons.sg/courses is the firm overview; Thinkific hosts video and enrollment.",
  },
  {
    q: "When should I talk to counsel instead of only taking a course?",
    a: "When a letter of intent, SPA, lease, financing or employment change is live or about to be signed. Soft path: Schedule consultation, or Talk to us on the matching practice page.",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: featured.url,
      name: featured.title,
      description: featured.paragraphs[0],
    },
    ...compactCourses.map((course, i) => ({
      "@type": "ListItem",
      position: i + 2,
      url: `${THINKIFIC}/courses/${course.slug}${utm(course.slug)}`,
      name: course.title,
      description: course.description,
    })),
  ],
};

const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Legal & Business Courses | Jet SPA & Aviation Finance</title>
        <meta
          name="description"
          content="Free educational primers from Beyond Horizons (Bethel Chambers LLC): business jet SPAs, aviation finance, Cape Town, AI & work contracts, and more. Not legal advice."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Free Legal & Business Courses | Beyond Horizons" />
        <meta
          property="og:description"
          content="Free educational primers: business jet SPAs, aviation finance, Cape Town, AI & work contracts, cap tables, robot law and tariff amendments."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Learning</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Free legal &amp; business primers
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Self-paced educational courses from Beyond Horizons by Bethel Chambers LLC — built
              from Singapore-anchored, cross-border practice. Each primer is for busy executives,
              founders, lessors and counsel who want a clear framework before a live deal or board
              discussion.
            </p>
            <p className="text-sm text-foreground/80 font-medium">
              These courses are educational only. They are not legal advice and do not create a
              solicitor–client relationship. Video and enrollment stay on Thinkific; this page is the
              firm hub for discovery and next steps.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="teal-line mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Short answers</h2>
            <dl className="space-y-6">
              {answers.map((item) => (
                <div key={item.q}>
                  <dt className="font-serif text-lg text-foreground mb-2">{item.q}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-padding bg-secondary/20 border-y border-border/30">
          <div className="max-w-5xl mx-auto container-padding">
            <Card className="border-border/40 bg-card overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto md:h-full bg-muted overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                </div>
                <CardContent className="p-8">
                  <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-accent text-accent-foreground mb-4">
                    Featured · Free · Educational only
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    {featured.title}
                  </h2>
                  {featured.paragraphs.map((p) => (
                    <p key={p} className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {featured.outline}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="default" asChild>
                      <a href={featured.url} target="_blank" rel="noopener noreferrer">
                        Start course <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={featured.talkTo}>
                        Talk to us <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto container-padding">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">More primers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compactCourses.map((course) => (
                <Card
                  key={course.slug}
                  className="border-border/30 bg-card card-lift overflow-hidden flex flex-col"
                >
                  {course.image && (
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={480}
                        height={270}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-accent text-accent-foreground">
                          Free
                        </span>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-base font-serif font-bold text-foreground mb-3">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        asChild
                      >
                        <a
                          href={`${THINKIFIC}/courses/${course.slug}${utm(course.slug)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Start course: ${course.title}`}
                        >
                          Start course <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={course.talkTo} aria-label={`Talk to us about ${course.title}`}>
                          Talk to us
                        </Link>
                      </Button>
                    </div>
                    {course.related && (
                      <a
                        href={course.related.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-xs text-muted-foreground underline underline-offset-4 hover:text-accent"
                      >
                        Related: {course.related.label}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="default" className="font-semibold" asChild>
                <a href={COLLECTION_URL} target="_blank" rel="noopener noreferrer">
                  View all on Thinkific <ArrowRight className="ml-2 h-4 w-4" />
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
              Need tailored training for your team?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We design bespoke workshops and board briefings on the same topics — educational
              sessions for your leadership or deal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Arrange a workshop <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Schedule consultation
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="max-w-4xl mx-auto container-padding">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Beyond Horizons is a specialist practice group of Bethel Chambers LLC, a Singapore law
              corporation. Content on this page and the linked courses is general educational
              information only. It is not legal advice and does not create a solicitor–client
              relationship.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;
