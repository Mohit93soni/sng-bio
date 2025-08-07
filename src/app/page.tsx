import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SND Regenics - Revolutionary Biomedical Research & 3D Bioprinting Technology",
  description: "Leading biomedical R&D firm pioneering hybrid 3D bioprinting and electrospinning technology for regenerative medicine, neural tissue engineering, and personalized healthcare solutions.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-accent/20 to-primary/10 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Pioneering the Future of 
              <span className="text-primary"> Regenerative Medicine</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              At SND Regenics, we've engineered a cutting-edge hybrid machine that combines 
              3D bioprinting and electrospinning, revolutionizing drug testing, organogenesis, 
              and regenerative medicine.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
