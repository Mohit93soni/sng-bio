"use client";

import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, Building2, Users, Microscope } from "lucide-react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Thank you for your message! We'll get back to you within 24 hours.");
      
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: ""
      });
    } catch (error) {
      alert("Error sending message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact <span className="text-primary">SND Regenics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to revolutionize biomedical research together? Get in touch with our team 
              to discuss partnerships, collaborations, or learn more about our cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send us a message anytime</p>
                <a href="mailto:info@sndregenics.com" className="text-primary hover:text-primary/80 font-medium">
                  info@sndregenics.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Mon-Fri from 8am to 5pm</p>
                <a href="tel:+1234567890" className="text-primary hover:text-primary/80 font-medium">
                  +1 (234) 567-8900
                </a>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">Come say hello at our office HQ</p>
                <address className="text-primary not-italic">
                  123 Biotech Drive<br />
                  Research Park, CA 94301
                </address>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Form Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your organization"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <select 
                        value={formData.inquiryType} 
                        onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="product">Product Information</option>
                        <option value="research">Research Collaboration</option>
                        <option value="training">Training Programs</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief subject of your inquiry"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">We'll acknowledge your inquiry within 4 hours during business days.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Expert Consultation</h4>
                      <p className="text-sm text-muted-foreground">Connect with our specialists who understand your specific needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Tailored Solutions</h4>
                      <p className="text-sm text-muted-foreground">Receive customized recommendations based on your requirements.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Collaboration Opportunities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">Industry Partnerships</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm">Academic Collaborations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Microscope className="h-5 w-5 text-primary" />
                    <span className="text-sm">Research Joint Ventures</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
