import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917895849990?text=Hi%2C%20I%20am%20interested%20in%20property%20in%20Bajna.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 float-animation group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
      <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us!
      </span>
    </a>
  );
}
