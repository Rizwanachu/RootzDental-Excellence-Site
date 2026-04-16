import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Activity, Sparkles, Shield, Smile, Wrench, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { CLINIC_NAME, CLINIC_PHONE_RAW, SITE_URL } from "@/config";

export default function Services() {
  const clinicName = CLINIC_NAME;

  const services = [
    { 
      id: "root-canal-treatment", 
      title: "Root Canal Treatment", 
      desc: "Save your infected tooth with our painless root canal therapy. We use advanced rotary endodontics for precise and comfortable treatment.", 
      icon: <Activity className="w-12 h-12" />,
      features: ["Painless procedure", "Saves natural tooth", "Quick recovery"]
    },
    { 
      id: "teeth-cleaning", 
      title: "Teeth Cleaning & Scaling", 
      desc: "Professional cleaning removes plaque and tartar buildup that regular brushing misses, preventing gum disease and bad breath.", 
      icon: <Sparkles className="w-12 h-12" />,
      features: ["Removes stubborn tartar", "Prevents cavities", "Freshens breath"]
    },
    { 
      id: "tooth-filling", 
      title: "Tooth Filling", 
      desc: "Restore decayed or broken teeth with our tooth-colored composite fillings that blend seamlessly with your natural smile.", 
      icon: <Shield className="w-12 h-12" />,
      features: ["Tooth-colored material", "Durable and strong", "Single visit procedure"]
    },
    { 
      id: "teeth-whitening", 
      title: "Teeth Whitening", 
      desc: "Brighten your smile by several shades in just one hour with our professional, safe, and highly effective whitening treatments.", 
      icon: <Smile className="w-12 h-12" />,
      features: ["Instant results", "Safe for enamel", "Removes deep stains"]
    },
    { 
      id: "dental-implants", 
      title: "Dental Implants", 
      desc: "The most permanent and natural-looking solution for missing teeth. Regain full chewing function and smile confidently.", 
      icon: <Wrench className="w-12 h-12" />,
      features: ["Looks and feels natural", "Permanent solution", "Prevents bone loss"]
    },
    { 
      id: "braces-aligners", 
      title: "Braces & Aligners", 
      desc: "Straighten misaligned teeth and fix bite issues. We offer traditional braces, ceramic braces, and invisible clear aligners.", 
      icon: <CheckCircle2 className="w-12 h-12" />,
      features: ["Invisible options available", "Fixes bite issues", "For all ages"]
    },
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <SEOHead 
        title={`Our Dental Services | ${clinicName}`}
        description={`${clinicName} offers comprehensive dental services near you — root canal treatment, teeth whitening, affordable dental implants, braces, and more. Book your visit today!`}
        canonicalUrl={`${SITE_URL}/services`}
      />

      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
            <p className="text-lg text-muted-foreground">
              We provide a comprehensive range of dental treatments using state-of-the-art technology to ensure your comfort and the best possible clinical outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card className="h-full border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-muted relative overflow-hidden">
                    {/* Placeholder for service specific image */}
                    <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6 h-16">{service.desc}</p>
                    
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto">
                      <Link to={`/services/${service.id}`} className="text-primary font-semibold hover:underline inline-flex items-center">
                        Read Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <a href={`tel:${CLINIC_PHONE_RAW}`}>
                        <Button variant="outline" size="sm" className="rounded-full gap-1"><Phone className="w-3 h-3" />Call</Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not sure what treatment you need?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book a general consultation. Our expert doctors will examine your oral health and recommend the best treatment plan for you.
          </p>
          <a href={`tel:${CLINIC_PHONE_RAW}`}>
            <Button size="lg" variant="secondary" className="rounded-full h-14 px-8 font-bold gap-2">
              <Phone className="w-5 h-5" />
              Call to Book
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
