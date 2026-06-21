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
import LatestInsightsFeed from "@/components/LatestInsightsFeed";
import Testimonials from "@/components/Testimonials";
import TeamPreview from "@/components/TeamPreview";
import ClientRibbon from "@/components/ClientRibbon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Head metadata and JSON-LD are defined once in index.html as the single source of truth. */}
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
        <LatestInsightsFeed />
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
