import { useState } from "react";
import { Link } from "wouter";
import { CalendarCheck, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";

export default function BookAppointment() {
  const clinicName = "Smile Dental Care";
  const email = "hello@smiledental.com";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    timeSlot: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission via mailto for the template, 
    // but show a success state in the UI first.
    setIsSubmitted(true);
    
    setTimeout(() => {
      const subject = `New Appointment Request: ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AService: ${formData.service}%0D%0APreferred Date: ${formData.preferredDate}%0D%0APreferred Time: ${formData.timeSlot}%0D%0A%0D%0ANotes: ${formData.message}`;
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <>
      <SEOHead 
        title={`Book Appointment | ${clinicName}`}
        description="Schedule your dental appointment easily online. Choose your preferred date, time, and service."
        canonicalUrl="https://yourdomain.com/book-appointment"
      />

      <section className="pt-32 pb-20 bg-muted/30 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">Book Your Visit</h1>
                <p className="text-muted-foreground text-lg">
                  Take the first step towards a healthier, more confident smile. Request an appointment below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Easy Scheduling</h3>
                    <p className="text-muted-foreground text-sm">We'll contact you to confirm your exact time slot based on availability.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Safe Environment</h3>
                    <p className="text-muted-foreground text-sm">Strict hygiene and sterilization protocols followed for every patient.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">No Wait Times</h3>
                    <p className="text-muted-foreground text-sm">We respect your time and ensure appointments start as scheduled.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3">
              <Card className="border-border shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-16 px-4 animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Request Sent Successfully!</h2>
                      <p className="text-muted-foreground mb-8">
                        Thank you, {formData.name}. We have received your appointment request. Our team will contact you shortly at {formData.phone} to confirm your booking.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full px-8">
                        Book Another
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input 
                            id="name" name="name" required 
                            value={formData.name} onChange={handleChange}
                            className="bg-muted/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" name="phone" type="tel" required 
                            value={formData.phone} onChange={handleChange}
                            className="bg-muted/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" name="email" type="email"
                          value={formData.email} onChange={handleChange}
                          className="bg-muted/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Service Needed *</Label>
                        <Select required value={formData.service} onValueChange={(v) => handleSelectChange('service', v)}>
                          <SelectTrigger className="bg-muted/50">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Checkup & Consultation</SelectItem>
                            <SelectItem value="cleaning">Teeth Cleaning & Scaling</SelectItem>
                            <SelectItem value="pain">Toothache / Pain Relief</SelectItem>
                            <SelectItem value="whitening">Teeth Whitening</SelectItem>
                            <SelectItem value="root-canal">Root Canal Treatment</SelectItem>
                            <SelectItem value="implants">Dental Implants</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Input 
                            id="preferredDate" name="preferredDate" type="date" required 
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.preferredDate} onChange={handleChange}
                            className="bg-muted/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Time *</Label>
                          <Select required value={formData.timeSlot} onValueChange={(v) => handleSelectChange('timeSlot', v)}>
                            <SelectTrigger className="bg-muted/50">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                              <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Notes (Optional)</Label>
                        <Textarea 
                          id="message" name="message" rows={3}
                          placeholder="Any specific symptoms, fears, or questions?"
                          value={formData.message} onChange={handleChange}
                          className="bg-muted/50 resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
                        Request Appointment
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        By submitting this form, you agree to our clinic's privacy policy. In case of severe emergency, please call us directly.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
