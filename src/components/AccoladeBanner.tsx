import { Award, ExternalLink } from "lucide-react";

interface AccoladeBannerProps {
  variant?: "featured" | "inline" | "compact";
  className?: string;
}

const accolades = [
  {
    title: "ALB — Law Firm to Watch 2026",
    org: "Asia Legal Business",
    url: "https://www.legalbusinessonline.com/",
    featured: true,
  },
  {
    title: "Chambers Global 2025",
    org: "Chambers & Partners",
    url: "https://chambers.com/lawyer/hui-ling-teo-global-2:25705527",
  },
  {
    title: "Legal 500 Asia Pacific",
    org: "The Legal 500",
    url: "https://www.legal500.com/",
  },
];

const AccoladeBanner = ({ variant = "inline", className = "" }: AccoladeBannerProps) => {
  if (variant === "featured") {
    return (
      <div className={`${className}`}>
        <div className="border-2 border-accent/40 bg-accent/5 rounded-lg p-5 mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="h-5 w-5 text-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-sans font-medium">Latest Recognition</span>
          </div>
          <p className="text-lg font-serif font-bold text-foreground mb-1">
            Asia Legal Business — Law Firm to Watch 2026
          </p>
          <p className="text-xs text-muted-foreground">
            Recognised by ALB (Thomson Reuters) for excellence in specialist legal advisory
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {accolades.filter(a => !a.featured).map((a, i) => (
            <a
              key={i}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-border/40 bg-card px-4 py-2 rounded-full text-xs text-muted-foreground hover:text-accent hover:border-accent/30 transition-smooth"
            >
              <Award className="h-3 w-3" />
              {a.title}
              <ExternalLink className="h-2.5 w-2.5 opacity-50" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
        {accolades.map((a, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${
              a.featured
                ? "border-accent/40 bg-accent/5 text-accent font-medium"
                : "border-border/30 text-muted-foreground"
            }`}
          >
            <Award className="h-3 w-3" />
            {a.title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {accolades.map((a, i) => (
        <a
          key={i}
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 border px-4 py-2 rounded-full text-xs transition-smooth ${
            a.featured
              ? "border-accent/40 bg-accent/5 text-accent font-medium hover:bg-accent/10"
              : "border-border/40 bg-card text-muted-foreground hover:text-accent hover:border-accent/30"
          }`}
        >
          <Award className="h-3 w-3" />
          {a.title}
          <ExternalLink className="h-2.5 w-2.5 opacity-50" />
        </a>
      ))}
    </div>
  );
};

export default AccoladeBanner;
