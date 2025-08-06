import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, Users, Award, Microscope, Globe } from "lucide-react";

export default function News() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "publisher": {
      "@type": "Organization",
      "name": "SND Regenics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sndregenics.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sndregenics.com/news"
    }
  };

  return (
    <>
      <SEOHead
        title="News & Events - SND Regenics | Latest Biomedical Research Updates"
        description="Stay updated with the latest breakthroughs, research announcements, conference presentations, and industry events from SND Regenics' biomedical research team."
        keywords="biomedical news, research announcements, scientific conferences, bioprinting breakthroughs, regenerative medicine updates, tissue engineering events"
        ogTitle="Latest News & Events | SND Regenics Research Updates"
        ogDescription="Discover the latest developments in biomedical research, upcoming conferences, and breakthrough achievements from our team of scientists and engineers."
        canonicalUrl="https://sndregenics.com/news"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-4">
                Latest Updates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                News & <span className="text-primary">Events</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay informed about our latest research breakthroughs, upcoming conferences, 
                partnership announcements, and industry developments in biomedical science.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured News</h2>
              <p className="text-muted-foreground">Our most significant recent developments and achievements.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/20 h-48 rounded-t-lg flex items-center justify-center">
                    <Microscope className="h-16 w-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className="mr-2">Research Breakthrough</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>March 15, 2024</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Revolutionary Hybrid Bioprinting Platform Achieves 95% Cell Viability
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our latest research demonstrates unprecedented success in maintaining cell viability 
                      during the hybrid bioprinting process, opening new possibilities for complex tissue engineering.
                    </p>
                    <Button variant="outline" size="sm">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-accent/10 to-primary/20 h-48 rounded-t-lg flex items-center justify-center">
                    <Award className="h-16 w-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge variant="secondary" className="mr-2">Award</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>February 28, 2024</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      SND Regenics Receives Innovation Excellence Award
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Recognition for outstanding contributions to regenerative medicine and 
                      breakthrough developments in neural tissue engineering applications.
                    </p>
                    <Button variant="outline" size="sm">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Recent Updates</h2>
              <p className="text-muted-foreground">Stay current with our ongoing developments and announcements.</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  date: "March 10, 2024",
                  category: "Research Publication",
                  title: "Neural Organoid Development Using Hybrid Scaffolding Systems",
                  description: "Our latest paper published in Nature Biomedical Engineering demonstrates advanced neural organoid culture techniques.",
                  readTime: "5 min read"
                },
                {
                  date: "March 5, 2024", 
                  category: "Partnership",
                  title: "Strategic Collaboration with Leading Medical University",
                  description: "New research partnership to advance clinical applications of bioprinted neural tissues.",
                  readTime: "3 min read"
                },
                {
                  date: "February 22, 2024",
                  category: "Technology Update",
                  title: "Enhanced Electrospinning Capabilities Announced",
                  description: "Upgraded platform now supports multi-scale fiber architectures with improved precision control.",
                  readTime: "4 min read"
                },
                {
                  date: "February 15, 2024",
                  category: "Conference Presentation",
                  title: "Presenting at International Tissue Engineering Symposium",
                  description: "Team to present latest findings on machine learning applications in bioprinting optimization.",
                  readTime: "2 min read"
                }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Badge variant="outline" className="mr-3">{item.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">{item.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground">Join us at conferences, workshops, and industry gatherings.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  World Bioprinting Congress 2024
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Keynote presentation on hybrid fabrication technologies
                </p>
                <div className="text-sm text-muted-foreground mb-4">
                  <div>May 15-17, 2024</div>
                  <div>Boston, MA</div>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </Card>
              
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Neural Engineering Workshop
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Hands-on training in neural tissue culture techniques
                </p>
                <div className="text-sm text-muted-foreground mb-4">
                  <div>June 8-9, 2024</div>
                  <div>San Francisco, CA</div>
                </div>
                <Button variant="outline" size="sm">Register Now</Button>
              </Card>
              
              <Card className="text-center p-6">
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Regenerative Medicine Summit
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Panel discussion on future of personalized medicine
                </p>
                <div className="text-sm text-muted-foreground mb-4">
                  <div>July 22-24, 2024</div>
                  <div>New York, NY</div>
                </div>
                <Button variant="outline" size="sm">Save Date</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest research updates, event announcements, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 500+ researchers and industry professionals receiving our updates.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
