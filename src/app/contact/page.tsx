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
    <div className="relative isolate">
      <AnimatedBackground />
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactAvailability />
      <div id="contact-next" className="scroll-mt-32">
        <ContactCTA />
      </div>
    </div>
  );
}
