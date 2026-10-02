import { Award } from "lucide-react";
import { CHAMBERS_PROFILE_URL } from "@/config/business";

interface RankingsFooterProps {
  items: string[];
  notes?: string[] | undefined;
}

/** Compact rankings footer — repeats the full verified awards set so nothing is dropped on mobile. */
const RankingsFooter = ({ items, notes }: RankingsFooterProps) => (
  <section className="py-12 bg-secondary/20 border-t border-border/30" aria-labelledby="rankings-heading">
    <div className="max-w-5xl mx-auto container-padding text-center">
      <h2 id="rankings-heading" className="text-lg font-serif font-bold text-foreground mb-6">Rankings &amp; recognition</h2>
      <ul className="flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <li key={item} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-accent/40 bg-accent/5 text-foreground">
            <Award className="h-3 w-3 text-accent shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      {notes && notes.length > 0 && (
        <div className="mt-5 space-y-1">
          {notes.map((n) => <p key={n} className="text-xs text-muted-foreground">{n}</p>)}
        </div>
      )}
      <a href={CHAMBERS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs text-accent hover:underline">
        View Hui Ling Teo on Chambers &amp; Partners
      </a>
    </div>
  </section>
);

export default RankingsFooter;
