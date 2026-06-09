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
