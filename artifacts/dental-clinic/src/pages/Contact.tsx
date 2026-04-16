import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_PHONE_RAW, CLINIC_EMAIL, CLINIC_HOURS, SITE_URL } from "@/config";

export default function Contact() {
  const clinicName = CLINIC_NAME;
  const address = CLINIC_ADDRESS;
  const phone = CLINIC_PHONE;
  const email = CLINIC_EMAIL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Interested In: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEOHead 
        title={`Contact Us | ${clinicName}`}
        description="Get in touch with our dental clinic. Find our location, working hours, phone number, and send us a message directly."
        canonicalUrl={`${SITE_URL}/contact`}
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or need to schedule a visit? We're here to help. Reach out to our friendly team today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Info & Map */}
            <div className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm bg-muted/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold mb-2">Call Us</h3>
                    <a href={`tel:${CLINIC_PHONE_RAW}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-muted/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold mb-2">Email Us</h3>
                    <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {email}
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Clinic Address</h3>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">{CLINIC_HOURS}</p>
                    <p className="text-muted-foreground text-sm mt-1 text-destructive font-medium">Sunday: Closed (Emergencies only)</p>
                  </div>
                </div>
              </div>

              <div className="h-[300px] bg-muted rounded-2xl overflow-hidden relative border border-border">
                 {/* PLACEHOLDER: Google Maps iframe goes here */}
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="text-center p-6">
                    <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium">Map Embed Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          required 
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-muted/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          placeholder="+1 234 567 890" 
                          required 
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-muted/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-muted/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest (Optional)</Label>
                      <Select value={formData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger className="bg-muted/50">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Checkup</SelectItem>
                          <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
                          <SelectItem value="whitening">Teeth Whitening</SelectItem>
                          <SelectItem value="root-canal">Root Canal</SelectItem>
                          <SelectItem value="implants">Dental Implants</SelectItem>
                          <SelectItem value="braces">Braces / Aligners</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="How can we help you?" 
                        rows={4} 
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-muted/50 resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 rounded-xl gap-2 text-base">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
