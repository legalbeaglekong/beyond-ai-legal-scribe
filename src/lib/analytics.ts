// Google Analytics 4 (gtag.js) wiring.
// Measurement ID comes from the linked Google Analytics connector.

const MEASUREMENT_ID = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] as
  | string
  | undefined;

const CANONICAL_ORIGIN = "https://beyondhorizons.sg";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const UTM_STORAGE_KEY = "bh_utm";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// gtag.js only processes the special "arguments" object — push it, not a plain array.
function gtag(...args: unknown[]) {
  void args;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

let initialized = false;

function captureUtms(): Record<string, string> {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl: Record<string, string> = {};
    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) fromUrl[key] = value;
    });
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function getUtms(): Record<string, string> {
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function canonicalUrl(pathWithSearch: string): string {
  return `${CANONICAL_ORIGIN}${pathWithSearch}`;
}

export function pageTypeFor(pathname: string): "fractional_gc" | "aviation" | "other" {
  if (pathname.startsWith("/industry/fractional-gc")) return "fractional_gc";
  if (pathname.startsWith("/industry/aviation") || pathname.startsWith("/singapore-aviation-law"))
    return "aviation";
  return "other";
}

export function initAnalytics() {
  if (initialized || !MEASUREMENT_ID) return;
  initialized = true;

  captureUtms();

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  // Manual page views so SPA navigations are tracked with canonical URLs.
  gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(pathWithSearch: string, pathname: string) {
  if (!MEASUREMENT_ID) return;
  // page_location carries the path plus only the five utm_ parameters; all other query params are dropped.
  const queryIndex = pathWithSearch.indexOf("?");
  const params = new URLSearchParams(queryIndex >= 0 ? pathWithSearch.slice(queryIndex + 1) : "");
  const kept = new URLSearchParams();
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) kept.set(key, value);
  });
  const query = kept.toString();
  gtag("event", "page_view", {
    page_location: `${CANONICAL_ORIGIN}${pathname}${query ? `?${query}` : ""}`,
    page_path: pathname,
    page_title: document.title,
    ...getUtms(),
  });
}

export function trackEvent(name: string, params: Record<string, string | number>) {
  if (!MEASUREMENT_ID) return;
  gtag("event", name, { ...params, ...getUtms() });
}
