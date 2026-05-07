import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import techxLogo from "@/assets/clients/techx-ventures.png";

const clients = [
  {
    name: "TechX Ventures",
    description:
      "A subsidiary of HTX (Home Team Science and Technology Agency), TechX Ventures drives commercialisation of frontier technologies in service of Singapore's homeland security mission.",
    logo: techxLogo,
    href: "https://www.techxventures.sg",
  },
];

const OurClientsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Clients | Beyond Horizons</title>
        <meta
          name="description"
          content="A select group of visionary organisations partnering with Beyond Horizons by Bethel Chambers LLC."
        />
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">
              In Trusted Partnership
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Our Clients
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are privileged to advise a select circle of visionary
              organisations shaping the next chapter of industry, innovation and
              public mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border rounded-sm p-8 shadow-minimal hover:shadow-hover transition-smooth"
              >
                <div className="h-32 flex items-center justify-center mb-6">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-24 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-smooth">
                  {client.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </a>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-16 max-w-2xl mx-auto">
            Client logos shown with permission. Engagements are subject to
            confidentiality where applicable.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurClientsPage;
