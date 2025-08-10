import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Hui Ling is a great aviation lawyer with an excellent commercial mindset. She understands the business needs and provides practical, innovative solutions.",
      author: "Senior Director",
      company: "Major Asian Airline",
      category: "Aviation Finance",
    },
    {
      quote: "A fantastic lawyer and strategist who is creative at finding solutions for complex cross-border transactions. Her dual qualification brings invaluable perspective.",
      author: "CEO",
      company: "Transportation Technology Startup",
      category: "Innovation Strategy",
    },
    {
      quote: "Hui Ling's expertise in ESG and sustainable finance has been instrumental in structuring our green hydrogen projects. Truly forward-thinking legal counsel.",
      author: "Chief Financial Officer",
      company: "Clean Energy Corporation",
      category: "Sustainable Finance",
    },
    {
      quote: "Her business perspective combined with deep legal expertise makes her an exceptional partner for transformational deals in the space industry.",
      author: "Founder",
      company: "Commercial Space Venture",
      category: "Space Commerce",
    },
  ];

  const recognition = [
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
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Client Excellence
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Our clients choose us because we deliver exceptional results, innovative solutions, 
            and strategic guidance that transforms their businesses.
          </p>
        </div>

        {/* Industry Recognition */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {recognition.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-light mb-2">{item.description}</p>
              <span className="text-foreground text-sm font-medium">{item.years}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border shadow-minimal hover:shadow-hover transition-smooth">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-muted-foreground/30 mb-6" />
                
                <blockquote className="text-lg text-foreground leading-relaxed mb-8 font-light">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm font-light">{testimonial.company}</div>
                  </div>
                  <span className="text-muted-foreground text-xs font-light uppercase tracking-wide">
                    {testimonial.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Attributes */}
        <div className="bg-secondary rounded p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Why Clients Choose Beyond Horizons
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground rounded-full mx-auto mb-4"></div>
              <h4 className="font-medium text-foreground mb-2">Strategic Thinking</h4>
              <p className="text-muted-foreground text-sm font-light">Business perspective beyond legal</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground rounded-full mx-auto mb-4"></div>
              <h4 className="font-medium text-foreground mb-2">Creative Solutions</h4>
              <p className="text-muted-foreground text-sm font-light">Innovative approaches to complex challenges</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground rounded-full mx-auto mb-4"></div>
              <h4 className="font-medium text-foreground mb-2">Global Expertise</h4>
              <p className="text-muted-foreground text-sm font-light">Cross-border transaction mastery</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-foreground rounded-full mx-auto mb-4"></div>
              <h4 className="font-medium text-foreground mb-2">Commercial Mindset</h4>
              <p className="text-muted-foreground text-sm font-light">Excellent understanding of business needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;