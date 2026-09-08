import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, pageTypeFor, trackEvent, trackPageView } from "@/lib/analytics";

const CONSULT_PATTERNS = ["wa.me/", "mailto:hl@beyondhorizons.sg", "#contact"];
const OUTBOUND_HOST = "workplacefairness.beyondhorizons.sg";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`, location.pathname);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const lower = href.toLowerCase();
      const pagePath = window.location.pathname;

      if (lower.includes(OUTBOUND_HOST)) {
        trackEvent("outbound_click", { page_path: pagePath, link_url: href });
        return;
      }

      if (CONSULT_PATTERNS.some((pattern) => lower.includes(pattern))) {
        const label =
          (anchor.getAttribute("aria-label") || anchor.textContent || "").trim().slice(0, 100) ||
          "consult";
        trackEvent("consult_click", {
          page_path: pagePath,
          cta_label: label,
          page_type: pageTypeFor(pagePath),
        });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default AnalyticsTracker;
