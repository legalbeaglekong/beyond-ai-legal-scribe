import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Hui Ling is a great aviation lawyer with an excellent commercial mindset. She understands the business needs and provides practical, innovative solutions.",
      author: "Senior Director",
      company: "Major Asian Airline",
      rating: 5,
      category: "Aviation Finance",
    },
    {
      quote: "A fantastic lawyer and strategist who is creative at finding solutions for complex cross-border transactions. Her dual qualification brings invaluable perspective.",
      author: "CEO",
      company: "Transportation Technology Startup",
      rating: 5,
      category: "Innovation Strategy",
    },
    {
      quote: "Hui Ling's expertise in ESG and sustainable finance has been instrumental in structuring our green hydrogen projects. Truly forward-thinking legal counsel.",
      author: "Chief Financial Officer",
      company: "Clean Energy Corporation",
      rating: 5,
      category: "Sustainable Finance",
    },
    {
      quote: "Her business perspective combined with deep legal expertise makes her an exceptional partner for transformational deals in the space industry.",
      author: "Founder",
      company: "Commercial Space Venture",
      rating: 5,
      category: "Space Commerce",
    },
  ];

  const industryRecognition = [
    {
      title: "Chambers Global 2025",
      description: "Band 3 Asset Finance - Global Market Leader",
      years: "6 Years Ranked",
    },
    {
      title: "Legal 500 Asia Pacific",
      description: "Next Generation Partner",
      years: "2023",
    },
    {
      title: "Industry Awards",
      description: "Top 10 Most Influential Lawyers",
      years: "Early Career",
    },
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Client Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients choose us because we deliver exceptional results, innovative solutions, 
            and strategic guidance that transforms their businesses.
          </p>
        </div>

        {/* Industry Recognition */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {industryRecognition.map((recognition, index) => (
            <Card key={index} className="gradient-card border-0 shadow-elegant text-center">
              <CardContent className="p-8">
                <div className="bg-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{recognition.title}</h3>
                <p className="text-muted-foreground mb-2">{recognition.description}</p>
                <Badge variant="outline" className="text-accent border-accent">
                  {recognition.years}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card border-0 shadow-elegant hover:shadow-hover transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-accent/30 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                  </div>
                  <Badge variant="secondary" className="text-accent">
                    {testimonial.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Attributes Highlight */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Clients Choose Beyond Horizons
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Strategic Thinking</h4>
              <p className="text-muted-foreground text-sm">Business perspective beyond legal</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">💡</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Creative Solutions</h4>
              <p className="text-muted-foreground text-sm">Innovative approaches to complex challenges</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">🌐</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Global Expertise</h4>
              <p className="text-muted-foreground text-sm">Cross-border transaction mastery</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">⚡</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Commercial Mindset</h4>
              <p className="text-muted-foreground text-sm">Excellent understanding of business needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;