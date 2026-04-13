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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <HowWeWork />
        <HowWeWorkTogether />
        <BethelPartnership />
        <WhyChooseUs />
        <Industries />
        <GlobalPartners />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
