import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Terms of Use | Beyond Horizons</title>
        <meta
          name="description"
          content="Terms of use for the Beyond Horizons website, operated by Bethel Chambers LLC, Singapore."
        />
        <link rel="canonical" href="https://beyondhorizons.sg/terms" />
      </Helmet>
      <Header />
      <main className="max-w-3xl mx-auto container-padding py-24 prose prose-stone">
        <h1 className="text-4xl font-serif font-bold mb-8">Terms of Use</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: June 2026
        </p>

        <section className="space-y-6 text-foreground/90 leading-relaxed">
          <p>
            This website is operated by <strong>Bethel Chambers LLC</strong>{" "}
            (UEN: 202007868D), a law practice registered in Singapore, trading
            as <strong>Beyond Horizons</strong>. By accessing or using this
            website you agree to these Terms of Use.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8">
            1. No legal advice
          </h2>
          <p>
            Content on this website is provided for general information only
            and does not constitute legal advice. No solicitor–client
            relationship is created by your use of this site or by sending us
            an enquiry. You should obtain specific advice from a qualified
            lawyer before acting on any information here.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8">
            2. Intellectual property
          </h2>
          <p>
            All content, branding, text, images and design on this website are
            owned by or licensed to Bethel Chambers LLC. You may not copy,
            reproduce, republish or distribute any part of the site without
            our prior written consent, except for personal, non-commercial
            reference.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8">
            3. Third-party links
          </h2>
          <p>
            This site may contain links to third-party websites. We are not
            responsible for the content, accuracy or availability of those
            sites.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8">
            4. Confidentiality of enquiries
          </h2>
          <p>
            Please do not send confidential or sensitive information through
            web forms or unencrypted email until a formal engagement is in
            place.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8">
            5. Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, Bethel Chambers LLC will
            not be liable for any loss arising from your use of, or reliance
            on, this website.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8">
            6. Governing law
          </h2>
          <p>
            These Terms are governed by the laws of Singapore. The Singapore
            courts shall have exclusive jurisdiction over any dispute arising
            out of these Terms or your use of this site.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8">
            7. Contact
          </h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a
              href="mailto:HL@beyondhorizons.sg"
              className="text-accent underline"
            >
              HL@beyondhorizons.sg
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
