import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import HowWeWorkTogether from "@/components/HowWeWorkTogether";
import BethelPartnership from "@/components/BethelPartnership";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import GlobalPartners from "@/components/GlobalPartners";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import TeamPreview from "@/components/TeamPreview";
import ClientRibbon from "@/components/ClientRibbon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Beyond Horizons | Crafted for Visionaries</title>
        <meta name="description" content="Beyond Horizons by Bethel Chambers LLC — Chambers Global ranked legal counsel for visionaries in Singapore and across Asia Pacific." />
        <link rel="canonical" href="https://beyondhorizons.sg/" />
        <meta property="og:title" content="Beyond Horizons | Crafted for Visionaries" />
        <meta property="og:description" content="Chambers Global ranked legal counsel for visionaries in Singapore and across Asia Pacific." />
        <meta property="og:url" content="https://beyondhorizons.sg/" />
        <meta property="og:image" content="https://beyondhorizons.sg/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beyondhorizons.sg/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Beyond Horizons by Bethel Chambers LLC",
            url: "https://beyondhorizons.sg",
            logo: "https://beyondhorizons.sg/og-image.jpg",
            description: "Chambers Global ranked legal counsel for visionaries in Singapore and across Asia Pacific.",
            areaServed: "Asia-Pacific",
            sameAs: [
              "https://www.linkedin.com/company/beyond-horizons-by-bethel-chambers-llc"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Beyond Horizons",
            url: "https://beyondhorizons.sg",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://beyondhorizons.sg/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Beyond Horizons Legal Services",
            provider: {
              "@type": "Organization",
              name: "Bethel Chambers LLC",
              url: "https://beyondhorizons.sg"
            },
            description: "Chambers Global ranked legal counsel for visionaries in Singapore and across Asia Pacific.",
            areaServed: "Asia-Pacific",
            url: "https://beyondhorizons.sg",
            email: "HL@beyondhorizons.sg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "39B Neil Rd (Level 3)",
              addressLocality: "Singapore",
              postalCode: "088823",
              addressCountry: "SG"
            },
            openingHoursSpecification: [{
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              opens: "09:00",
              closes: "18:00"
            }]
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <ClientRibbon />
        <HowWeWork />
        <HowWeWorkTogether />
        <BethelPartnership />
        <WhyChooseUs />
        <Industries />
        <GlobalPartners />
        <Insights />
        <TeamPreview />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
