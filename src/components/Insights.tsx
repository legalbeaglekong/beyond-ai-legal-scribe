import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

const Insights = () => {
  const latestPosts = [
    {
      title: "The Legal Framework for Space Mining: Navigating Uncharted Territory",
      excerpt: "As commercial space ventures advance toward asteroid mining, understanding the complex legal landscape becomes crucial for industry pioneers.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Space Law",
    },
    {
      title: "ESG Compliance in Aviation: Beyond Carbon Offsetting",
      excerpt: "Modern aviation companies must navigate an evolving ESG landscape that extends far beyond traditional carbon offset strategies.",
      date: "December 10, 2024", 
      readTime: "6 min read",
      category: "Aviation Law",
    },
    {
      title: "Autonomous Vessels: Regulatory Challenges in Maritime Innovation",
      excerpt: "The rise of autonomous shipping presents unprecedented legal challenges that require innovative regulatory approaches.",
      date: "December 5, 2024",
      readTime: "7 min read", 
      category: "Maritime Law",
    },
    {
      title: "Green Hydrogen Projects: Structuring Deals for the Energy Transition",
      excerpt: "Legal strategies for financing and structuring green hydrogen initiatives across international jurisdictions.",
      date: "November 28, 2024",
      readTime: "9 min read",
      category: "Energy Law",
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
                    <Button variant="ghost" size="sm" className="text-accent hover:text-foreground">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
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