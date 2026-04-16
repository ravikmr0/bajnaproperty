import { Menu, PhoneCall } from 'lucide-react';
import { phoneNumber, whatsappLink } from '@/components/landing/data';

const navItems = [
  { label: 'Virtual Tour', href: '#virtual-tour' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Location', href: '#location' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Enquire', href: '#lead-form' },
];

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-sm font-semibold tracking-[0.3em] text-amber-200">
            BP
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-400">Township Location</p>
            <p className="font-heading text-lg text-white">Bajna Property</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-300 transition hover:text-amber-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${phoneNumber}`}
            className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-stone-200 transition hover:border-amber-300/30 hover:text-white md:flex"
          >
            <PhoneCall className="h-4 w-4 text-amber-300" />
            {phoneNumber}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-amber-200 sm:inline-flex"
          >
            WhatsApp Now
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-stone-200 lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
