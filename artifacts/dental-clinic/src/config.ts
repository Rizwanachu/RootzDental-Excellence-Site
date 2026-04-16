export const CLINIC_NAME = "[Clinic Name]";
export const DOCTOR_NAME = "[Doctor Name]";
export const LOCATION = "[Location]";
export const CLINIC_PHONE = "+1 (000) 000-0000";
export const CLINIC_PHONE_RAW = "+10000000000";
export const CLINIC_EMAIL = "[clinic@email.com]";
export const CLINIC_ADDRESS = "[Clinic Address]";
export const CLINIC_HOURS = "[Mon-Sat: 9:00 AM - 7:00 PM]";
export const WHATSAPP_NUMBER = "[WhatsAppNumber]";
export const CLINIC_TAGLINE = "Comfortable, Modern & Patient-Focused Dental Care";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hi, I'd like to book an appointment at ${CLINIC_NAME}. Please let me know available timings.`
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
