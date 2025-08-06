import { Navigation } from "@/components/ui/navigation";
import { SEOHead } from "@/components/ui/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, Search, ArrowRight, Brain, Dna, Microscope, TrendingUp } from "lucide-react";

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SND Regenics Research Blog",
    "description": "Expert insights, research findings, and thought leadership in biomedical science, tissue engineering, and regenerative medicine.",
    "publisher": {
      "@type": "Organization", 
      "name": "SND Regenics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sndregenics.com/logo.png"
      }
    },
    "url": "https://sndregenics.com/blog"
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Neural Tissue Engineering: Challenges and Opportunities",
      excerpt: "Exploring the latest advances in neural tissue engineering and the potential for treating neurodegenerative diseases through bioprinted solutions.",
      author: "Dr. Sarah Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Neural Engineering",
      featured: true,
      icon: Brain
    },
    {
      id: 2,
      title: "Hybrid Bioprinting: Combining Multiple Technologies for Better Outcomes",
      excerpt: "How our hybrid approach combining 3D bioprinting and electrospinning creates superior tissue scaffolds with enhanced functionality.",
      author: "Dr. Michael Rodriguez",
      date: "March 8, 2024", 
      readTime: "6 min read",
      category: "Technology",
      featured: true,
      icon: Dna
    },
    {
      id: 3,
      title: "Machine Learning Applications in Bioprinting Process Optimization",
      excerpt: "Leveraging AI algorithms to optimize bioprinting parameters and predict tissue behavior for improved research outcomes.",
      author: "Dr. Emily Wang",
      date: "March 5, 2024",
      readTime: "10 min read", 
      category: "AI & Bioinformatics",
      featured: false,
      icon: TrendingUp
    },
    {
      id: 4,
      title: "Advances in Biomaterial Design for Tissue Engineering Applications",
      excerpt: "Recent developments in biocompatible materials and their applications in creating functional tissue constructs.",
      author: "Dr. James Thompson",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Materials Science",
      featured: false,
      icon: Microscope
    },
    {
      id: 5,
      title: "Clinical Translation of Bioprinted Tissues: Regulatory Considerations",
      excerpt: "Understanding the regulatory landscape and requirements for bringing bioprinted tissues from research to clinical applications.",
      author: "Dr. Lisa Park",
      date: "February 26, 2024",
      readTime: "9 min read",
      category: "Regulatory Affairs",
      featured: false,
      icon: Microscope
    },
    {
      id: 6,
      title: "Scalability Challenges in Bioprinting: From Lab to Manufacturing",
      excerpt: "Addressing the technical and economic challenges of scaling bioprinting processes for commercial applications.",
      author: "Dr. Robert Kim",
      date: "February 22, 2024",
      readTime: "5 min read",
      category: "Manufacturing",
      featured: false,
      icon: Dna
    }
  ];

  const categories = ["All", "Neural Engineering", "Technology", "AI & Bioinformatics", "Materials Science", "Regulatory Affairs", "Manufacturing"];

  return (
    <>
      <SEOHead
        title="Research Blog - SND Regenics | Biomedical Science Insights & Expert Analysis"
        description="Read expert insights, research findings, and thought leadership from SND Regenics' team of biomedical scientists covering tissue engineering, neural research, and regenerative medicine."
        keywords="biomedical research blog, tissue engineering insights, neural engineering articles, regenerative medicine analysis, 3D bioprinting research, scientific thought leadership"
        ogTitle="Expert Biomedical Research Blog | SND Regenics"
        ogDescription="Discover cutting-edge insights from leading biomedical researchers covering the latest developments in tissue engineering, neural science, and regenerative medicine."
        canonicalUrl="https://sndregenics.com/blog"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-4">
                Research Insights
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                SND Regenics <span className="text-primary">Research Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights, research findings, and thought leadership from our team of 
                biomedical scientists and engineers working at the forefront of regenerative medicine.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={category === "All" ? "default" : "outline"} 
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Articles</h2>
              <p className="text-muted-foreground">Our most impactful and widely-read research insights.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/20 h-48 flex items-center justify-center">
                      <post.icon className="h-16 w-16 text-primary" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Badge className="mr-3">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Recent Articles</h2>
              <p className="text-muted-foreground">Stay current with our latest research insights and discoveries.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <post.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Topics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Explore Research Topics</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Dive deeper into specific areas of our research and discover the latest developments in each field.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Brain, title: "Neural Engineering", count: 12, color: "bg-blue-500/10 text-blue-600" },
                { icon: Dna, title: "3D Bioprinting", count: 18, color: "bg-green-500/10 text-green-600" },
                { icon: Microscope, title: "Tissue Culture", count: 14, color: "bg-purple-500/10 text-purple-600" },
                { icon: TrendingUp, title: "AI & ML", count: 8, color: "bg-orange-500/10 text-orange-600" }
              ].map((topic, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${topic.color} group-hover:scale-110 transition-transform`}>
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">{topic.count} articles</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Subscribe to Our Research Updates</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest research insights, breakthrough discoveries, and expert analysis 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 1,200+ researchers and professionals. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Interested in Contributing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We welcome guest contributions from leading researchers and industry experts. 
              Share your insights with our global audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Submit an Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/research">Explore Our Research</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
