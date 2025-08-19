import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";

const Testimonials = () => {
  const chambersTestimonials = [
    {
      quote: "She is very passionate and dedicated, so prompt feedback and comprehensive comments can be expected.",
      source: "Chambers Global 2024 - Aviation: Finance",
      location: "Singapore",
    },
    {
      quote: "Hui Ling's level of service is second to none. She regularly thinks about her clients and connects like-minded clients. Hui Ling is also able to deliver advice quickly that is concise, clear, easy to understand and practical, which enables us to structure our sometimes complex transactions more effectively.",
      source: "Chambers Global 2024 - Aviation: Finance", 
      location: "Singapore",
    },
    {
      quote: "Teo Hui Ling is a fantastic lawyer and strategist with significant industry expertise.",
      source: "Chambers Asia-Pacific 2025 - Aviation: Finance",
      location: "Asia-Pacific Region",
    },
    {
      quote: "She's very experienced in this sector and offers very high-quality advice.",
      source: "Chambers Asia-Pacific 2025 - Aviation: Finance",
      location: "Asia-Pacific Region", 
    },
    {
      quote: "She is a great aviation lawyer and can always find the key issues and present solutions.",
      source: "Chambers Global 2024 - Aviation: Finance",
      location: "Singapore",
    },
  ];

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
      title: "Chambers Global 2024",
      description: "Ranked in Aviation: Finance",
      years: "Global",
    },
    {
      title: "Chambers Asia-Pacific 2025", 
      description: "Ranked in Aviation: Finance",
      years: "Asia-Pacific Region",
    },
    {
      title: "Legal 500 Asia Pacific",
      description: "Next Generation Partner",
      years: "2023",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Awards & Recognition
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Chambers Ranked Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Recognized by Chambers and Partners for outstanding expertise in Aviation Finance, 
            with consistent rankings across global and Asia-Pacific markets.
          </p>
        </div>

        {/* Chambers Rankings */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-8">
            <span className="text-primary font-medium">Chambers and Partners Approved</span>
            <a 
              href="https://chambers.com/lawyer/hui-ling-teo-global-2:25705527"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Chambers Testimonials */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            What Clients Tell Chambers
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {chambersTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-border shadow-minimal hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary/30 mb-6" />
                  
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-light">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.source}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chambers Rankings */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {recognition.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-light mb-2">{item.description}</p>
              <span className="text-primary text-sm font-medium">{item.years}</span>
            </div>
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