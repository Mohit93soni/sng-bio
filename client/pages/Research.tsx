import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Brain, Dna, Microscope, Globe, FlaskConical, TrendingUp, Users, BookOpen, ArrowRight, Zap, Target, Cpu, Database } from "lucide-react";

export default function Research() {
  return (
    <>
      <title>Research & Development - SND Regenics | Cutting-Edge Biomedical Innovation</title>
      <meta name="description" content="Explore SND Regenics' advanced R&D in Neuroscience, 3D-Bioprinting & Scaffolding, Neural Tissue Culture, and Bioinformatics & Machine Learning. Discover our groundbreaking research projects." />
      <meta name="keywords" content="biomedical research, neuroscience research, 3D bioprinting development, neural tissue culture, bioinformatics machine learning, regenerative medicine R&D" />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-4">
                Research & Development
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Advancing the Frontiers of 
                <span className="text-primary"> Biomedical Science</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our interdisciplinary research spans neuroscience, 3D bioprinting, tissue engineering, 
                and computational biology, driving innovation in regenerative medicine and personalized healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* Research Statistics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <p className="text-sm text-muted-foreground">Active Research Areas</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">12+</div>
                  <p className="text-sm text-muted-foreground">Ongoing Projects</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <p className="text-sm text-muted-foreground">Research Partners</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Published Papers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Research Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Research Focus Areas</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four key areas where we're making groundbreaking discoveries and developing 
                innovative solutions for the future of medicine.
              </p>
            </div>
            
            <div className="space-y-16">
              {/* Neuroscience */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Neuroscience</h3>
                      <Badge variant="secondary" className="mt-1">Core Research Area</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our neuroscience research focuses on understanding neural tissue development, 
                    neural network formation, and brain organoid development. We investigate 
                    neurological disorders, neural regeneration, and develop models for 
                    drug testing and disease research.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground font-medium">Neural Organoid Development</span>
                        <span className="text-muted-foreground">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground font-medium">Disease Modeling</span>
                        <span className="text-muted-foreground">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground font-medium">Neural Network Analysis</span>
                        <span className="text-muted-foreground">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                  
                  <Button variant="outline" asChild>
                    <Link to="/contact">Collaborate on Neuroscience</Link>
                  </Button>
                </div>
                
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10">
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-foreground">Current Projects</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-foreground">3D Brain Organoid Platform</p>
                          <p className="text-sm text-muted-foreground">Developing scalable brain organoids for drug screening</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-foreground">Neural Tissue Regeneration</p>
                          <p className="text-sm text-muted-foreground">Investigating stem cell therapies for spinal cord injury</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-foreground">Alzheimer's Disease Models</p>
                          <p className="text-sm text-muted-foreground">Creating patient-specific disease models</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 3D-Bioprinting & Scaffolding */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/5 lg:order-1">
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-foreground">Innovation Highlights</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground">Hybrid electrospinning-bioprinting platform</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Target className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground">Multi-material scaffold fabrication</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground">Real-time process monitoring</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FlaskConical className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground">Biocompatible material development</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">Recent Breakthrough:</p>
                      <p className="text-sm text-foreground">
                        Successfully demonstrated simultaneous printing of neural cells 
                        and supporting scaffold structures with 95% cell viability.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Dna className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">3D-Bioprinting & Scaffolding</h3>
                      <Badge variant="secondary" className="mt-1">Flagship Technology</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our revolutionary hybrid fabrication technology combines 3D bioprinting 
                    with electrospinning to create complex, multi-layered tissue scaffolds. 
                    This approach enables precise control over cellular positioning, 
                    scaffold architecture, and mechanical properties.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <p className="text-xs text-muted-foreground">Cell Viability</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">10μm</div>
                      <p className="text-xs text-muted-foreground">Print Resolution</p>
                    </div>
                  </div>
                  
                  <Button asChild>
                    <Link to="/product">
                      Explore Our Technology
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* 3D-Neural Tissue Culture */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">3D-Neural Tissue Culture</h3>
                      <Badge variant="secondary" className="mt-1">Specialized Platform</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our specialized 3D neural tissue culture systems provide controlled 
                    environments for growing complex neural networks. We develop custom 
                    culture protocols, biomaterials, and monitoring systems for various 
                    neural tissue applications.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <Card className="p-4 border-l-4 border-l-primary">
                      <h5 className="font-medium text-foreground mb-1">Culture Environment Control</h5>
                      <p className="text-sm text-muted-foreground">
                        Precise control of oxygen, pH, temperature, and nutrient gradients
                      </p>
                    </Card>
                    <Card className="p-4 border-l-4 border-l-primary">
                      <h5 className="font-medium text-foreground mb-1">Real-time Monitoring</h5>
                      <p className="text-sm text-muted-foreground">
                        Continuous monitoring of cell health and neural activity
                      </p>
                    </Card>
                    <Card className="p-4 border-l-4 border-l-primary">
                      <h5 className="font-medium text-foreground mb-1">Scalable Systems</h5>
                      <p className="text-sm text-muted-foreground">
                        From single-well to high-throughput culture platforms
                      </p>
                    </Card>
                  </div>
                  
                  <Button variant="outline" asChild>
                    <Link to="/service">Learn About Our Culture Services</Link>
                  </Button>
                </div>
                
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10">
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-foreground">Applications</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-card rounded-lg">
                        <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-xs font-medium text-foreground">Disease Modeling</p>
                      </div>
                      <div className="text-center p-3 bg-card rounded-lg">
                        <FlaskConical className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-xs font-medium text-foreground">Drug Screening</p>
                      </div>
                      <div className="text-center p-3 bg-card rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-xs font-medium text-foreground">Toxicity Testing</p>
                      </div>
                      <div className="text-center p-3 bg-card rounded-lg">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-xs font-medium text-foreground">Therapy Development</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">Culture Success Rate:</p>
                      <Progress value={88} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-1">88% successful long-term cultures</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Research - Bioinformatics & ML */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ongoing Research Areas</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge research projects that are shaping the future of biomedical science.
              </p>
            </div>
            
            <Card className="max-w-6xl mx-auto">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Bioinformatics & Machine Learning</CardTitle>
                <Badge className="mt-2">Ongoing Research Focus</Badge>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our bioinformatics and machine learning research integrates computational 
                      biology with artificial intelligence to accelerate biomedical discoveries. 
                      We develop predictive models, optimize tissue engineering processes, 
                      and create intelligent systems for personalized medicine.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Cpu className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h5 className="font-medium text-foreground">Predictive Modeling</h5>
                          <p className="text-sm text-muted-foreground">
                            AI models for predicting tissue behavior and treatment outcomes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Database className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h5 className="font-medium text-foreground">Data Integration</h5>
                          <p className="text-sm text-muted-foreground">
                            Multi-omics data analysis for comprehensive biological insights
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h5 className="font-medium text-foreground">Process Optimization</h5>
                          <p className="text-sm text-muted-foreground">
                            Machine learning algorithms for bioprinting parameter optimization
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-foreground">Current ML Projects</h4>
                    
                    <Card className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h6 className="font-medium text-foreground">Neural Network Prediction</h6>
                        <Badge variant="outline" className="text-xs">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Deep learning models for predicting neural network formation in 3D cultures
                      </p>
                      <Progress value={75} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">75% completion</p>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h6 className="font-medium text-foreground">Drug Response Modeling</h6>
                        <Badge variant="outline" className="text-xs">Phase 2</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI-driven prediction of drug responses in tissue-engineered models
                      </p>
                      <Progress value={60} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">60% completion</p>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h6 className="font-medium text-foreground">Biomarker Discovery</h6>
                        <Badge variant="outline" className="text-xs">Research</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Machine learning approaches for identifying novel disease biomarkers
                      </p>
                      <Progress value={45} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">45% completion</p>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Partnerships */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Research Partnerships</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Collaborating with leading institutions and organizations worldwide to advance biomedical research.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Academic Institutions</h3>
                <p className="text-muted-foreground mb-4">
                  Partnerships with top universities for collaborative research projects and student training programs.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </Card>
              
              <Card className="text-center p-8">
                <FlaskConical className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Pharmaceutical Companies</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborations for drug development, testing platforms, and regulatory pathway development.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Explore Collaboration</Link>
                </Button>
              </Card>
              
              <Card className="text-center p-8">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Working with hospitals and clinics to translate research into clinical applications.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Join Our Network</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Research Community
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in collaborating on cutting-edge biomedical research? 
              Connect with our team to explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start a Research Collaboration</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
