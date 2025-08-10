import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

const Insights = () => {
  const latestPosts = [
    {
      title: "Your AI Just Threatened You. Now What?",
      excerpt: "When AI Refuses to Die: Legal Reflections on Blackmail, Shutdown Resistance & the Future of AI Governance",
      date: "May 29, 2024",
      readTime: "8 min read",
      category: "AI Law",
      url: "https://beyondhorizons.substack.com/p/your-ai-just-threatened-you-now-what"
    },
    {
      title: "Trump's Deep-Sea Power Play: Executive Order Sparks Global Race for Ocean Minerals",
      excerpt: "From the Clarion-Clipperton Zone to the Cook Islands, the seabed is the new frontier of critical minerals, climate politics, and maritime law.",
      date: "May 27, 2024", 
      readTime: "6 min read",
      category: "Maritime Law",
      url: "https://beyondhorizons.substack.com/p/trumps-deep-sea-power-play-executive"
    },
    {
      title: "VietJet Faces Scrutiny from Singapore's Advertising Authority",
      excerpt: "A Spotlight on Greenwashing with Regulatory Penalties in Asia's Aviation Industry - In a landmark ruling, VietJet, Vietnam's prominent low-cost airline, encountered regulatory penalties from Singapore's Advertising Standards Authority.",
      date: "January 13, 2024",
      readTime: "7 min read", 
      category: "Aviation Law",
      url: "https://beyondhorizons.substack.com/p/vietjet-faces-scrutiny-from-singapores"
    },
    {
      title: "Real World Asset Tokenization of Aircraft Assets? Who STO my (aircraft) ABS?",
      excerpt: "RWA Tokenisation Securitised Token Offerings and decentralised finance solutions to render aircraft ABS (Asset Backed Securitisations) obsolete?",
      date: "August 22, 2024",
      readTime: "9 min read",
      category: "FinTech Law",
      url: "https://beyondhorizons.substack.com/p/who-sto-my-aircraft-abs-securitised"
    },
  ];

  return (
    <section id="insights" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Industry Insights
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Latest Perspectives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Stay informed with our latest insights on transportation law, space innovation, 
            and the evolving regulatory landscape shaping tomorrow's industries.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://beyondhorizons.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              Visit Our Substack Blog
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Latest Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {latestPosts.map((post, index) => (
            <Card key={index} className="border-border shadow-minimal hover:shadow-hover transition-smooth group">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-accent font-medium">{post.category}</span>
                    <div className="flex items-center text-muted-foreground font-light">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-smooth">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-muted-foreground text-sm font-light">
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-foreground" asChild>
                      <a 
                        href={post.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-secondary rounded p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
            Subscribe to our insights newsletter for the latest developments in transportation law, 
            space innovation, and regulatory trends affecting your industry.
          </p>
          <Button variant="default" size="lg" asChild>
            <a 
              href="https://beyondhorizons.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Subscribe to Newsletter
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;