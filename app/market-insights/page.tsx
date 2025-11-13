'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Calendar, BarChart, Globe } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function MarketInsights() {
  const marketReports = [
    {
      title: "APAC Legal Market Trends Q1 2025",
      excerpt: "Comprehensive analysis of legal service demand, regulatory changes, and market dynamics across Asia-Pacific jurisdictions.",
      date: "January 15, 2025",
      category: "Market Analysis",
      readTime: "12 min read"
    },
    {
      title: "Cross-Border M&A Activity: Global Outlook",
      excerpt: "Deal volume trends, regulatory landscape shifts, and strategic opportunities in international mergers and acquisitions.",
      date: "December 20, 2024", 
      category: "M&A Insights",
      readTime: "15 min read"
    },
    {
      title: "Tech Sector Legal Spend Analysis",
      excerpt: "Technology companies' evolving legal needs, budgeting patterns, and preferred service delivery models.",
      date: "November 28, 2024",
      category: "Industry Focus",
      readTime: "10 min read"
    },
    {
      title: "ESG Compliance Market Overview",
      excerpt: "Rising demand for ESG legal services, regulatory requirements, and market opportunities across global jurisdictions.",
      date: "November 10, 2024",
      category: "ESG & Compliance",
      readTime: "14 min read"
    },
    {
      title: "Alternative Legal Service Providers: Market Disruption",
      excerpt: "How ALSP models are reshaping legal service delivery, client expectations, and traditional law firm operations.",
      date: "October 25, 2024",
      category: "Industry Evolution",
      readTime: "11 min read"
    },
    {
      title: "Singapore as APAC Legal Hub: Strategic Advantages",
      excerpt: "Analysis of Singapore's growing role as the preferred jurisdiction for legal structuring and dispute resolution in Asia-Pacific.",
      date: "October 8, 2024",
      category: "Jurisdiction Analysis",
      readTime: "13 min read"
    }
  ]

  const marketMetrics = [
    { icon: TrendingUp, label: "Legal Market Growth", value: "+12.5%", description: "APAC legal services YoY" },
    { icon: Globe, label: "Cross-Border Deals", value: "2,340", description: "Q4 2024 transactions" },
    { icon: BarChart, label: "Tech Legal Spend", value: "$4.2B", description: "Global technology sector" }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-primary-glow/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Button 
                asChild
                variant="ghost" 
                className="mb-8 text-muted-foreground hover:text-primary"
              >
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Market Insights & Commentary
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic analysis of legal market trends, regulatory developments, and industry dynamics shaping the future of legal services
              </p>
            </div>
          </div>
        </section>

        {/* Market Metrics */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Market Overview</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {marketMetrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <Card key={index} className="text-center border-0 bg-gradient-to-br from-card to-card/80">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                        <div className="text-lg font-semibold text-foreground mb-1">{metric.label}</div>
                        <div className="text-sm text-muted-foreground">{metric.description}</div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Market Reports */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Latest Market Commentary</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {marketReports.map((report, index) => (
                  <Card 
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-primary font-medium">{report.category}</span>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {report.date}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-smooth">
                          {report.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {report.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-muted-foreground text-xs">
                            {report.readTime}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="group-hover:bg-primary/10 group-hover:text-primary transition-smooth"
                          >
                            Read Report
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

