import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Microscope,
  Dna,
  Brain,
  ChevronRight,
  Beaker,
  Users,
  Target,
  Globe,
} from "lucide-react";

export default function Index() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SND Regenics",
    description:
      "Leading biomedical research and development firm specializing in 3D bioprinting, electrospinning, and regenerative medicine solutions.",
    url: "https://sndregenics.com",
    logo: "https://sndregenics.com/logo.png",
    foundingDate: "2020",
    industry: "Biotechnology",
    specialties: [
      "3D Bioprinting",
      "Electrospinning",
      "Neural Tissue Engineering",
      "Regenerative Medicine",
      "Bioinformatics",
      "Machine Learning",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Biotech Drive",
      addressLocality: "Research Park",
      addressRegion: "CA",
      postalCode: "94301",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-8900",
      contactType: "customer service",
      email: "info@sndregenics.com",
    },
  };

  return (
    <>
      <SEOHead
        title="SND Regenics - Revolutionary Biomedical Research & 3D Bioprinting Technology"
        description="Leading biomedical R&D firm pioneering hybrid 3D bioprinting and electrospinning technology for regenerative medicine, neural tissue engineering, and personalized healthcare solutions."
        keywords="biomedical research, 3D bioprinting, electrospinning, regenerative medicine, neural tissue engineering, tissue scaffolds, drug testing, organogenesis, bioinformatics, machine learning healthcare"
        ogTitle="SND Regenics - Pioneering Regenerative Medicine Through Innovation"
        ogDescription="Discover cutting-edge hybrid bioprinting technology that combines 3D bioprinting and electrospinning to revolutionize drug testing, organogenesis, and regenerative medicine."
        canonicalUrl="https://sndregenics.com"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-accent/20 to-primary/10 pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    Revolutionary Biomedical Technology
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Pioneering the Future of
                    <span className="text-primary"> Regenerative Medicine</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    At SND Regenics, we've engineered a cutting-edge hybrid
                    machine that combines 3D bioprinting and electrospinning,
                    revolutionizing drug testing, organogenesis, and
                    regenerative medicine.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="h-12 px-8">
                    <Link to="/product">
                      Explore Our Technology
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="h-12 px-8"
                  >
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/30 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Dna className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        3D Bioprinting
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced tissue fabrication technology
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        Neural Tissue
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized neural tissue culture
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Microscope className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        Research
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Cutting-edge biomedical research
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Beaker className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        Innovation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Personalized medicine solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Research & Development Focus
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advancing the frontiers of biomedical science through
                interdisciplinary research and innovative technology
                development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Neuroscience
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced neural tissue research and brain organoid
                    development for neurological disorder studies.
                  </p>
                  <Link
                    to="/research"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Dna className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    3D-Bioprinting & Scaffolding
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Revolutionary hybrid fabrication combining bioprinting and
                    electrospinning technologies.
                  </p>
                  <Link
                    to="/research"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    3D-Neural Tissue Culture
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized culture systems for growing complex neural
                    tissues in controlled environments.
                  </p>
                  <Link
                    to="/research"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm md:col-span-2 lg:col-span-3">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Bioinformatics & Machine Learning
                      </h3>
                      <p className="text-muted-foreground mb-4 max-w-4xl">
                        Leveraging artificial intelligence and computational
                        biology to accelerate research discoveries and optimize
                        biomedical processes. Our ongoing research integrates
                        machine learning algorithms with bioinformatics to
                        predict tissue behavior and optimize treatment
                        protocols.
                      </p>
                      <Link
                        to="/research"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Explore our AI research{" "}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products & Services Preview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Products */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Our Products
                </h2>
                <div className="space-y-6">
                  <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Hybrid Fabrication Technology
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Revolutionary combination of 3D bioprinting and
                        electrospinning in a single platform, enabling
                        unprecedented control over tissue architecture.
                      </p>
                      <Button variant="outline" asChild>
                        <Link to="/product">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-accent/10 to-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Biomaterials for Neural Tissue Engineering
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Specialized biomaterials designed for neural tissue
                        applications, promoting cell growth and neural network
                        formation.
                      </p>
                      <Button variant="outline" asChild>
                        <Link to="/product">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Our Services
                </h2>
                <div className="space-y-6">
                  <Card className="border-0 bg-gradient-to-br from-accent/10 to-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Customized 3D Scaffolds & Soft Tissues
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Tailored scaffold design and fabrication services for
                        specific research applications and therapeutic needs.
                      </p>
                      <Button variant="outline" asChild>
                        <Link to="/service">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Comprehensive Training Program
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Educational programs and workshops to train researchers
                        and clinicians in advanced bioprinting and tissue
                        engineering techniques.
                      </p>
                      <Button variant="outline" asChild>
                        <Link to="/service">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                "At SND Regenics, we've engineered a cutting-edge hybrid machine
                that combines 3D bioprinting and electrospinning. This
                innovation is set to revolutionize drug testing, organogenesis,
                and regenerative medicine. Our technology offers customized
                solutions that will transform the landscape of biomedical
                research, laying the foundation for the future of personalized,
                patient-centric medicine."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/about">Learn About Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
