import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import HowWeWorkTogether from "@/components/HowWeWorkTogether";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalPartners from "@/components/GlobalPartners";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <About />
        <HowWeWork />
        <HowWeWorkTogether />
        <WhyChooseUs />
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
