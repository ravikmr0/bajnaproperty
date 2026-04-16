import { phoneNumber, socialLinks } from '@/components/landing/data';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Bajna Property</p>
          <p className="mt-2 font-heading text-2xl text-white">Professional Township Location on Bajna Cut</p>
          <a href={`tel:${phoneNumber}`} className="mt-3 inline-block text-stone-300 transition hover:text-white">
            {phoneNumber}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-stone-400 transition hover:text-amber-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
