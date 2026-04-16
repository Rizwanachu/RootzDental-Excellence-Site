import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import NotFound from "./not-found";
import { CLINIC_NAME, CLINIC_PHONE_RAW, SITE_URL } from "@/config";

const servicesData = {
  "root-canal-treatment": {
    title: "Root Canal Treatment",
    desc: "A painless procedure to save your infected or severely damaged tooth rather than extracting it.",
    longDesc: "When the pulp inside your tooth becomes infected due to deep decay or injury, a root canal is necessary to save the tooth. Our clinic utilizes modern rotary endodontics and local anesthesia to ensure the procedure is as comfortable as a routine filling. We clean out the infection, fill the space, and seal it to protect against future damage.",
    benefits: [
      "Relieves severe toothache and sensitivity",
      "Saves your natural tooth structure",
      "Prevents the spread of infection to other teeth",
      "More cost-effective than extraction and implant replacement"
    ],
    duration: "60-90 minutes",
    recovery: "1-2 days of mild sensitivity",
    schemaType: "MedicalProcedure"
  },
  "teeth-cleaning": {
    title: "Teeth Cleaning & Scaling",
    desc: "Professional plaque and tartar removal for healthy gums and fresh breath.",
    longDesc: "Even with diligent brushing and flossing, plaque can harden into tartar, which only professional tools can remove. Our ultrasonic scaling comfortably breaks down calculus buildup above and below the gumline. Regular cleaning is the cornerstone of preventive dentistry, stopping cavities and gum disease before they start.",
    benefits: [
      "Prevents cavities and tooth decay",
      "Stops gingivitis and periodontal disease",
      "Eliminates bad breath (halitosis)",
      "Removes surface stains for a brighter smile"
    ],
    duration: "30-45 minutes",
    recovery: "Immediate",
    schemaType: "MedicalProcedure"
  },
  "tooth-filling": {
    title: "Tooth Filling",
    desc: "Durable, tooth-colored composite restorations for decayed or broken teeth.",
    longDesc: "We exclusively use high-quality composite resin fillings that match the natural color of your teeth. Unlike old silver amalgam fillings, composites bond directly to the tooth structure, requiring less removal of healthy enamel and providing a seamless, invisible repair for cavities or minor chips.",
    benefits: [
      "Invisible, natural-looking appearance",
      "Bonds tightly to the tooth for added strength",
      "Contains no mercury",
      "Quick, single-visit procedure"
    ],
    duration: "30-60 minutes",
    recovery: "Immediate (once numbness wears off)",
    schemaType: "MedicalProcedure"
  },
  "teeth-whitening": {
    title: "Teeth Whitening",
    desc: "Safe and highly effective professional bleaching for a brilliantly white smile.",
    longDesc: "Coffee, tea, wine, and aging can all take a toll on the brightness of your teeth. Our in-office whitening treatments use professional-grade bleaching agents that are safely activated to lift deep stains without damaging your enamel. Achieve a smile that is several shades lighter in just one session.",
    benefits: [
      "Significantly whiter teeth in one visit",
      "Safe procedure monitored by professionals",
      "Formulated to minimize tooth sensitivity",
      "Boosts self-confidence immediately"
    ],
    duration: "60 minutes",
    recovery: "Immediate (mild sensitivity for 24h possible)",
    schemaType: "MedicalProcedure"
  },
  "dental-implants": {
    title: "Dental Implants",
    desc: "Permanent, incredibly natural-looking replacements for missing teeth — at a transparent, affordable cost.",
    longDesc: "Dental implants are the gold standard for replacing missing teeth. Wondering about dental implants cost? At our clinic, we offer affordable dental implants with transparent pricing and no hidden fees. A biocompatible titanium post is surgically placed in the jawbone, acting as an artificial root. Once healed, a custom-made crown is attached. Implants look, feel, and function exactly like natural teeth and prevent the bone loss associated with missing teeth.",
    benefits: [
      "Permanent, lifelong solution with proper care",
      "Restores full chewing power",
      "Prevents jawbone deterioration",
      "Does not require altering adjacent healthy teeth"
    ],
    duration: "Varies (multi-step process)",
    recovery: "3-5 days per surgical step",
    schemaType: "MedicalProcedure"
  },
  "braces-aligners": {
    title: "Braces & Aligners",
    desc: "Modern orthodontic solutions to straighten misaligned teeth and correct bite issues.",
    longDesc: "A straight smile is a healthy smile. Misaligned teeth are harder to clean and can cause uneven wear. We offer comprehensive orthodontic care, including traditional braces, more discreet ceramic braces, and nearly invisible clear aligner systems. We will evaluate your specific needs and lifestyle to recommend the best option.",
    benefits: [
      "Improves overall oral hygiene capabilities",
      "Corrects bite alignment issues (overbite, underbite)",
      "Enhances facial aesthetics and symmetry",
      "Discreet options available for adults"
    ],
    duration: "Consultation: 45 mins",
    recovery: "Mild soreness after adjustments",
    schemaType: "MedicalProcedure"
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id as keyof typeof servicesData] : null;

  if (!service) {
    return <NotFound />;
  }

  const clinicName = CLINIC_NAME;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": service.schemaType,
      "name": service.title,
      "description": service.desc,
      "provider": {
        "@type": "DentalClinic",
        "name": clinicName
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${SITE_URL}/services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": `${SITE_URL}/services/${id}`
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${service.title} | ${clinicName}`}
        description={`${service.title} at ${clinicName}. ${service.desc} Book your appointment today for affordable and professional dental care.`}
        canonicalUrl={`${SITE_URL}/services/${id}`}
        schema={schema}
      />

      <section className="pt-32 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all services
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Treatment Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.longDesc}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border border-border sticky top-28 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-6">Treatment Details</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Duration</p>
                        <p className="text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Recovery</p>
                        <p className="text-muted-foreground">{service.recovery}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 text-center">Ready to improve your oral health?</p>
                    <a href={`tel:${CLINIC_PHONE_RAW}`} className="block">
                      <Button className="w-full h-12 rounded-full gap-2">
                        <Phone className="w-4 h-4" />
                        Call to Book
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
