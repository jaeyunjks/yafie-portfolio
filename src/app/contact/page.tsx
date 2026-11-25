import { pageMetadata } from "@/data/seo";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
  ContactAvailability,
  ContactCTA,
  ContactForm,
  ContactHero,
  ContactMethods,
} from "@/components/sections/contact";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <div className="relative isolate">
      <AnimatedBackground />
      <ContactHero />
      <ContactAvailability />
      <ContactMethods />
      <ContactForm />
      <div id="contact-next" className="scroll-mt-32">
        <ContactCTA />
      </div>
    </div>
  );
}
