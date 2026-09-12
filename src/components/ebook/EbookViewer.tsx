import { useEffect, useRef, useState } from "react";
import { Download, Loader2, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverPage from "./CoverPage";
import SectionTitlePage from "./SectionTitlePage";
import ContentPage from "./ContentPage";
import AdvisoryBox from "./AdvisoryBox";
import EbookTable from "./EbookTable";
import BackCover from "./BackCover";
import TranslationDisclaimer from "./TranslationDisclaimer";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "@/contexts/TranslationContext";
import lexLexhyArt from "@/assets/lex-lexhy-art.jpg";
import lexLexhyLogo from "@/assets/lex-lexhy-logo.png";

const EbookViewer = () => {
  const ebookRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { targetLanguage, translateText } = useTranslation();
  const [isBulkTranslating, setIsBulkTranslating] = useState(false);
  const [bulkProgress, setBulkProgress] = useState<{ done: number; total: number }>({ done: 0, total: 0 });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setShowScrollTop(e.currentTarget.scrollTop > 500);
  };

  const scrollToTop = () => {
    document.getElementById("ebook-container")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [exportProgress, setExportProgress] = useState<string>("");

  const exportToPDF = async () => {
    if (!ebookRef.current) return;
    setIsExporting(true);
    setExportProgress("Preparing...");
    
    try {
      // Query all pages with the data-pdf-page attribute
      const pageElements = Array.from(
        ebookRef.current.querySelectorAll('[data-pdf-page]')
      ) as HTMLElement[];

      if (pageElements.length === 0) {
        console.error("No pages found with [data-pdf-page] attribute");
        return;
      }

      // Import and call the paginated export utility
      const { generatePaginatedPDF } = await import('@/lib/pdfExport');
      
      await generatePaginatedPDF(
        pageElements,
        'Ascending-Asia-AAM-Legal-Frameworks-2026.pdf',
        (current, total) => {
          setExportProgress(`Page ${current} of ${total}`);
        }
      );
    } catch (error) {
      console.error("PDF export failed:", error);
    } finally {
      setIsExporting(false);
      setExportProgress("");
    }
  };

  const jurisdictionData = [
    { jurisdiction: "🇸🇬 SG", ownership: "100%", tax: "17%", development: "Critical Firms Act Step-In rights active." },
    { jurisdiction: "🇮🇳 IN", ownership: "100%*", tax: "0%*", development: "GIFT City Holiday deadline Mar 2026." },
    { jurisdiction: "🇵🇭 PH", ownership: "100%", tax: "25%", development: "Risk: Cabotage reciprocity issues." },
    { jurisdiction: "🇻🇳 VN", ownership: "34%", tax: "20%", development: "Hard cap remains. Military control." },
    { jurisdiction: "🇹🇭 TH", ownership: "49%", tax: "20%", development: "Nominee crackdown active." },
    { jurisdiction: "🇲🇾 MY", ownership: "Flexible", tax: "24%", development: "AAM ConOps Q1 2026 released." },
    { jurisdiction: "🇮🇩 ID", ownership: "49%", tax: "22%", development: "Single Majority Rule applies." },
  ];

  // Translate visible ebook text when a target language is selected.
  // We mutate textContent for static long-form content to avoid hand-wrapping every paragraph.
  useEffect(() => {
    const container = ebookRef.current;
    if (!container) return;

    const TRANSLATABLE_SELECTOR = [
      "h1",
      "h2",
      "h3",
      "p",
      "li",
      "th",
      "td",
      // common inline wrappers used in this ebook
      "span",
    ].join(",");

    const elements = Array.from(container.querySelectorAll<HTMLElement>(TRANSLATABLE_SELECTOR)).filter(
      (el) => {
        // Skip elements explicitly marked as no-translate
        if (el.closest("[data-no-translate='true']")) return false;

        // Skip empty/whitespace
        const text = (el.textContent || "").trim();
        if (!text) return false;

        // Skip pure numbers/symbols (page numbers etc.)
        if (/^[\d\s.,;:()\-–—/%+]+$/.test(text)) return false;

        // Don't translate script/style
        const tag = el.tagName.toLowerCase();
        if (tag === "script" || tag === "style") return false;

        return true;
      }
    );

    let cancelled = false;

    // Reset progress each time we re-run.
    setBulkProgress({ done: 0, total: elements.length });

    const restoreEnglish = () => {
      for (const el of elements) {
        const original = el.dataset.originalText;
        if (typeof original === "string") {
          el.textContent = original;
        }
      }
    };

    const run = async () => {
      // Always snapshot original text once.
      for (const el of elements) {
        if (el.dataset.originalText == null) {
          el.dataset.originalText = el.textContent || "";
        }
      }

      if (!targetLanguage) {
        setIsBulkTranslating(false);
        setBulkProgress({ done: 0, total: elements.length });
        restoreEnglish();
        return;
      }

      setIsBulkTranslating(true);

      // Simple concurrency limiting to avoid rate limits.
      const CONCURRENCY = 3;
      let i = 0;
      let done = 0;

      const worker = async () => {
        while (!cancelled && i < elements.length) {
          const idx = i++;
          const el = elements[idx];
          const original = (el.dataset.originalText ?? el.textContent ?? "").trim();
          if (!original) continue;

          // Key is stable across runs for caching
          const key = `ebook:${idx}`;
          const translated = await translateText(key, original);
          if (cancelled) return;
          el.textContent = translated;

          done += 1;
          setBulkProgress((prev) => ({ ...prev, done }));

          // micro-delay reduces burstiness
          await new Promise((r) => setTimeout(r, 40));
        }
      };

      await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
      if (!cancelled) setIsBulkTranslating(false);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [targetLanguage, translateText]);

  return (
    <div className="min-h-screen bg-muted">
      {/* Sticky Header */}
      <div className="sticky top-[72px] md:top-[88px] z-40 bg-foreground text-white py-3 px-4 md:px-6 flex items-center justify-between shadow-lg no-print">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-sage" />
          <span className="font-display text-sm md:text-base italic">Ascending Asia</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button onClick={exportToPDF} disabled={isExporting} className="bg-sage text-foreground hover:bg-sage/90 font-bold text-xs md:text-sm">
            {isExporting ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{exportProgress || "Generating..."}</>
            ) : (
              <><Download className="w-4 h-4 mr-2" />Download PDF</>
            )}
          </Button>
        </div>
      </div>

      {/* Translation Disclaimer */}
      {targetLanguage && (
        <div className="max-w-[148mm] mx-auto px-4 pt-4">
          <TranslationDisclaimer />

          {isBulkTranslating && (
            <div className="mt-3 rounded-md border bg-card text-card-foreground px-3 py-2 text-xs">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="font-medium">Translating…</span>
                <span className="text-muted-foreground">
                  {bulkProgress.total ? `${bulkProgress.done}/${bulkProgress.total}` : ""}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Ebook Container */}
      <div id="ebook-container" className="max-h-[calc(100vh-56px)] overflow-y-auto scroll-smooth" onScroll={handleScroll}>
        <div ref={ebookRef} className="max-w-[148mm] mx-auto bg-white shadow-2xl my-4 md:my-8">
          
          {/* COVER PAGE */}
          <CoverPage />

          {/* PREFACE - Page 2 */}
          <ContentPage pageNumber={2}>
            <h1 className="ebook-h1">Preface</h1>
            <p className="ebook-body">
              This advisory booklet is the result of extensive legal research and cross-border analysis 
              conducted by the team at <strong>Beyond Horizons by Bethel Chambers LLC</strong>.
            </p>
            <p className="ebook-body">
              The Advanced Air Mobility (AAM) sector is moving from concept to commercial reality. 
              As of 2026, the regulatory sandboxes are solidifying into hard law. The era of "move fast 
              and break things" has ended; the era of compliance and national security integration has begun.
            </p>
            <p className="ebook-body">
              We provide this guide not just as a legal overview, but as a strategic roadmap for investors, 
              operators, and OEMs looking to navigate the complex airspace of the Asia-Pacific region.
            </p>
            <AdvisoryBox variant="feature">
              <p className="text-xs text-muted-foreground">
                <strong>Disclaimer:</strong> This booklet is not for sale and may not be reproduced for 
                commercial purposes. It is copyrighted and owned by the authors. The contents herein do 
                not constitute legal advice. Specific counsel should be sought for individual commercial structures.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                © 2026 Beyond Horizons by Bethel Chambers LLC. All Rights Reserved.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* EXECUTIVE SUMMARY - Page 3 */}
          <ContentPage pageNumber={3}>
            <h1 className="ebook-h1">Executive Summary</h1>
            <p className="text-xs text-muted-foreground mb-4">
              <strong>Date:</strong> 24 January 2026 &nbsp;|&nbsp; <strong>To:</strong> Board of Directors & General Counsel
            </p>
            <p className="ebook-body">
              As of January 2026, the Asia-Pacific (APAC) region presents a fragmented regulatory mosaic 
              for Advanced Air Mobility. While Singapore offers the most sophisticated "regulatory sandbox" 
              for headquarters and IP domiciliation, the operational reality is increasingly governed by 
              national security legislation.
            </p>
            <AdvisoryBox variant="alert">
              <p>
                The enactment of Singapore's Transport Sector (Critical Firms) Act in April 2025, 
                Malaysia's impending AAM ConOps (Q1 2026), and Thailand's aggressive 2026 crackdown 
                on nominee shareholders require a recalibration of market entry strategies.
              </p>
            </AdvisoryBox>
            <AdvisoryBox title="The 2026 Pivot">
              <p>
                Investors must now balance <strong>Commercial Speed</strong> with <strong>Sovereign Security</strong>. 
                The integration of EVTOLs into national airspace is no longer just a transport issue; it is 
                a matter of national defense, data sovereignty, and critical infrastructure protection.
              </p>
            </AdvisoryBox>
            <p className="ebook-body">
              This booklet outlines the mandatory legal structures, tax incentives, and operational thresholds 
              required for market entry, leveraging insights from both legal statutes and technical security parameters.
            </p>
          </ContentPage>

          {/* PART I TITLE */}
          <SectionTitlePage sectionNumber="Part I" title="The Singapore Hub" />

          {/* 1. MARKET ENTRY & STRUCTURE - Page 5 */}
          <ContentPage pageNumber={5}>
            <h1 className="ebook-h1">1. Market Entry & Structure</h1>
            <p className="ebook-body">
              Singapore remains the premier jurisdiction for AAM headquarters due to its "open sky, open capital" 
              policy. However, the corporate structure must be robust enough to handle regional liabilities.
            </p>

            <h2 className="ebook-h2">Corporate Structures</h2>

            <h3 className="ebook-h3">The Private Limited Company (Pte Ltd)</h3>
            <p className="ebook-body">
              The standard vehicle for operational subsidiaries. It offers limited liability and is a separate 
              legal entity. <strong>Foreign Equity:</strong> 100% foreign ownership is permitted. No local partner 
              is required for incorporation.
            </p>

            <h3 className="ebook-h3">The Branch Office</h3>
            <p className="ebook-body">
              Not recommended for high-liability AAM operations. A branch is an extension of the foreign parent, 
              meaning the parent is fully liable for debts and acts of the Singapore branch. Given aviation 
              liability risks, a subsidiary (Pte Ltd) is preferred to ring-fence liability.
            </p>

            <h2 className="ebook-h2">Director Requirements</h2>
            <p className="ebook-body">
              Every Singapore company must have at least one director who is "ordinarily resident" in Singapore. 
              This is strictly defined as:
            </p>
            <ul className="ebook-list">
              <li>Singapore Citizen</li>
              <li>Permanent Resident (PR)</li>
              <li>Employment Pass (EP) holder with a local residential address</li>
            </ul>

            <AdvisoryBox>
              <p>
                <strong>Strategic Note:</strong> Investors often appoint a "Nominee Director" during the setup 
                phase (Weeks 1-8) while the foreign CEO's Employment Pass is being processed by the Ministry 
                of Manpower (MOM).
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* 2. CRITICAL FIRMS REGIME - Page 6 */}
          <ContentPage pageNumber={6}>
            <h1 className="ebook-h1">2. The Critical Firms Regime</h1>
            <p className="ebook-body">
              <strong>Status:</strong> Enacted and Active (April 2025).
            </p>
            <p className="ebook-body">
              This Act fundamentally alters the exit and control landscape for high-growth AAM companies. 
              If your AAM service scales to become essential to Singapore's logistics or passenger transport 
              network, the Civil Aviation Authority of Singapore (CAAS) may gazette your company as a 
              <strong> Designated Operating Entity (DOE)</strong>.
            </p>

            <h2 className="ebook-h2">The "Golden Share" Controls</h2>
            <p className="ebook-body">
              Once designated, your company loses total autonomy over its corporate governance. You are legally 
              required to obtain Ministerial approval for:
            </p>

            <h3 className="ebook-h3">Ownership Changes</h3>
            <p className="ebook-body">
              Any investor (foreign or local) crossing shareholding thresholds of <strong>5%, 12%, 25%, or 50%</strong>.
            </p>

            <AdvisoryBox variant="alert" title="Impact on Fundraising">
              <p>
                A Series B fundraising round that dilutes existing shareholders or brings in a new lead investor 
                crossing these lines triggers a mandatory regulatory review period. Deal timelines must account for this.
              </p>
            </AdvisoryBox>

            <h3 className="ebook-h3">Key Appointments</h3>
            <p className="ebook-body">
              The appointment (or removal) of the CEO and the Chairman of the Board. CAAS holds veto power if 
              the candidate is deemed a national security risk.
            </p>
          </ContentPage>

          {/* STEP-IN RIGHTS - Page 7 */}
          <ContentPage pageNumber={7}>
            <h2 className="ebook-h2">Step-In Rights</h2>
            <p className="ebook-body">
              In the event of insolvency, operational failure, or a threat to national security, the Minister 
              for Transport has the statutory power to issue a <strong>"Step-In Order."</strong>
            </p>
            <p className="ebook-body">
              This effectively allows the government to seize management control to ensure service continuity. 
              This is a standard clause for critical infrastructure (like water or power) but is new for the AAM sector.
            </p>

            <AdvisoryBox variant="alert" title="Why this matters for Investors">
              <p>
                Exit strategies (M&A) involving "critical" AAM firms will be subject to regulatory scrutiny 
                similar to national security reviews. A sale to a foreign entity deemed "unfriendly" could be blocked.
              </p>
            </AdvisoryBox>

            <h2 className="ebook-h2">Operational Continuity</h2>
            <p className="ebook-body">
              DOEs are also required to submit business continuity plans and cannot dispose of key assets 
              (e.g., the fleet of aircraft) without prior approval. This restricts the ability to leverage 
              assets for financing without regulatory consent.
            </p>
          </ContentPage>

          {/* 3. TAX STRATEGY - Page 8 */}
          <ContentPage pageNumber={8}>
            <h1 className="ebook-h1">3. Tax Strategy & Incentives</h1>
            <p className="ebook-body">
              Singapore's headline corporate tax rate is <strong>17%</strong>, but effective rates for AAM 
              startups are significantly lower due to specific incentives targeted at innovation.
            </p>

            <h2 className="ebook-h2">Enterprise Innovation Scheme (EIS)</h2>
            <p className="ebook-body">
              Valid through YA 2028, this is the primary incentive for AAM R&D (e.g., battery thermal management, 
              flight software localization).
            </p>
            <ul className="ebook-list">
              <li>
                <strong>400% Tax Deduction:</strong> On the first S$400,000 of qualifying R&D expenditure 
                incurred in Singapore.
              </li>
              <li>
                <strong>Cash Conversion:</strong> Loss-making startups (common in AAM) can surrender S$100,000 
                of qualifying expenditure for a non-taxable cash payout of S$20,000 to aid liquidity.
              </li>
            </ul>

            <h2 className="ebook-h2">Development & Expansion Incentive (DEI)</h2>
            <p className="ebook-body">
              If the AAM company establishes a regional HQ, it may apply for a concessionary tax rate of 
              <strong> 5% or 10%</strong> on incremental income from qualifying activities, such as:
            </p>
            <ul className="ebook-list">
              <li>Regional flight control management.</li>
              <li>Technical support and engineering services.</li>
              <li>Training and simulation services.</li>
            </ul>
          </ContentPage>

          {/* GST - Page 9 */}
          <ContentPage pageNumber={9}>
            <h2 className="ebook-h2">Indirect Tax (GST)</h2>
            <p className="ebook-body">
              The Goods and Services Tax (GST) rate is <strong>9%</strong> (as of 2026). For AAM operators, 
              the treatment of flights is distinct:
            </p>

            <h3 className="ebook-h3">International Flights (Zero-Rated)</h3>
            <p className="ebook-body">
              Flights that leave Singapore (e.g., Singapore to Johor Bahru, Malaysia) are considered international 
              transport and are zero-rated (0% GST). This allows the operator to claim back input tax on costs 
              (fuel, maintenance) without charging GST to the passenger.
            </p>

            <h3 className="ebook-h3">Domestic Flights (Standard-Rated)</h3>
            <p className="ebook-body">
              Flights entirely within Singapore (e.g., Marina Bay to Changi Airport) are standard-rated (9% GST). 
              Operators must price this into their business models for intra-city air taxi services.
            </p>

            <h2 className="ebook-h2">Global Intangible Low-Taxed Income (GILTI)</h2>
            <AdvisoryBox>
              <p>
                <strong>Note for US Parents:</strong> If the AAM parent is US-based, Singapore's low tax might 
                trigger US GILTI rules. We advise on transfer pricing setups for IP licensing to mitigate double taxation.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* 4. FINANCING & CAPITAL - Page 10 */}
          <ContentPage pageNumber={10}>
            <h1 className="ebook-h1">4. Financing & Capital</h1>

            <h2 className="ebook-h2">The VCC Structure</h2>
            <p className="ebook-body">
              For AAM companies setting up a corporate venture arm to invest in the supply chain (e.g., battery 
              suppliers), the <strong>Variable Capital Company (VCC)</strong> is recommended.
            </p>
            <ul className="ebook-list">
              <li><strong>Segregation:</strong> Allows separation of assets and liabilities into sub-funds (ring-fencing different tech bets).</li>
              <li><strong>Privacy:</strong> The shareholder register is not public, unlike standard Pte Ltd companies.</li>
              <li><strong>Flexibility:</strong> Dividends can be paid out of capital, not just profits.</li>
            </ul>

            <h2 className="ebook-h2">Fund Raising Licensing</h2>

            <h3 className="ebook-h3">Equity Fundraising</h3>
            <p className="ebook-body">
              Raising funds via standard equity (shares) does not require a license if relying on prospectus 
              exemptions (e.g., Small Offers, Private Placement to Accredited Investors).
            </p>

            <h3 className="ebook-h3">Asset Tokenization</h3>
            <p className="ebook-body">
              If the AAM company raises funds by selling "tokens" representing fractional ownership of an eVTOL 
              fleet, this constitutes Dealing in Capital Markets Products. A <strong>Capital Markets Services (CMS) 
              License</strong> from MAS is required.
            </p>
          </ContentPage>

          {/* PART II TITLE */}
          <SectionTitlePage sectionNumber="Part II" title="Operational Compliance" />

          {/* 5. DATA SOVEREIGNTY - Page 12 */}
          <ContentPage pageNumber={12}>
            <h1 className="ebook-h1">5. Data Sovereignty</h1>
            <p className="ebook-body">
              AAM operations generate massive amounts of sensitive data: passenger biometrics, flight paths 
              over critical infrastructure, and geospatial mapping.
            </p>

            <h2 className="ebook-h2">PDPA Transfer Limitation</h2>
            <p className="ebook-body">
              Under Singapore's Personal Data Protection Act (PDPA), personal data cannot be transferred outside 
              Singapore unless the recipient jurisdiction offers "comparable protection."
            </p>
            <p className="ebook-body">
              <strong>The Cloud Challenge:</strong> Most UTM (Unmanned Traffic Management) systems run on cloud 
              servers (AWS/Azure). If these servers are located in jurisdictions with weaker data laws, you are non-compliant.
            </p>

            <h2 className="ebook-h2">Compliance Strategy</h2>
            <ul className="ebook-list">
              <li>
                <strong>Data Localization:</strong> Ensure your cloud provider uses "Singapore Region" instances 
                for storing biometric data.
              </li>
              <li>
                <strong>Standard Contractual Clauses (SCCs):</strong> If data must flow cross-border (e.g., to a 
                regional HQ), implement SCCs in your inter-company agreements to legally bind the recipient to PDPA standards.
              </li>
            </ul>
          </ContentPage>

          {/* 6. CYBERSECURITY & CII - Page 13 */}
          <ContentPage pageNumber={13}>
            <h1 className="ebook-h1">6. Cybersecurity & CII</h1>
            <p className="ebook-body">
              The digitization of flight controls makes AAM fleets vulnerable to cyber-attacks.
            </p>

            <h2 className="ebook-h2">Critical Information Infrastructure (CII)</h2>
            <p className="ebook-body">
              Under the Cybersecurity Act, if your flight network is designated as CII (likely for mass passenger 
              transport), you assume onerous legal obligations.
            </p>
            <ul className="ebook-list">
              <li>
                <strong>Incident Reporting:</strong> You must report cyber incidents (e.g., GPS spoofing, jamming, 
                malware) to the Cyber Security Agency (CSA) within <strong>2 hours</strong> for critical incidents.
              </li>
              <li>
                <strong>Audits:</strong> Mandatory annual cybersecurity audits and risk assessments.
              </li>
              <li>
                <strong>Design Compliance:</strong> Systems must be "secure by design," isolating flight control 
                systems from passenger entertainment systems.
              </li>
            </ul>

            <AdvisoryBox variant="alert" title="The Ransomware Risk">
              <p>
                AAM fleets are prime targets for ransomware. "Grounding" a fleet digitally until a ransom is paid 
                is a real threat. CII designation requires offline backups and rapid restoration protocols.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* 7. INSURANCE & LIABILITY - Page 14 */}
          <ContentPage pageNumber={14}>
            <h1 className="ebook-h1">7. Insurance & Liability</h1>
            <p className="ebook-body">
              AAM insurance is a developing market. Standard aviation policies often exclude "experimental" 
              or "electric propulsion" risks.
            </p>

            <h2 className="ebook-h2">Liability Limits</h2>
            <p className="ebook-body">
              Singapore generally aligns with the Montreal Convention 1999 liability limits for passenger injury 
              or death (approx. <strong>128,821 SDRs or ~S$230,000</strong> strict liability per passenger). 
              However, operators usually carry higher limits to protect reputation.
            </p>

            <h2 className="ebook-h2">A Developing Market</h2>
            <p className="ebook-body">
              The insurance landscape for drones and eVTOLs is rapidly evolving. We are seeing the emergence 
              of specialized insurance providers designing bespoke policies for electric propulsion risks, 
              distinct from traditional aviation coverage.
            </p>
            <p className="ebook-body">
              <strong>The Singapore Advantage:</strong> As the leading insurance hub in Asia, Singapore hosts 
              a high concentration of global brokerages and Lloyd's of London syndicates. This ecosystem 
              provides AAM operators with direct access to underwriters capable of pricing novel aerial risks.
            </p>
          </ContentPage>

          {/* 8. INTELLECTUAL PROPERTY - Page 15 */}
          <ContentPage pageNumber={15}>
            <h1 className="ebook-h1">8. Intellectual Property</h1>
            <p className="ebook-body">
              Protecting the IP of flight algorithms and battery management systems (BMS) is critical.
            </p>

            <h2 className="ebook-h2">The Patent Box Regime</h2>
            <p className="ebook-body">
              Singapore's IP regime is robust. The Intellectual Property Development Incentive (IDI) offers 
              a reduced tax rate on income derived from the commercialization of IP rights arising from R&D activities.
            </p>

            <h2 className="ebook-h2">Trade Secrets vs Patents</h2>
            <p className="ebook-body">For AAM, we often advise a hybrid strategy:</p>
            <ul className="ebook-list">
              <li>
                <strong>Patents:</strong> For hardware (propeller design, tilting mechanisms) which can be 
                reverse-engineered.
              </li>
              <li>
                <strong>Trade Secrets:</strong> For software (flight control algorithms, collision avoidance AI). 
                Filing a patent reveals the code logic; keeping it a trade secret (protected by NDAs and access 
                controls) may be safer in a competitive market.
              </li>
            </ul>
          </ContentPage>

          {/* PART III TITLE */}
          <SectionTitlePage sectionNumber="Part III" title="The Security Dimension" />

          {/* UNDERSTANDING THE RISK - Page 17 */}
          <ContentPage pageNumber={17}>
            <h1 className="ebook-h1">Understanding the Risk</h1>

            <AdvisoryBox variant="alert">
              <p><strong>Why are regulations like the "Critical Firms Act" emerging?</strong> The answer lies in the dual-use nature of EVTOL technology.</p>
            </AdvisoryBox>

            <AdvisoryBox variant="feature">
              <h3 className="ebook-h3 mt-0">Thought Leadership</h3>
              <p className="text-xs">
                Our founder, <strong>Hui Ling Teo</strong>, recently co-authored a landmark study exploring 
                the security implications of AAM integration into urban environments.
              </p>
              <p className="text-[0.7rem] text-muted-foreground italic mt-2 border-t border-border pt-2">
                Ref: Saifudeen, O. A., Harrison, J., Teo, H. L., & Charnoff, E. (2025). The ongoing evolution 
                of EVTOLs: urban transport potential and the security dimension. Urban, Planning and Transport Research, 13(1).
              </p>
              <p className="text-xs mt-2">
                <strong>Call to Action:</strong> Please contact Hui Ling at{" "}
                <span className="text-berry border-b border-dotted border-berry">HL@beyondhorizons.sg</span>{" "}
                for a copy of the full article.
              </p>
            </AdvisoryBox>

            <p className="ebook-body">
              This study highlights that while EVTOLs offer immense potential for commercial and emergency use, 
              their unique characteristics make them attractive to Non-State Actors (NSAs) for asymmetric warfare.
            </p>
          </ContentPage>

          {/* THE STEALTH FACTOR - Page 18 */}
          <ContentPage pageNumber={18}>
            <h2 className="ebook-h2">The Stealth Factor</h2>
            <p className="ebook-body">
              Unlike traditional helicopters, EVTOLs have a significantly reduced <strong>Acoustic Signature</strong>. 
              Modern platforms produce under 65 dB during take-off—less than half the noise of light helicopters. 
              This makes them ideal for urban operations but also harder to detect.
            </p>
            <p className="ebook-body">
              Furthermore, electric propulsion reduces <strong>Thermal Signatures</strong>, complicating detection 
              by infrared sensors used in standard air defense systems.
            </p>

            <h2 className="ebook-h2">Payload & Asymmetry</h2>
            <p className="ebook-body">
              EVTOLs like the Archer Midnight can carry <strong>1,000 lbs</strong>. In a security context, this 
              payload capacity, combined with stealth, creates a "Low-Tech Smart Weapon" risk if repurposed as 
              a Vehicle-Borne Improvised Explosive Device (VBIED).
            </p>
            <p className="ebook-body">
              Historically, groups like the LTTE used light aircraft for raids. The accessibility of EVTOL 
              technology lowers the barrier to entry for such asymmetric aerial threats.
            </p>
          </ContentPage>

          {/* THE REGULATORY RESPONSE - Page 19 */}
          <ContentPage pageNumber={19}>
            <h2 className="ebook-h2">The Regulatory Response</h2>
            <p className="ebook-body">
              Governments are aware of these risks. This security dimension explains the legislative shift 
              towards National Security screening in aviation. It justifies:
            </p>
            <ul className="ebook-list">
              <li>
                <strong>Geofencing Mandates:</strong> Flight computers must have hard-coded "No-Fly Zones" 
                (government buildings, crowded events) that cannot be overridden by the pilot.
              </li>
              <li>
                <strong>Remote Disablement:</strong> Authorities require "Kill Switches" to remotely ground 
                a rogue aircraft.
              </li>
              <li>
                <strong>Step-In Rights:</strong> As seen in Singapore's Critical Firms Act, the state needs 
                the legal lever to seize control of essential transport assets instantly during a crisis.
              </li>
            </ul>

            <AdvisoryBox title="Urban Planning Impact">
              <p>
                Vertiports cannot just be placed anywhere. Security zoning will restrict flight paths to 
                "Corridors" that are easily monitored by police, away from sensitive government installations.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* INFRASTRUCTURE & BATTERY SAFETY - Page 20 */}
          <ContentPage pageNumber={20}>
            <h2 className="ebook-h2">Infrastructure & Battery Safety</h2>
            <p className="ebook-body">
              The study also highlights the <strong>Thermal Runaway</strong> risk of high-density Lithium-Ion batteries.
            </p>
            <p className="ebook-body">
              Current chemistries (NMC) are vulnerable to overheating during the high-power draw of take-off 
              and landing. In a dense urban environment, a battery fire at a rooftop vertiport is a catastrophic risk.
            </p>
            <AdvisoryBox variant="alert">
              <p>
                <strong>Implication:</strong> Regulations will demand advanced Battery Thermal Management Systems 
                (BTMS) and specialized fire suppression infrastructure at every vertiport, significantly increasing 
                capital expenditure (CapEx) for infrastructure developers.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* PART IV TITLE */}
          <SectionTitlePage sectionNumber="Part IV" title="Regional Markets" />

          {/* CABOTAGE - Page 22 */}
          <ContentPage pageNumber={22}>
            <AdvisoryBox variant="cabotage" title="Concept Focus: What are Cabotage Rules?">
              <p className="text-gray-300 text-sm mb-3">
                <strong className="text-white">Definition:</strong> Cabotage is the right to transport goods 
                or passengers between two points within the same country (e.g., Mumbai to Delhi) for remuneration.
              </p>
              <p className="text-gray-300 text-sm mb-3">
                <strong className="text-white">The Trap for AAM:</strong> Most countries restrict this right 
                strictly to locally registered aircraft.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Example:</strong> A US-registered eVTOL can fly into India 
                (International leg), but it cannot pick up a passenger in Mumbai and drop them in Pune (Domestic leg). 
                To operate an "Air Taxi" service, you must almost always register the aircraft locally or lease 
                it to a local Air Operator Certificate (AOC) holder.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* INDIA - Page 23 */}
          <ContentPage pageNumber={23}>
            <h1 className="ebook-h1">🇮🇳 India: The Scale Market</h1>
            <p className="ebook-body">
              India represents the largest volume opportunity in APAC. The government is aggressively promoting aviation.
            </p>

            <h2 className="ebook-h2">GIFT City (IFSC)</h2>
            <p className="ebook-body">
              India's tax-neutral enclave in Gujarat offers massive incentives for aircraft leasing:
            </p>
            <ul className="ebook-list">
              <li><strong>100% Tax Holiday:</strong> For 10 consecutive years out of a 15-year block.</li>
              <li>
                <strong>Capital Gains:</strong> Zero Capital Gains Tax on aircraft transfer if the unit 
                commences operations by March 31, 2026.
              </li>
            </ul>

            <h2 className="ebook-h2">Ownership Rules</h2>
            <p className="ebook-body">
              <strong>Non-Scheduled (Air Taxi):</strong> 100% Foreign Direct Investment (FDI) is permitted 
              via the automatic route.
            </p>
            <p className="ebook-body">
              <strong>Scheduled Airlines:</strong> Foreign airlines investing in scheduled carriers are capped at 49%.
            </p>
          </ContentPage>

          {/* MALAYSIA - Page 24 */}
          <ContentPage pageNumber={24}>
            <h1 className="ebook-h1">🇲🇾 Malaysia: The Green Lane</h1>
            <p className="ebook-body">
              Malaysia positions itself as the "Test Bed" for the region, with lower land costs and a proactive regulator.
            </p>

            <h2 className="ebook-h2">AAM ConOps (Q1 2026)</h2>
            <p className="ebook-body">
              The Civil Aviation Authority of Malaysia (CAAM) has released its Concept of Operations, creating 
              a clear pathway for commercial trials.
            </p>

            <h2 className="ebook-h2">The RTS Corridor</h2>
            <p className="ebook-body">
              The primary opportunity is the cross-border shuttle between Singapore and Johor Bahru. However, 
              this requires <strong>Dual-Certification</strong>.
            </p>

            <AdvisoryBox>
              <p>
                <strong>Strategy:</strong> Consider establishing a Malaysian subsidiary (Sdn Bhd) to hold the 
                local AOC and validate the Singapore-registered aircraft for Malaysian operations.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* THAILAND & VIETNAM - Page 25 */}
          <ContentPage pageNumber={25}>
            <h1 className="ebook-h1">🇹🇭 Thailand</h1>
            <h2 className="ebook-h2">The Nominee Crackdown</h2>
            <p className="ebook-body">
              Effective Jan 1, 2026, the DBD enforces strict proof of financial means for Thai shareholders. 
              The traditional "49% Foreign / 51% Thai Nominee" structure is now high-risk. 
              <strong> Use legitimate Joint Ventures.</strong>
            </p>

            <h1 className="ebook-h1 mt-8">🇻🇳 Vietnam</h1>
            <h2 className="ebook-h2">The Hard Cap</h2>
            <p className="ebook-body">
              Decree 89/2019 strictly caps foreign ownership in air transport at <strong>34%</strong>.
            </p>
            <p className="ebook-body">
              <strong>Military Control:</strong> Unlike Singapore, Vietnam's airspace is managed by the Ministry 
              of National Defense. Every drone flight plan typically requires individual permits, creating 
              operational friction.
            </p>
          </ContentPage>

          {/* PHILIPPINES & INDONESIA - Page 26 */}
          <ContentPage pageNumber={26}>
            <h1 className="ebook-h1">🇵🇭 Philippines</h1>
            <h2 className="ebook-h2">The Public Service Act</h2>
            <p className="ebook-body">
              RA 11659 allows <strong>100% foreign ownership</strong> of airlines.
            </p>

            <AdvisoryBox variant="alert" title="The Cabotage Trap">
              <p>
                Ownership does not guarantee traffic rights. The Civil Aviation Board (CAB) may deny domestic 
                routes based on reciprocity clauses with your home country.
              </p>
            </AdvisoryBox>

            <h1 className="ebook-h1 mt-8">🇮🇩 Indonesia</h1>
            <h2 className="ebook-h2">Single Majority Rule</h2>
            <p className="ebook-body">
              Foreign ownership is capped at <strong>49%</strong>. Crucially, a foreign investor cannot hold 
              a larger stake than the largest single Indonesian shareholder, forcing a complex cap table structure.
            </p>
          </ContentPage>

          {/* COMPARATIVE FRAMEWORK - Page 27 */}
          <ContentPage pageNumber={27}>
            <h1 className="ebook-h1">Comparative Framework</h1>
            <EbookTable
              columns={[
                { header: "Jurisdiction", accessor: "jurisdiction" },
                { header: "Ownership", accessor: "ownership" },
                { header: "Tax", accessor: "tax" },
                { header: "2026 Key Development", accessor: "development" },
              ]}
              data={jurisdictionData}
              caption="*IN: 100% for Non-Scheduled; 0% tax in GIFT City."
            />
          </ContentPage>

          {/* STRATEGIC OUTLOOK - Page 28 */}
          <ContentPage pageNumber={28}>
            <h1 className="ebook-h1">Strategic Outlook</h1>
            <p className="ebook-body">
              The AAM sector is at an inflection point. The legal frameworks are catching up to the technology.
            </p>

            <h2 className="ebook-h2">Future Trends</h2>
            <ul className="ebook-list">
              <li>
                <strong>Hydrogen Propulsion:</strong> As battery density hits limits, hydrogen-electric aircraft 
                (like the Sirius Jet) will require new regulations for handling cryogenic fuels at vertiports.
              </li>
              <li>
                <strong>Autonomy:</strong> The shift from "Pilot-on-Board" to "Remotely Piloted" will trigger 
                a massive overhaul of personnel licensing laws. Singapore is likely to lead this regulatory sandbox.
              </li>
            </ul>

            <AdvisoryBox title="Final Recommendation">
              <p>
                Establish the HoldCo in Singapore for IP protection and tax efficiency. Use local Joint Ventures 
                for operations in Vietnam and Indonesia. Monitor the "Critical Entity" designation carefully.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* LEX.LEXHY INTRODUCTION - Page 29 */}
          <ContentPage pageNumber={29}>
            <div className="flex flex-col items-center mb-6">
              <img 
                src={lexLexhyLogo} 
                alt="LEX.LEXHY Logo" 
                className="w-20 h-20 mb-4"
              />
              <h1 className="font-sans text-2xl md:text-3xl text-foreground font-black tracking-tight mb-2">
                Introducing <span className="tracking-wide">LEX.LEXHY</span>
              </h1>
              <p className="text-berry font-display text-lg italic">
                "Defining the Art of the Possible"
              </p>
            </div>

            <div className="mb-6">
              <img 
                src={lexLexhyArt} 
                alt="The Art of the Possible" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>

            <p className="ebook-body">
              <strong className="font-sans font-bold">LEX.LEXHY</strong> is our AI-powered legal assistant with a human lawyer in the loop, 
              designed to deliver bespoke AI legal solutions for the modern enterprise.
            </p>

            <h2 className="ebook-h2">Capabilities</h2>
            <ul className="ebook-list">
              <li><strong>Interactive Dashboards:</strong> Real-time visibility into your legal portfolio and regulatory exposure.</li>
              <li><strong>Risk Tracking:</strong> Automated monitoring of compliance deadlines, ownership thresholds, and regulatory changes.</li>
              <li><strong>Compliance Roadmaps:</strong> AI-generated action plans tailored to your market entry strategy.</li>
            </ul>

            <AdvisoryBox variant="feature">
              <p className="text-sm">
                <strong>Experience the base version:</strong><br />
                <a 
                  href="https://lex.lexhygroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-berry underline hover:text-berry/80"
                >
                  lex.lexhygroup.com
                </a>
              </p>
              <p className="text-sm mt-3">
                <strong>Contact us</strong> to learn how LEX.LEXHY can be customized 
                for your organization's specific legal and compliance needs.
              </p>
            </AdvisoryBox>
          </ContentPage>

          {/* BACK COVER */}
          <BackCover />
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-foreground text-white p-3 rounded-full shadow-lg hover:bg-foreground/90 transition-all no-print z-50" aria-label="Scroll to top">
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default EbookViewer;
