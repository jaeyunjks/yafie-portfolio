import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  ContactAvailability,
  ContactCTA,
  ContactFAQ,
  ContactForm,
  ContactHero,
  ContactMethods,
} from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactAvailability />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
}
