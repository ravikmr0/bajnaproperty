import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/landing/SectionHeading';
import {
  credibilityPoints,
  formDefaults,
  leadBadgeIcon as LeadBadgeIcon,
  leadHighlights,
  phoneNumber,
  trustBadges,
  whatsappLink,
} from '@/components/landing/data';

function LeadCaptureSection() {
  const [formState, setFormState] = useState(formDefaults);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="bg-stone-950 py-20 pb-28 sm:py-24 sm:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Lead Capture"
            title="Turn intent into qualified enquiries with a concise, high-trust contact experience."
            description="The form is intentionally short, the credibility cues are immediate, and the mobile CTA stays visible so conversion momentum stays high."
          />

          <div className="mt-8 grid gap-4">
            {leadHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-200"
              >
                <LeadBadgeIcon className="h-4 w-4 text-amber-300" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(245,199,94,0.1))] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-300/10 p-3 text-amber-200">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Trust Signals</p>
                <p className="text-sm text-stone-300">Location-driven demand with infrastructure-backed upside.</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_100px_rgba(0,0,0,0.35)] sm:p-8"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                value={formState.name}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, name: event.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-stone-950/80 px-4 py-3.5 text-white outline-none transition placeholder:text-stone-500 focus:border-amber-300/50"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-stone-200">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Enter your phone number"
                value={formState.phone}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, phone: event.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-stone-950/80 px-4 py-3.5 text-white outline-none transition placeholder:text-stone-500 focus:border-amber-300/50"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, email: event.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-stone-950/80 px-4 py-3.5 text-white outline-none transition placeholder:text-stone-500 focus:border-amber-300/50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
            >
              Request Callback
            </button>

            {submitted && (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                Thanks! Your enquiry is captured in the UI. Connect this form to your CRM or API endpoint to receive live leads.
              </div>
            )}
          </form>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {credibilityPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-stone-950/70 px-4 py-3 text-sm text-stone-200"
              >
                <Check className="h-4 w-4 text-amber-300" />
                {point}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-stone-950/60 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-stone-400">Speak with our sales team</p>
              <a href={`tel:${phoneNumber}`} className="mt-1 block text-lg font-semibold text-white">
                {phoneNumber}
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/15"
            >
              WhatsApp Sales
            </a>
          </div>
        </motion.div>
      </div>

      <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
        <a
          href="#lead-form"
          className="flex items-center justify-center rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-stone-950 shadow-[0_20px_50px_rgba(245,199,94,0.28)]"
        >
          Book Site Visit
        </a>
      </div>
    </section>
  );
}

export default LeadCaptureSection;
