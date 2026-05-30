import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactPage() {
  return (
    <div>
      <section className="section-wrap">
        <SectionHeader
          title="Contact"
          subtitle="Open to frontend engineering, product-focused, and collaborative opportunities."
        />
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        <Card>
          <h3 className="font-semibold text-slate-900">Availability</h3>
          <p className="mt-2 text-sm text-slate-600">Open to full-time roles and selective freelance collaborations.</p>
        </Card>
        <Card><p className="flex items-center gap-2 text-sm text-slate-700"><Mail size={16} /> hello@yafie.dev</p></Card>
        <Card><p className="flex items-center gap-2 text-sm text-slate-700"><Phone size={16} /> +61 400 000 000</p></Card>
        <Card className="md:col-span-3"><p className="flex items-center gap-2 text-sm text-slate-700"><MapPin size={16} /> Sydney, Australia • Remote-friendly</p></Card>
      </section>
      <section className="mt-10">
        <Card className="text-center">
          <h3 className="text-xl font-semibold text-slate-900">Let&apos;s build something meaningful.</h3>
          <p className="mt-3 text-slate-600">Share your project goals and I&apos;ll respond with a thoughtful plan.</p>
          <div className="mt-5"><Button>Start a Conversation</Button></div>
        </Card>
      </section>
    </div>
  );
}
