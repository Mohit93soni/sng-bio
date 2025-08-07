import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SND Regenics</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Pioneering the future of regenerative medicine through innovative hybrid 
              bioprinting technology and cutting-edge research.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/news">Latest News</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/product" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/service" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/research" className="text-muted-foreground hover:text-primary">R&D</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Get in Touch</Link></li>
              <li><Link href="/news" className="text-muted-foreground hover:text-primary">News & Events</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 SND Regenics. All rights reserved. Advancing biomedical research through innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
