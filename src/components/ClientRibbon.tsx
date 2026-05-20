import techxLogo from "@/assets/clients/techx-ventures-full.png";

const clients = [
  {
    name: "TechX Ventures",
    logo: techxLogo,
    href: "https://www.techxventures.sg",
  },
];

const ClientRibbon = () => {
  return (
    <section className="bg-background border-y border-border/40 py-12">
      <div className="max-w-6xl mx-auto container-padding">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 font-sans">
          In Trusted Partnership With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-smooth"
              aria-label={client.name}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-16 md:h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
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
