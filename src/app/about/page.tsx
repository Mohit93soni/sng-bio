import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Target,
  Users,
  Award,
  Lightbulb,
  Microscope,
  Heart,
  Globe,
  TrendingUp,
  CheckCircle,
  User,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - SND Regenics | Leading Biomedical Research & Innovation",
  description:
    "Learn about SND Regenics' mission to revolutionize regenerative medicine through cutting-edge 3D bioprinting and electrospinning technology. Discover our story, values, and commitment to advancing healthcare.",
  openGraph: {
    title: "About SND Regenics | Biomedical Innovation Leaders",
    description:
      "Discover the story behind SND Regenics and meet our leadership team driving innovation in regenerative medicine and biomedical research.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-4">
              About SND Regenics
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pioneering the Future of
              <span className="text-primary"> Regenerative Medicine</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a cutting-edge biomedical research and development firm
              dedicated to revolutionizing healthcare through innovative hybrid
              fabrication technology and personalized medicine solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/10 p-8 md:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Our Mission
                </h2>
                <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
                  "At SND Regenics, we've engineered a cutting-edge hybrid
                  machine that combines 3D bioprinting and electrospinning. This
                  innovation is set to revolutionize drug testing,
                  organogenesis, and regenerative medicine. Our technology
                  offers customized solutions that will transform the landscape
                  of biomedical research, laying the foundation for the future
                  of personalized, patient-centric medicine."
                </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visionary leaders driving innovation in biomedical research and
              regenerative medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Founder */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Founder
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Lokesh Sharma
                </h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Visionary leader with over 15 years of experience in
                  biomedical engineering and tissue regeneration. Pioneer in
                  developing hybrid bioprinting technologies for clinical
                  applications.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                    <span>PhD Biomedical Engineering</span>
                    <span>•</span>
                    <span>MIT</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTO */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                  >
                    CTO
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Chi Man
                </h3>
                <p className="text-primary font-medium mb-4">
                  Chief Technology Officer
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Technology innovator specializing in 3D bioprinting systems
                  and neural tissue engineering. Leads our R&D initiatives and
                  drives technological advancement in regenerative medicine.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                    <span>PhD Computer Science</span>
                    <span>•</span>
                    <span>Stanford</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Co-founder */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <User className="h-16 w-16 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                  >
                    Co-founder
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Dinesh
                </h3>
                <p className="text-primary font-medium mb-4">
                  Co-founder & COO
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic operations leader with deep expertise in
                  biomaterials science and tissue culture systems. Oversees
                  operational excellence and ensures seamless delivery of
                  cutting-edge solutions.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                    <span>PhD Materials Science</span>
                    <span>•</span>
                    <span>Caltech</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Our leadership team combines decades of experience in biomedical
              research, technology innovation, and operational excellence.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our research, development, and
              commitment to advancing healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  Constantly pushing the boundaries of biomedical technology to
                  create breakthrough solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  Maintaining the highest standards in research, development,
                  and quality assurance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Collaboration
                </h3>
                <p className="text-muted-foreground">
                  Working together with partners, researchers, and communities
                  to achieve common goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Impact
                </h3>
                <p className="text-muted-foreground">
                  Focusing on solutions that create meaningful improvements in
                  patient outcomes and quality of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Healthcare Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join us in our mission to revolutionize regenerative medicine and
            create the next generation of personalized healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start a Collaboration</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/research">Explore Our Research</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
