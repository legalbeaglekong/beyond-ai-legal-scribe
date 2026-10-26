export const LEGAL500_URL = "https://www.legal500.com/c/singapore/asset-finance/lawyers";

/** Link the accolade without changing the plain text shared with schema. */
export default function Legal500Text({ text }: { text: string }) {
  const start = text.indexOf("Legal 500");
  if (start < 0) return <>{text}</>;
  const tail = text.slice(start);
  const end = tail.includes(" ranked counsel") ? tail.indexOf(" ranked counsel") : tail.includes("(Singapore)") ? tail.indexOf("(Singapore)") + "(Singapore)".length : tail.length;
  return <>{text.slice(0, start)}<a href={LEGAL500_URL} target="_blank" rel="noopener" className="hover:underline">{tail.slice(0, end)}</a>{tail.slice(end)}</>;
}