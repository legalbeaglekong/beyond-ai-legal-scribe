import techxLogo from "@/assets/clients/techx-ventures-full.png";
import enertransLogo from "@/assets/clients/enertrans-global.png";
import blockAeroLogo from "@/assets/clients/block-aero.png";
import nexAvianAsset from "@/assets/clients/nex-avian.png.asset.json";

const clients = [
  { name: "TechX Ventures", logo: techxLogo, href: "https://www.techxventures.sg" },
  { name: "Enertrans Global", logo: enertransLogo, href: "#" },
  { name: "Nex Avian", logo: nexAvianAsset.url, href: "#" },
  { name: "Block.Aero", logo: blockAeroLogo, href: "#" },
];

const ClientRibbon = () => {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...clients, ...clients];

  return (
    <section className="bg-background border-y border-border/40 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto container-padding">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 font-sans">
          In Trusted Partnership With
        </p>
      </div>
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-16 md:gap-24 pr-16 md:pr-24">
          {loop.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.href}
              target={client.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center transition-smooth"
              aria-label={client.name}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className={`w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity ${
                  client.name === "Block.Aero"
                    ? "h-8 md:h-10"
                    : "h-14 md:h-16"
                }`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientRibbon;
