export const RETRENCHMENT_PATH = "/singapore-retrenchment-law";
export const RETRENCHMENT_URL = "https://beyondhorizons.sg/singapore-retrenchment-law";
export const RETRENCHMENT_TITLE = "Singapore Retrenchment Law 2026: What Employers Must Do";
export const RETRENCHMENT_DESCRIPTION =
  "Singapore retrenchment rules in 2026: the legal duties, what is only tripartite norm, retrenchment benefits, and when the Workplace Fairness Act starts.";
export const RETRENCHMENT_OG_IMAGE = "https://beyondhorizons.sg/images/retrenchment/01-national-kpi-keyed.png";

export const retrenchmentFaqs = [
  {
    question: "Is a retrenchment benefit mandatory in Singapore?",
    answer:
      "Generally, no. There is no general statutory requirement. MOM's guidance says the amount depends on the employment contract or collective agreement, or on negotiation if neither provides for it. The prevailing norm is two weeks' to one month's salary per year of service, usually for employees with at least two years' service. A specific contract or collective agreement may still require payment, and MOM has said stronger obligations are being considered.",
  },
  {
    question: "When must I notify MOM of a retrenchment?",
    answer:
      "Within five working days after notifying the affected employee, if the business is registered in Singapore and has at least 10 employees.",
  },
  {
    question: "Is the Workplace Fairness Act in force?",
    answer:
      "Not yet. Parliament passed it on 8 January 2025, and on 4 November 2025 passed the Workplace Fairness (Dispute Resolution) Act 2025, which amends it to add mediation and civil claims. MOM says it is slated to take effect at the end of 2027. Until then, the tripartite guidelines apply.",
  },
  {
    question: "What is the penalty for late retrenchment notification?",
    answer:
      "MOM described administrative penalties of $1,000 for a first breach and $2,000 for later breaches (written answer to a Parliamentary question, 7 April 2026).",
  },
] as const;

export const retrenchmentArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Retrenchment law in Singapore (2026): what employers must do, and what is only good practice",
  description: RETRENCHMENT_DESCRIPTION,
  mainEntityOfPage: RETRENCHMENT_URL,
  image: [RETRENCHMENT_OG_IMAGE],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  inLanguage: "en-SG",
  author: { "@type": "Person", name: "Hui Ling Teo", url: "https://beyondhorizons.sg/team/hui-ling-teo" },
  publisher: {
    "@type": "Organization",
    name: "Beyond Horizons by Bethel Chambers LLC",
    url: "https://beyondhorizons.sg",
    email: "HL@beyondhorizons.sg",
  },
};

export const retrenchmentFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: retrenchmentFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
