import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // PLACEHOLDER: WhatsApp Details
  const phoneNumber = "+1234567890"; // Format: country code without + and without spaces
  const clinicName = "Smile Dental Care";
  const message = encodeURIComponent(`Hi, I'd like to book an appointment at ${clinicName}. Please let me know available timings.`);
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
      data-testid="whatsapp-floating-btn"
    >
      <MessageCircle className="w-7 h-7" />
      {/* Note: The MessageCircle icon isn't perfectly WhatsApp, but it's universally understood. Alternatively, we could use an SVG, but lucide works fine. */}
      
      {/* Ping animation effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 -z-10"></span>
    </a>
  );
}
