import { Navigation } from "@/components/ui/navigation";
import { SEOHead } from "@/components/ui/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Dna, Brain, Users, TrendingUp, BarChart3, FlaskConical, Zap } from "lucide-react";

export default function Product() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SND Regenics Hybrid Fabrication Technology",
    "description": "Revolutionary hybrid bioprinting and electrospinning platform for creating complex tissue structures and neural engineering applications.",
    "brand": {
      "@type": "Brand",
      "name": "SND Regenics"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "SND Regenics"
    },
    "category": "Biomedical Equipment"
  };

  return (
    <>
      <SEOHead
        title="Products - SND Regenics | Hybrid Bioprinting & Neural Tissue Solutions"
        description="Discover SND Regenics' innovative products including hybrid fabrication technology combining 3D bioprinting & electrospinning, and specialized biomaterials for neural tissue engineering."
        keywords="3D bioprinting equipment, electrospinning technology, hybrid fabrication platform, neural tissue biomaterials, biomedical equipment, tissue engineering products"
        ogTitle="Revolutionary Bioprinting Products | SND Regenics"
        ogDescription="Explore our cutting-edge hybrid fabrication technology and biomaterials designed for advanced tissue engineering and neural research applications."
        canonicalUrl="https://sndregenics.com/product"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-accent/20 to-primary/10 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Microscope className="h-4 w-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Dna className="h-4 w-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Shaping the Future of Health with{" "}
                <span className="text-primary">Regenerative Innovation</span> & Trusted{" "}
                <span className="text-primary">Medical Equipment.</span>
              </h1>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
                Start Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Research & Analysis Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Research</h3>
                        <Badge variant="secondary" className="text-xs">Advanced</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Cutting-edge research in tissue engineering and regenerative medicine.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Analysis</h3>
                        <Badge variant="secondary" className="text-xs">Real-time</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Advanced data analysis and machine learning algorithms.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Trending Articles */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-foreground mb-6">Trending Articles</h2>
              <div className="space-y-4">
                {[
                  "Latest breakthrough in neural tissue engineering",
                  "3D bioprinting advances in regenerative medicine", 
                  "Machine learning applications in drug discovery"
                ].map((article, index) => (
                  <div key={index} className="flex items-start space-x-3 py-3 border-b border-border last:border-b-0">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground mb-1">{article}</p>
                      <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet consectetur...</p>
                      <button className="text-xs text-primary hover:text-primary/80 mt-1">Read more</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Solutions */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-6">Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Hybrid Fabrication Technology</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Revolutionary combination of 3D bioprinting and electrospinning technology. Enables precise control over tissue architecture with unprecedented accuracy and reliability.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <FlaskConical className="h-3 w-3 mr-1" />
                      <span>Advanced bioprinting platform</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Biomaterials for Neural Engineering</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Specialized biomaterials designed for neural tissue applications. Promotes cell growth, neural network formation, and tissue regeneration.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Brain className="h-3 w-3 mr-1" />
                      <span>Neural tissue compatible materials</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Advancing Healthcare Through Research
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Lobortis id
                  porttitor auque ut semper donec amet rhoncus est.
                  Et nunc scelerisque in nunc. At amet blandit dolor
                  aliquetd varius turpis mattis elit mauris.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">90%</div>
                  <p className="text-sm font-medium text-foreground">Success Rate in Research</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">75%</div>
                  <p className="text-sm font-medium text-foreground">Treatment Outcomes</p>
                </div>
              </div>
              
              <Button variant="outline" className="rounded-full">
                Explore more
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20 p-8">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F00bbbe83bd864c758548dbeefa6488bb%2F79e4546993b74c66827a3fca1e6fdf15?format=webp&width=800"
                  alt="Medical professionals conducting research"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for advanced biomedical research and regenerative medicine applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Electrospinning Technology</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced electrospinning capabilities for creating nanofibrous scaffolds with precise control over fiber orientation and density.
                </p>
                <Link to="/contact" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3D Bioprinting Platform</h3>
                <p className="text-muted-foreground mb-4">
                  State-of-the-art 3D bioprinting technology for creating complex tissue structures with cellular precision.
                </p>
                <Link to="/contact" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Neural Tissue Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized solutions for neural tissue engineering, including biocompatible materials and culture systems.
                </p>
                <Link to="/contact" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
