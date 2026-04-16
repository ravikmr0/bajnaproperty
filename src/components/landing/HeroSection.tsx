import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';
import {
  brochureLink,
  heroBackdropImage,
} from '@/components/landing/data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 bg-stone-950"
    >
      <div className="absolute inset-0">
        <img
          src={heroBackdropImage}
          alt="Expressway-driven township corridor visual for Bajna Property"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_18%),linear-gradient(90deg,rgba(10,10,12,0.88),rgba(10,10,12,0.55)_38%,rgba(10,10,12,0.2)_60%,rgba(10,10,12,0.55)_85%,rgba(10,10,12,0.85)),linear-gradient(180deg,rgba(10,10,12,0.14),rgba(10,10,12,0.55))]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            MVDA Approved • Legally Verified
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-5xl font-heading text-5xl leading-[0.95] text-white sm:text-6xl lg:text-[5.5rem]"
          >
            Own Premium Land at{' '}
            <span className="text-[#ff6b57]">Bajna Property</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="mt-6 max-w-2xl text-xl leading-10 text-stone-100 sm:text-2xl"
          >
            Professionally planned plots with smooth Yamuna Expressway connectivity,
            airport-led growth, and a cleaner township lifestyle story for serious buyers.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-4 max-w-2xl text-base leading-8 text-stone-200/85 sm:text-lg"
          >
            Bajna Cut on Yamuna Expressway with strong movement toward Noida
            International Airport, Greater Noida, Noida, Delhi, and Gurugram.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.85 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e42017] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(228,32,23,0.22)] transition hover:bg-[#f02b22]"
            >
              <PhoneCall className="h-5 w-5" />
              Book Site Visit
            </a>
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Explore Projects
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
