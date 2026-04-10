import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Insights = () => {
  const navigate = useNavigate();
  
  const latestPosts = [
    {
      title: "Supply Chain Resilience, Advance Air Mobility and the Singapore Lighthouse with Emerson Xu",
      excerpt: "In-depth discussion on supply chain innovation, advanced air mobility developments, and Singapore's role as a technological lighthouse.",
      date: "December 15, 2024",
      readTime: "45 min listen",
      category: "Podcast",
      url: "#",
      isVideo: true,
      embedUrl: "https://open.spotify.com/embed/episode/7kQWg81TEuuZHV5OmDk172/video?utm_source=generator"
    },
    {
      title: "AI Clauses and IP Protection: What You Don't Know Can Hurt You with Junus Eu",
      excerpt: "Essential insights into AI-related contractual clauses and intellectual property protection strategies.",
      date: "December 10, 2024",
      readTime: "40 min listen",
      category: "Podcast",
      url: "#",
      isVideo: true,
      embedUrl: "https://open.spotify.com/embed/episode/7C5YHD3BrMXEe9fOT0bv1V?utm_source=generator"
    },
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
      excerpt: "From the Clarion-Clipperton Zone to the Cook Islands, the seabed is the new frontier of critical minerals.",
      date: "May 27, 2024",
      readTime: "6 min read",
      category: "Maritime Law",
      url: "https://beyondhorizons.substack.com/p/trumps-deep-sea-power-play-executive"
    },
    {
      title: "VietJet Faces Scrutiny from Singapore's Advertising Authority",
      excerpt: "A Spotlight on Greenwashing with Regulatory Penalties in Asia's Aviation Industry.",
      date: "January 13, 2024",
      readTime: "7 min read",
      category: "Aviation Law",
      url: "https://beyondhorizons.substack.com/p/vietjet-faces-scrutiny-from-singapores"
    },
    {
      title: "Real World Asset Tokenization of Aircraft Assets?",
      excerpt: "RWA Tokenisation and decentralised finance solutions to render aircraft ABS obsolete?",
      date: "August 22, 2024",
      readTime: "9 min read",
      category: "FinTech Law",
      url: "https://beyondhorizons.substack.com/p/who-sto-my-aircraft-abs-securitised"
    },
  ];

  return (
    <section id="insights" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="teal-line mx-auto mb-6" />
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">Industry Insights</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Latest Perspectives
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Stay informed with our latest insights on strategic legal frameworks, regulatory compliance, 
            and innovative business solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="default" onClick={() => navigate("/market-insights")}>
              Read Market Insights <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="default" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <a href="https://beyondhorizons.substack.com/" target="_blank" rel="noopener noreferrer">
                Visit Substack <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <Card key={index} className="border-border/30 bg-card card-lift group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-accent uppercase tracking-wider">{post.category}</span>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-base font-serif font-bold text-foreground leading-snug mb-3 group-hover:text-accent transition-smooth">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                {post.isVideo && post.embedUrl && (
                  <iframe
                    style={{ borderRadius: '8px' }}
                    src={post.embedUrl}
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                )}
                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  {!post.isVideo && (
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent inline-flex items-center hover:underline">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-border/30 rounded p-10 text-center">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Stay informed with our specialized newsletters covering legal developments and regulatory trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" size="default" asChild>
              <a href="https://beyondhorizons.substack.com/s/beyond-legal" target="_blank" rel="noopener noreferrer">
                Subscribe for Legal Updates <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="default" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <a href="https://beyondhorizons.substack.com/" target="_blank" rel="noopener noreferrer">
                Business & Tech Updates <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
