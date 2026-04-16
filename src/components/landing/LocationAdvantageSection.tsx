import { motion } from 'framer-motion';
import SectionHeading from '@/components/landing/SectionHeading';
import { distancePoints, locationVisuals, mapEmbedLink } from '@/components/landing/data';

function LocationAdvantageSection() {
  const FeaturedIcon = locationVisuals[0].icon;

  return (
    <section id="location" className="border-b border-white/10 bg-stone-950 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Location Advantage"
            title="A professional township location connected to airport growth, expressways, and key NCR destinations."
            description="Use the location story to show Bajna Cut as more than a plot address: it is a connected township opportunity linked with education, lifestyle, infrastructure, and regional travel."
          />

          <div className="mt-10 grid gap-4">
            {distancePoints.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-amber-300/10 p-3 text-amber-200">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-2xl text-white">{point.title}</h3>
                      <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
                        {point.value}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-stone-300">{point.note}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3"
        >
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src={locationVisuals[0].image}
                alt={locationVisuals[0].alt}
                className="h-[280px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.1),rgba(8,8,10,0.85))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-100">
                  <FeaturedIcon className="h-4 w-4" />
                  Visual Positioning
                </div>
                <h3 className="mt-4 font-heading text-3xl text-white">{locationVisuals[0].title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-stone-200">
                  {locationVisuals[0].subtitle}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {locationVisuals.slice(1).map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-stone-950/70"
                >
                  <img src={item.image} alt={item.alt} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <div className="inline-flex items-center gap-2 text-amber-200">
                      <item.icon className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.22em]">Location Story</span>
                    </div>
                    <h3 className="mt-3 font-heading text-xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <iframe
                title="Bajna Cut expressway location map"
                src={mapEmbedLink}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[240px] w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationAdvantageSection;
