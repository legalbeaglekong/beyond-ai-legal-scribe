import { Button } from "@/components/ui/button";

interface ConsultCalloutProps {
  mailto: string;
  freeLine?: boolean;
}

/** Consultation callout: email line, optional first-consultation note and one primary button. */
const ConsultCallout = ({ mailto, freeLine }: ConsultCalloutProps) => (
  <div className="bg-background text-foreground border-l-2 border-primary rounded-sm p-6 text-left max-w-2xl mx-auto space-y-3 shadow-sm">
    <p className="text-muted-foreground leading-relaxed">To discuss a matter, email <a href={mailto} className="text-primary underline underline-offset-2">HL@beyondhorizons.sg</a> with the asset, your role, the jurisdiction and the timing.</p>
    {freeLine && <p className="text-muted-foreground leading-relaxed">Free first consultation, up to 30 minutes, subject to a conflict check, once per new matter.</p>}
    <Button asChild variant="default" size="lg"><a href={mailto}>Schedule a consultation</a></Button>
  </div>
);

export default ConsultCallout;
