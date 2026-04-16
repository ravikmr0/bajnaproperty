import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/landing/SectionHeading';
import { pricingNotes } from '@/components/landing/data';

function PricingSection() {
  return (
    <section id="pricing" className="border-b border-white/10 bg-[#111113] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Pricing"
            title="Premium entry pricing with a clear upgrade path from opportunity to ownership."
            description="Keep the pricing message sharp and memorable so serious buyers can qualify themselves quickly and reach out with intent."
          />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-amber-300/20 bg-[linear-gradient(145deg,rgba(245,199,94,0.12),rgba(255,255,255,0.04))] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.35)]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Starting Price</p>
            <div className="mt-4 flex flex-wrap items-end gap-3">
              <span className="font-heading text-5xl text-white sm:text-6xl">Rs 49 Lakhs*</span>
              <span className="pb-2 text-sm text-stone-300">Limited inventory release</span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-stone-950/70 p-5">
                <p className="text-sm text-stone-400">Unregistered</p>
                <p className="mt-2 text-3xl font-semibold text-white">Rs 49K / sq.mtr</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-stone-950/70 p-5">
                <p className="text-sm text-stone-400">Registered</p>
                <p className="mt-2 text-3xl font-semibold text-white">Rs 70K / sq.mtr</p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {pricingNotes.map((note) => (
                <div key={note} className="flex items-center gap-3 text-sm text-stone-200">
                  <CheckCircle2 className="h-4 w-4 text-amber-300" />
                  {note}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
