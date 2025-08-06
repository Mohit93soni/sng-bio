import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Microscope, GraduationCap, Users, Clock, CheckCircle, ArrowRight, FlaskConical, Cpu, Target, Beaker, BookOpen, Award, Settings, Zap } from "lucide-react";

export default function Service() {
  return (
    <>
      <title>Our Services - SND Regenics | Biomedical Research & Training Solutions</title>
      <meta name="description" content="Discover SND Regenics' comprehensive services including customized 3D scaffolds & soft tissues, training programs, research consultation, and biomedical engineering solutions." />
      <meta name="keywords" content="3D scaffold services, biomedical training programs, tissue engineering consultation, custom bioprinting services, regenerative medicine solutions" />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-4">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive 
                <span className="text-primary"> Biomedical Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                From customized 3D scaffolds to comprehensive training programs, we provide 
                end-to-end solutions for your biomedical research and development needs.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Customized 3D Scaffolds & Soft Tissues */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Customized 3D Scaffolds & Soft Tissues</CardTitle>
                      <Badge variant="secondary" className="mt-1">Featured Service</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our flagship service provides tailored scaffold design and fabrication 
                    for specific research applications and therapeutic needs. Using our 
                    proprietary hybrid bioprinting technology, we create complex, 
                    multi-layered structures that mimic natural tissue architecture.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-foreground">Custom Design & Fabrication</h5>
                        <p className="text-sm text-muted-foreground">Tailored to your specific research requirements and biological targets</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-foreground">Multi-Material Integration</h5>
                        <p className="text-sm text-muted-foreground">Combination of biocompatible materials for optimal performance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-foreground">Quality Assurance</h5>
                        <p className="text-sm text-muted-foreground">Rigorous testing and validation for research-grade quality</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Request Custom Scaffolds
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Comprehensive Training Program */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Comprehensive Training Program</CardTitle>
                      <Badge variant="secondary" className="mt-1">Educational Excellence</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Educational programs and workshops designed to train researchers, 
                    clinicians, and industry professionals in advanced bioprinting and 
                    tissue engineering techniques. Our curriculum combines theoretical 
                    knowledge with hands-on experience.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-foreground">Expert-Led Workshops</h5>
                        <p className="text-sm text-muted-foreground">Taught by leading scientists and industry professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-foreground">Hands-On Experience</h5>
                        <p className="text-sm text-muted-foreground">Practical training with state-of-the-art equipment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-foreground">Certification Programs</h5>
                        <p className="text-sm text-muted-foreground">Industry-recognized certifications and credentials</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Explore Training Options
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Service Categories */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Service Portfolio</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our full range of services designed to support every aspect of your biomedical research journey.
              </p>
            </div>
            
            <Tabs defaultValue="fabrication" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="fabrication">Fabrication</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fabrication">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="p-6">
                    <FlaskConical className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">3D Bioprinting Services</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Custom bioprinting of cell-laden constructs with precise spatial control and high cell viability.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Multi-material printing</li>
                      <li>• Custom bioink formulation</li>
                      <li>• Sterile fabrication protocols</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <Zap className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Electrospinning Services</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Nanofibrous scaffold production with controlled fiber orientation and material composition.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Aligned fiber structures</li>
                      <li>• Custom polymer blends</li>
                      <li>• Gradient scaffolds</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <Target className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Hybrid Fabrication</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Combined bioprinting and electrospinning for complex, multi-layered tissue constructs.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Multi-scale architecture</li>
                      <li>• Integrated cell seeding</li>
                      <li>• Custom design protocols</li>
                    </ul>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="training">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8">
                    <BookOpen className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">Workshop Programs</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium text-foreground">Fundamentals of Bioprinting</h4>
                        <p className="text-sm text-muted-foreground">2-day intensive workshop covering basic principles and techniques</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>16 hours • Certificate included</span>
                        </div>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium text-foreground">Advanced Tissue Engineering</h4>
                        <p className="text-sm text-muted-foreground">5-day comprehensive program for experienced researchers</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>40 hours • Hands-on projects</span>
                        </div>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium text-foreground">Neural Tissue Culture</h4>
                        <p className="text-sm text-muted-foreground">Specialized training in neural tissue engineering techniques</p>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>24 hours • Expert certification</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-8">
                    <Award className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">Certification Programs</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Professional Bioprinting Certification</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Comprehensive certification program covering all aspects of bioprinting technology and applications.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="flex items-center text-muted-foreground">
                            <Users className="h-3 w-3 mr-1" />
                            <span>Max 12 participants</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>3 months duration</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Custom Training Solutions</h4>
                        <p className="text-sm text-muted-foreground">
                          Tailored training programs designed for specific organizational needs and research objectives.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="consulting">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="p-6">
                    <Settings className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Research Consulting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Expert guidance for biomedical research projects, study design, and methodology optimization.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Project planning & design</li>
                      <li>• Methodology optimization</li>
                      <li>• Regulatory guidance</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <Cpu className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technology Integration</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Assistance with integrating bioprinting technology into existing research workflows and facilities.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Equipment selection</li>
                      <li>• Workflow optimization</li>
                      <li>• Staff training</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <Beaker className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Protocol Development</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Custom protocol development for specific applications and research objectives.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Custom protocols</li>
                      <li>• Validation studies</li>
                      <li>• Documentation support</li>
                    </ul>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="analysis">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8">
                    <Microscope className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">Characterization Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Morphological Analysis</h4>
                          <p className="text-sm text-muted-foreground">Detailed structural characterization using advanced imaging techniques</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Mechanical Testing</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive mechanical property evaluation and analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Biocompatibility Assessment</h4>
                          <p className="text-sm text-muted-foreground">Cell viability, proliferation, and functionality studies</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-8">
                    <TrendingUp className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">Data Analysis Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Statistical Analysis</h4>
                          <p className="text-sm text-muted-foreground">Advanced statistical modeling and hypothesis testing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Image Analysis</h4>
                          <p className="text-sm text-muted-foreground">Automated image processing and quantitative analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-foreground">Custom Analytics</h4>
                          <p className="text-sm text-muted-foreground">Tailored analytical solutions for specific research needs</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A streamlined approach to delivering exceptional biomedical solutions tailored to your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Initial discussion to understand your specific requirements and research objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Design & Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Custom solution design with detailed project planning and timeline development.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Execution of the project with regular updates and quality checkpoints.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Delivery & Support</h3>
                <p className="text-sm text-muted-foreground">
                  Final delivery with comprehensive documentation and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Accelerate Your Research?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our team to discuss how our services can support your biomedical research objectives 
              and help you achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
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
