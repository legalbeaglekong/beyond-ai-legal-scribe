import { motion } from "framer-motion";
import { Globe, Mail, Phone, ExternalLink } from "lucide-react";
import beyondHorizonsLogo from "@/assets/beyond-horizons-logo.png";

const BackCover = () => {
  return (
    <div data-pdf-page className="ebook-page back-cover bg-cream flex flex-col justify-between min-h-[210mm]">
      {/* Logo at Top */}
      <div className="flex justify-center pt-8">
        <img 
          src={beyondHorizonsLogo} 
          alt="Beyond Horizons" 
          className="w-32 md:w-40 h-auto"
        />
      </div>

      {/* Firm Profile */}
      <motion.div 
        className="bg-white p-8 border-t-4 border-berry shadow-sm m-6 mb-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-lg mb-4 text-foreground">About the Practice</h3>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          <strong>Beyond Horizons</strong> is a bespoke legal team within Bethel Chambers LLC, 
          crafted for visionaries shaping the future of transportation.
        </p>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Founded by <strong>Hui Ling Teo</strong>, we specialize in high-stakes cross-border 
          transactions under dual English and Singapore law.
        </p>
        
        <h4 className="font-bold text-sm mt-6 mb-2 text-foreground">Capabilities</h4>
        <ul className="text-sm text-gray-700 space-y-1 pl-4">
          <li className="list-disc"><strong>Aviation Innovation:</strong> Financing for eVTOL fleets.</li>
          <li className="list-disc"><strong>Cross-Border Strategy:</strong> Common vs Civil Law in APAC.</li>
          <li className="list-disc"><strong>Space:</strong> Frequency sharing arrangements in satellite finance.</li>
        </ul>

        <div className="flex items-center gap-2 mt-6 text-sm text-berry">
          <ExternalLink className="w-4 h-4" />
          <span className="font-medium">insights.beyondhorizons.sg</span>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="bg-foreground text-white p-8 mt-auto">
        <h4 className="text-sage font-bold mb-3">Contact Us</h4>
        <p className="text-sm mb-1 text-gray-300">Beyond Horizons by Bethel Chambers LLC</p>
        <p className="text-sm mb-4 text-gray-300">39B Neil Road, Third Floor Singapore 088823</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-sage" />
            <span>HL@beyondhorizons.sg</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-sage" />
            <span>+65 9726 5330</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-sage" />
            <span>www.beyondhorizons.sg</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-[0.6rem] text-gray-500">
          <p>© 2026 Beyond Horizons by Bethel Chambers LLC. Owned by the Authors.</p>
          <p className="mt-1">
            <strong>Important Notice:</strong> This booklet is not for sale and may not be reproduced 
            for commercial purposes. It is copyrighted and owned by the authors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackCover;
