import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentPageProps {
  children: ReactNode;
  pageNumber: number;
}

const ContentPage = ({ children, pageNumber }: ContentPageProps) => {
  return (
    <motion.div 
      data-pdf-page
      className="ebook-page content-page p-8 md:p-12 min-h-[210mm] box-border relative bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
      <div className="absolute bottom-4 left-0 w-full text-center text-[7pt] text-gray-400 font-sans">
        Page {pageNumber}
      </div>
    </motion.div>
  );
};

export default ContentPage;
