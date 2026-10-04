import { useEffect, useRef, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WordDocumentPreview({ url, name }: { url: string; name: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const controller = new AbortController();
    const shadow = element.shadowRoot ?? element.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    shadow.replaceChildren(container);
    setStatus("loading");

    async function load() {
      try {
        const [response, { renderAsync }] = await Promise.all([
          fetch(url, { signal: controller.signal }),
          import("docx-preview"),
        ]);
        if (!response.ok) throw new Error(`Document unavailable (${response.status})`);
        const file = await response.arrayBuffer();
        if (controller.signal.aborted) return;
        await renderAsync(file, container, undefined, {
          className: "student-docx",
          ignoreWidth: true,
          ignoreHeight: true,
          renderChanges: true,
          renderComments: true,
          renderAltChunks: false,
          useBase64URL: true,
        });
        const style = document.createElement("style");
        style.textContent = ".student-docx-wrapper{padding:16px;background:transparent}.student-docx-wrapper>section.student-docx{width:100%;max-width:100%;box-sizing:border-box;margin-bottom:16px;box-shadow:none;padding:24px!important;overflow-wrap:anywhere} .student-docx table{max-width:100%} @media(max-width:480px){.student-docx-wrapper{padding:0}.student-docx-wrapper>section.student-docx{padding:16px!important}}";
        shadow.append(style);
        if (!controller.signal.aborted) setStatus("ready");
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Word preview failed", error);
          setStatus("error");
        }
      }
    }
    void load();
    return () => controller.abort();
  }, [url]);

  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted px-4 py-3">
        <span className="text-sm text-foreground">Sponsorship agreement · Word document</span>
        <Button asChild variant="outline" size="sm">
          <a href={url} download target="_blank" rel="noopener noreferrer" aria-label={`Download ${name}'s Word document`}><Download />Download Word</a>
        </Button>
      </div>
      <div className="h-[380px] max-h-[50dvh] overflow-auto bg-card" tabIndex={0} role="region" aria-label={`${name} — Word document preview`} aria-busy={status === "loading"}>
        {status === "loading" && <p role="status" className="flex items-center justify-center gap-2 p-8 text-muted-foreground"><Loader2 className="size-4 animate-spin motion-reduce:animate-none" />Loading document…</p>}
        {status === "error" && <p role="alert" className="p-8 text-muted-foreground">The preview could not load. You can still download the original Word document above.</p>}
        <div ref={host} />
      </div>
    </div>
  );
}