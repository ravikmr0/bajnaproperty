import { motion } from 'framer-motion';
import SectionHeading from '@/components/landing/SectionHeading';
import { highlights } from '@/components/landing/data';

function ProjectHighlightsSection() {
  return (
    <section id="highlights" className="border-b border-white/10 bg-[#111113] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project Highlights"
          title="A sharper location story built around township quality, landmark access, and NCR connectivity."
          description="The highlights now position Bajna as a professional expressway township with airport access and strong destination relevance."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-200">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-2xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectHighlightsSection;
