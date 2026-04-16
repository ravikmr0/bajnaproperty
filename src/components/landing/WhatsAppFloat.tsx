import { MessageCircleMore } from 'lucide-react';
import { whatsappLink } from '@/components/landing/data';

function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition hover:scale-105 hover:bg-emerald-400 sm:bottom-6"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}

export default WhatsAppFloat;
