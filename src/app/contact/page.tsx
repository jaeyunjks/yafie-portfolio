import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  ContactAvailability,
  ContactCTA,
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
      <ContactCTA />
    </div>
  );
}
