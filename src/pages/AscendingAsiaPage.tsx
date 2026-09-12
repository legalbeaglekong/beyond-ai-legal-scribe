import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EbookViewer from "@/components/ebook/EbookViewer";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { SITE_URL, BRAND_FULL } from "@/config/business";

const AscendingAsiaPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ascending Asia | Advanced Air Mobility Legal Guide 2026</title>
        <meta
          name="description"
          content="Ascending Asia: legal strategies for Advanced Air Mobility market entry across Asia-Pacific in 2026. Read the full advisory booklet or download it as a PDF."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/ascending-asia`} />
        <meta property="og:title" content="Ascending Asia | Advanced Air Mobility Legal Guide 2026" />
        <meta
          property="og:description"
          content="Legal strategies for Advanced Air Mobility market entry across Asia-Pacific in 2026."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Ascending Asia: Legal Strategies for Advanced Air Mobility Market Entry 2026",
            author: { "@type": "Organization", name: BRAND_FULL },
            publisher: { "@type": "Organization", name: BRAND_FULL },
            inLanguage: "en",
            url: `${SITE_URL}/ascending-asia`,
            isAccessibleForFree: true,
            about: "Advanced Air Mobility regulation in Asia-Pacific",
          })}
        </script>
      </Helmet>
      <Header />
      <main className="pt-[72px] md:pt-[88px]">
        <h1 className="sr-only">
          Ascending Asia — Legal Strategies for Advanced Air Mobility Market Entry 2026
        </h1>
        <TranslationProvider>
          <EbookViewer />
        </TranslationProvider>
      </main>
      <Footer />
    </div>
  );
};

export default AscendingAsiaPage;
