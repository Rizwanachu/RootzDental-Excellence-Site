import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Star, ArrowRight, Shield, Clock, Heart, Award, MapPin, Phone, Activity, Sparkles, Smile, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { CLINIC_NAME, LOCATION, DOCTOR_NAME, CLINIC_PHONE, CLINIC_PHONE_RAW, CLINIC_PHONE_2, CLINIC_PHONE_2_RAW, CLINIC_ADDRESS, CLINIC_HOURS, WHATSAPP_LINK, SITE_URL } from "@/config";

export default function Home() {
  const clinicName = CLINIC_NAME;
  const location = LOCATION;
  const phone = CLINIC_PHONE;
  const address = CLINIC_ADDRESS;
  const hours = CLINIC_HOURS;

  const services = [
    { id: "root-canal-treatment", title: "Root Canal Treatment", desc: "Painless procedure to save your infected or damaged tooth.", icon: <Activity className="w-8 h-8" /> },
    { id: "teeth-cleaning", title: "Teeth Cleaning & Scaling", desc: "Professional plaque removal for healthy gums and fresh breath.", icon: <Sparkles className="w-8 h-8" /> },
    { id: "tooth-filling", title: "Tooth Filling", desc: "Durable composite fillings to restore decayed or broken teeth.", icon: <Shield className="w-8 h-8" /> },
    { id: "teeth-whitening", title: "Teeth Whitening", desc: "Safe and effective bleaching for a brighter, more confident smile.", icon: <Smile className="w-8 h-8" /> },
    { id: "dental-implants", title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth.", icon: <Wrench className="w-8 h-8" /> },
    { id: "braces-aligners", title: "Braces & Aligners", desc: "Straighten your teeth with modern orthodontic solutions.", icon: <CheckCircle2 className="w-8 h-8" /> },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "DentalClinic",
      "name": clinicName,
      "image": `${SITE_URL}/opengraph.jpg`,
      "url": SITE_URL,
      "telephone": phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Clinic Address]",
        "addressLocality": location,
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:30"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What dental services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer root canal treatment, teeth cleaning, tooth fillings, teeth whitening, dental implants, and braces & aligners."
          }
        },
        {
          "@type": "Question",
          "name": "Is the treatment painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use modern anesthesia and gentle techniques to ensure all procedures are as comfortable and painless as possible."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book an appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book an appointment by calling us, sending a WhatsApp message, or filling out the online booking form on our website."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept new patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We are always accepting new patients. Contact us to schedule your first visit."
          }
        }
      ]
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  } as const;

  return (
    <>
      <SEOHead 
        title={`Best Dentist in ${location} | ${clinicName} — Dental Clinic Near Me`}
        description={`Looking for the best dental clinic near you in ${location}? ${clinicName} offers painless root canals, affordable dental implants, teeth whitening, and more. Book your appointment today!`}
        canonicalUrl={SITE_URL}
        schema={schema}
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Accepting New Patients
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Best Dentist in {location} — <span className="text-primary">Patient-Focused & Modern</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Looking for a trusted dental clinic near you? At {clinicName}, we provide safe, painless, and advanced dental treatments — from affordable dental implants to teeth whitening — designed to keep your smile healthy and confident.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CLINIC_PHONE_RAW}`}>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full shadow-lg shadow-primary/20 gap-2">
                    <Phone className="w-5 h-5" />
                    Call to Book
                  </Button>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-2">
                    WhatsApp Now
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-muted flex items-center justify-center text-xs overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`} alt="patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm font-medium text-foreground">4.9 stars · 10 Google Reviews</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-md mx-auto"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-muted relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500">
                <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Award Winner</p>
                  <p className="text-sm text-muted-foreground">D Plus Connect 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold text-foreground">Award Winner</h3>
              <p className="text-sm text-muted-foreground">D Plus Connect 2024</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold text-foreground">4.9 Google Rating</h3>
              <p className="text-sm text-muted-foreground">10 Reviews</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold text-foreground">Safe & Sterile</h3>
              <p className="text-sm text-muted-foreground">Global hygiene standards</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold text-foreground">Open Sundays</h3>
              <p className="text-sm text-muted-foreground">By prior appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500" alt="Doctor" className="rounded-2xl object-cover w-full h-[250px]" loading="lazy" />
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400&h=300" alt="Clinic Interior" className="rounded-2xl object-cover w-full h-[200px]" loading="lazy" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=300" alt="Dental Tools" className="rounded-2xl object-cover w-full h-[200px]" loading="lazy" />
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=500" alt="Happy Patient" className="rounded-2xl object-cover w-full h-[250px]" loading="lazy" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About Us</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Caring for Your Smile with Expertise & Compassion</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At {clinicName}, we believe dental care should be comfortable, transparent, and stress-free. Led by Dr. {DOCTOR_NAME}, our team is dedicated to providing personalized treatments using the latest technology.
                </p>
                <ul className="space-y-4 mb-8 text-foreground font-medium">
                  {[
                    "Over 10,000 happy smiles restored",
                    "State-of-the-art digital X-rays & scanners",
                    "Transparent pricing with no hidden fees"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/about">
                  <Button variant="outline" className="h-12 px-6 rounded-full group">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The {clinicName} Difference</h3>
            <p className="text-muted-foreground text-lg">We go above and beyond to make your dental experience comfortable, transparent, and results-driven.</p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400&h=220", title: "Safe & Sterile", desc: "Hospital-grade sterilization protocols for every instrument and surface." },
              { image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=220", title: "Painless Care", desc: "Advanced anesthesia and gentle techniques for a comfortable experience." },
              { image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=220", title: "Expert Dentists", desc: "Highly qualified team with years of specialized clinical experience." },
              { image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400&h=220", title: "On-Time Always", desc: "We respect your schedule — minimal wait times, maximum efficiency." },
              { image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=220", title: "Affordable Pricing", desc: "Transparent, fair pricing with no surprise charges or hidden fees." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-36 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Dental Care</h3>
            <p className="text-muted-foreground text-lg">From routine checkups to complex surgeries, we offer a full range of dental treatments under one roof.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{service.desc}</p>
                    <Link to={`/services/${service.id}`} className="inline-flex items-center font-semibold text-primary group/link">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg" className="rounded-full h-12 px-8">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Simple & Stress-Free Process</h3>
            <p className="text-muted-foreground text-lg">We've designed our patient journey to be as smooth and comfortable as possible.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0"></div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-5 gap-8 relative z-10"
            >
              {[
                { step: "01", title: "Book Appointment", desc: "Schedule online, call us, or send a WhatsApp message." },
                { step: "02", title: "Consultation", desc: "Thorough examination and clear diagnosis." },
                { step: "03", title: "Treatment Plan", desc: "We explain your options clearly before starting." },
                { step: "04", title: "Comfortable Procedure", desc: "Painless treatment with expert care and modern equipment." },
                { step: "05", title: "Follow-Up Care", desc: "Post-care guidance to support your long-term oral health." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-card border-4 border-background rounded-full shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-6 relative z-10">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary-foreground/80 font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Excellent service and very friendly staff. The root canal treatment was completely painless. Highly recommend!", author: "Michael T." },
              { text: "Highly recommended clinic. Clean environment and professional care. They explained every step of the process.", author: "Sarah W." },
              { text: "Best dental experience I've ever had. Doctor made me feel comfortable and the results of my teeth whitening are amazing.", author: "David L." }
            ].map((review, i) => (
              <Card key={i} className="bg-white/10 border-none text-white backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex text-amber-400 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">"{review.text}"</p>
                  <p className="font-bold">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OPENING HOURS */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-card rounded-3xl shadow-lg overflow-hidden border border-border">
            <div className="bg-primary/5 text-center py-5 border-b border-border">
              <h2 className="text-xl font-bold text-primary tracking-widest uppercase">Opening Hours</h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="h-48 md:h-auto md:w-2/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400"
                  alt={`${clinicName} reception`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col justify-center gap-5 md:w-3/5">
                <div>
                  <p className="font-semibold text-foreground text-lg">Monday – Saturday</p>
                  <p className="text-muted-foreground text-lg">10:00 AM – 07:30 PM</p>
                </div>
                <p className="text-primary font-semibold">Sunday — By Appointment Only</p>
                <div className="pt-4 border-t border-border space-y-2">
                  <a href={`tel:${CLINIC_PHONE_RAW}`} className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" /> {CLINIC_PHONE}
                  </a>
                  <a href={`tel:${CLINIC_PHONE_2_RAW}`} className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" /> {CLINIC_PHONE_2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-muted rounded-[2.5rem] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Healthier Smile?</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Don't wait for dental problems to get worse. Book your appointment today for a comprehensive checkup.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Location</p>
                      <p className="text-muted-foreground text-sm">{address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Call Us</p>
                      <p className="text-muted-foreground text-sm">{phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Opening Hours</p>
                      <p className="text-muted-foreground text-sm">{hours}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${CLINIC_PHONE_RAW}`}>
                    <Button size="lg" className="w-full h-14 rounded-full gap-2">
                      <Phone className="w-5 h-5" />
                      Call to Book
                    </Button>
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="w-full h-14 rounded-full border-2 bg-[#25D366] text-white hover:bg-[#1ebe5d] border-transparent">WhatsApp Us</Button>
                  </a>
                </div>
              </div>
              
              <div className="h-[400px] lg:h-auto w-full bg-gray-200 relative">
                {/* PLACEHOLDER: Google Maps iframe goes here */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Google Maps Integration</p>
                    <p className="text-gray-400 text-sm mt-2">Replace with actual iframe embed code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
