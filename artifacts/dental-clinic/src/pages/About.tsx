import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CheckCircle2, Shield, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { CLINIC_NAME, DOCTOR_NAME, CLINIC_PHONE_RAW } from "@/config";

export default function About() {
  const clinicName = CLINIC_NAME;
  const doctorName = DOCTOR_NAME;

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
        title={`About Our Dental Clinic | ${clinicName}`}
        description={`Learn more about ${clinicName}, led by Dr. ${doctorName}. We are committed to providing compassionate, high-quality dental care in a comfortable environment.`}
        canonicalUrl="https://yourdomain.com/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About {clinicName}</h1>
            <p className="text-lg text-muted-foreground">
              We are a team of dedicated dental professionals committed to making your smile healthier and brighter.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">Our Story & Mission</motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  Founded with a vision to redefine dental care, {clinicName} was established to create a space where patients feel relaxed, informed, and completely at ease.
                </p>
                <p>
                  We understand that visiting the dentist can be anxiety-inducing for many. That's why we've designed every aspect of our clinic—from the soothing waiting area to our gentle treatment approach—to minimize stress and maximize comfort.
                </p>
              </motion.div>
              <motion.ul variants={fadeInUp} className="space-y-4 mb-8">
                {[
                  "Patient-first approach in every treatment",
                  "Strict sterilization and hygiene protocols",
                  "Continuous investment in modern dental technology"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinic interior" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide every interaction and treatment at our clinic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "We listen to your concerns and treat you with empathy and respect." },
              { icon: Shield, title: "Integrity", desc: "Honest advice, transparent pricing, and treatments you actually need." },
              { icon: Award, title: "Excellence", desc: "Uncompromising quality in materials, technology, and clinical skills." }
            ].map((value, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary/5 rounded-[2.5rem] overflow-hidden border border-primary/10">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-[400px] lg:h-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt={`Dr. ${doctorName}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Meet Our Lead Dentist</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Dr. {doctorName}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over 15 years of experience in cosmetic and restorative dentistry, Dr. {doctorName} combines clinical excellence with a gentle touch. 
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  "My goal is to change the way people feel about visiting the dentist. A healthy smile is a confident smile, and getting there shouldn't be a painful or scary process."
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    DDS from top-tier university
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Member of the National Dental Association
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Specialized in painless endodontics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT SAFETY */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-2">Safety @ RootZ Dental Clinic</motion.h2>
              <motion.p variants={fadeInUp} className="text-xl font-semibold text-muted-foreground mb-4">Safety & Hygiene Protocols at RootZ Dental</motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-12">
                At RootZ Dental Clinic, your safety is our top priority. We strictly follow global standards in infection control, sterilization, and patient care — ensuring a worry-free and comfortable dental experience.
              </motion.p>
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Frequent Disinfection & Hand Hygiene",
                    desc: "We maintain round-the-clock disinfection of all surfaces that come into human contact. Every patient and staff member follows rigorous hand-sanitizing protocols to keep the environment safe and clean."
                  },
                  {
                    title: "4-Step Instrument Sterilization",
                    desc: "All dental instruments undergo a scientifically proven 4-step sterilization process — ensuring 100% sterile and safe tools for every patient."
                  },
                  {
                    title: "Global Standard PPE for Dental Team",
                    desc: "Our dentists and assistants are equipped with world-class PPE kits, ensuring zero cross-contamination and maximum protection for both patients and staff."
                  },
                  {
                    title: "Responsible Biomedical Waste Disposal",
                    desc: "We strictly comply with Government regulations for the safe and responsible disposal of biomedical waste — protecting both people and the environment."
                  },
                  {
                    title: "Modified Pre-Treatment Protocols",
                    desc: "For everyone's protection, we follow upgraded pre-treatment steps — mandatory hand sanitization, infra-red thermal scanning at entry, medical & travel history screening, and iodine mouth rinse before procedures.",
                    full: true
                  },
                  {
                    title: "Digital Patient Records",
                    desc: "At RootZ, your entire dental journey is securely stored in our advanced digital medical record system, helping us deliver personalized, precise, and safe care every step of the way.",
                    full: true
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`bg-card rounded-2xl p-6 border border-border shadow-sm ${(item as {full?: boolean}).full ? "md:col-span-2" : ""}`}
                  >
                    <h3 className="font-bold text-lg mb-3 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-8">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p variants={fadeInUp} className="mt-10 text-center text-lg font-semibold text-primary">
                RootZ Dental Clinic = Safe Smiles + Global Standards in Patient Care
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Experience the difference today.</h2>
          <a href={`tel:${CLINIC_PHONE_RAW}`}>
            <Button size="lg" className="rounded-full h-14 px-8 text-base gap-2">
              <Phone className="w-5 h-5" />
              Call to Book
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
