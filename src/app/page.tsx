import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  Microscope,
  Dna,
  Brain,
  Beaker,
  Target,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SND Regenics - Revolutionary Biomedical Research & 3D Bioprinting Technology",
  description:
    "Leading biomedical R&D firm pioneering hybrid 3D bioprinting and electrospinning technology for regenerative medicine, neural tissue engineering, and personalized healthcare solutions.",
};

export default function HomePage() {
  return (
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
                  revolutionizing drug testing, organogenesis, and regenerative
                  medicine.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="h-12 px-8">
                  <Link href="/product">
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
                  <Link href="/contact">Get in Touch</Link>
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
                    <h3 className="font-semibold text-foreground">Research</h3>
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
              that combines 3D bioprinting and electrospinning. This innovation
              is set to revolutionize drug testing, organogenesis, and
              regenerative medicine. Our technology offers customized solutions
              that will transform the landscape of biomedical research, laying
              the foundation for the future of personalized, patient-centric
              medicine."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
