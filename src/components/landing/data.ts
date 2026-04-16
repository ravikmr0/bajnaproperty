import {
  BadgeCheck,
  Building2,
  CarFront,
  GraduationCap,
  CircleDollarSign,
  Compass,
  Landmark,
  MapPinned,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type DistancePoint = {
  icon: LucideIcon;
  title: string;
  value: string;
  note: string;
};

export type VisualStory = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export type TourHotspot = {
  id: string;
  label: string;
  x: number;
  y: number;
  targetPanX: number;
  targetPanY?: number;
  targetZoom?: number;
  note: string;
};

export type TourScene = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  thumbnail: string;
  alt: string;
  tag: string;
  labels: string[];
  hotspots: TourHotspot[];
};

export const phoneNumber = '+91 78958 49990';
export const whatsappLink =
  'https://wa.me/917895849990?text=I%20want%20details%20for%20Bajna%20Property%20township%20location%20and%203D%20virtual%20tour';
export const brochureLink = '#lead-form';
export const virtualTourLink =
  'https://www.google.com/maps/search/?api=1&query=Bajna%2C+Mathura%2C+Uttar+Pradesh';
export const mapEmbedLink =
  'https://www.google.com/maps?q=Bajna%2C%20Mathura%2C%20Uttar%20Pradesh&z=13&output=embed';
export const streetViewEmbedLink =
  'https://maps.google.com/maps?q=&layer=c&cbll=28.4297601,77.5096661&cbp=12,90,0,0,0&output=svembed';
export const heroBackdropImage =
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80';

export const highlights: Highlight[] = [
  {
    icon: MapPinned,
    title: 'Bajna Cut on Expressway',
    description:
      'A professionally positioned township location on the Bajna Cut with direct visibility into the Yamuna Expressway growth belt.',
  },
  {
    icon: CarFront,
    title: '30 Minutes to Noida International Airport',
    description:
      'A strong airport-connectivity story for buyers, end users, and investors looking at the emerging Noida International Airport region.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Township Presentation',
    description:
      'Built to communicate a cleaner, more premium township identity with infrastructure-led positioning and modern access advantages.',
  },
  {
    icon: CircleDollarSign,
    title: 'NCR-Linked Investment Narrative',
    description:
      'Connected to Greater Noida, Noida, Delhi, and Gurugram, giving the project a broader NCR relevance and stronger appreciation story.',
  },
];

export const distancePoints: DistancePoint[] = [
  {
    icon: Building2,
    title: 'Noida International Airport',
    value: '30 mins',
    note: 'Showcase Bajna as a practical airport-linked township location for residential and investment demand.',
  },
  {
    icon: Compass,
    title: 'Film City, Golf Course & Zero Point',
    value: 'Prime corridor',
    note: 'Position the site around major lifestyle and destination anchors that strengthen the township story.',
  },
  {
    icon: GraduationCap,
    title: 'Noida International University',
    value: 'Education hub',
    note: 'Add educational relevance to the location pitch for families, rental demand, and long-term occupancy.',
  },
  {
    icon: Route,
    title: 'Eastern Peripheral Expressway',
    value: 'Regional link',
    note: 'Support the broader connectivity message toward Noida, Delhi, and Gurugram through the expressway network.',
  },
  {
    icon: Landmark,
    title: 'Greater Noida, Noida, Delhi & Gurugram',
    value: 'NCR reach',
    note: 'Present Bajna as a connected township destination within the wider NCR movement and development map.',
  },
];

export const trustBadges = [
  'Premium Bajna township identity',
  'Expressway and airport connectivity',
  'Professional investment presentation',
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

export const formDefaults = {
  name: '',
  phone: '',
  email: '',
};

export const leadHighlights = [
  'Personalized site visit assistance',
  'Detailed brochure and price sheet',
  'Priority callback from sales advisor',
];

export const tourVisuals: VisualStory[] = [
  {
    icon: Plane,
    title: 'Noida International Airport',
    subtitle: 'Approx. 30 minutes from the township location',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    alt: 'Airport access visual representing Noida International Airport connectivity',
  },
  {
    icon: Route,
    title: 'Bajna Cut on Expressway',
    subtitle: 'Fast movement toward Greater Noida and Noida',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    alt: 'Expressway view representing Bajna Cut on Yamuna Expressway',
  },
  {
    icon: Sparkles,
    title: 'Delhi NCR Reach',
    subtitle: 'Connected story for Delhi and Gurugram buyers',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern skyline representing NCR connectivity and urban growth',
  },
];

export const virtualTourScenes: TourScene[] = [
  {
    id: 'township-aerial',
    title: 'Bajna Township Arrival',
    subtitle: 'Premium plotted development with clear internal layout and green buffers',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    alt: 'Aerial landscape representing Bajna Township and plotted development',
    tag: 'Township View',
    labels: ['Bajna Township', 'Noida Expressway', 'Toll Plaza'],
    hotspots: [
      {
        id: 'gate',
        label: 'Township Gate',
        x: 22,
        y: 58,
        targetPanX: 24,
        targetPanY: 52,
        targetZoom: 1.18,
        note: 'Premium entry sequence with branded gate, security lane, and landscaped arrival.',
      },
      {
        id: 'plots',
        label: 'Bajna Township',
        x: 44,
        y: 55,
        targetPanX: 43,
        targetPanY: 50,
        targetZoom: 1.08,
        note: 'Plot demarcations, 30-40 ft roads, street lights, and a clean investment-ready layout.',
      },
      {
        id: 'parks',
        label: 'Green Spine',
        x: 64,
        y: 48,
        targetPanX: 61,
        targetPanY: 46,
        targetZoom: 1.1,
        note: 'Parks, dividers, and green buffers that lift the premium township feel.',
      },
    ],
  },
  {
    id: 'expressway-corridor',
    title: 'Noida to Yamuna Expressway Link',
    subtitle: 'Fast-moving corridor with directional clarity toward Agra and airport growth',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    alt: 'Wide expressway landscape representing Noida Expressway and Yamuna Expressway connectivity',
    tag: 'Expressway Link',
    labels: ['Noida Expressway', 'Yamuna Expressway (Agra)', 'Toll Plaza'],
    hotspots: [
      {
        id: 'expressway',
        label: 'Noida Expressway',
        x: 36,
        y: 49,
        targetPanX: 35,
        targetPanY: 48,
        targetZoom: 1.12,
        note: 'Multi-lane movement corridor with clean dividers, smooth traffic, and green buffers.',
      },
      {
        id: 'yamuna',
        label: 'Yamuna Expressway (Agra)',
        x: 57,
        y: 44,
        targetPanX: 58,
        targetPanY: 42,
        targetZoom: 1.16,
        note: 'Directional merge toward Yamuna Expressway and onward movement to Agra.',
      },
      {
        id: 'toll',
        label: 'Toll Plaza',
        x: 72,
        y: 54,
        targetPanX: 71,
        targetPanY: 50,
        targetZoom: 1.2,
        note: 'Multiple toll booths with organized flow and realistic road infrastructure.',
      },
    ],
  },
  {
    id: 'airport-horizon',
    title: 'Airport and Growth Horizon',
    subtitle: 'Noida International Airport visibility backed by long-term corridor expansion',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2200&q=80',
    thumbnail:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80',
    alt: 'Aerial view representing airport connectivity and skyline growth near Bajna',
    tag: 'Airport View',
    labels: ['Noida International Airport', 'Bajna Township', 'Noida Expressway'],
    hotspots: [
      {
        id: 'airport',
        label: 'Noida International Airport',
        x: 70,
        y: 40,
        targetPanX: 69,
        targetPanY: 38,
        targetZoom: 1.18,
        note: 'Runway, terminal, and airport-driven momentum shaping the location story.',
      },
      {
        id: 'skyline',
        label: 'Growth Corridor',
        x: 50,
        y: 50,
        targetPanX: 50,
        targetPanY: 46,
        targetZoom: 1.08,
        note: 'Developing infrastructure and skyline depth reinforcing future growth potential.',
      },
      {
        id: 'township-link',
        label: 'Bajna Township',
        x: 28,
        y: 58,
        targetPanX: 29,
        targetPanY: 54,
        targetZoom: 1.12,
        note: 'A strong location chain from township to expressway to airport.',
      },
    ],
  },
];

export const locationVisuals: VisualStory[] = [
  {
    icon: MapPinned,
    title: 'Film City and Zero Point',
    subtitle: 'Strong destination-led township positioning',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    alt: 'Urban development image representing Film City and Zero Point access',
  },
  {
    icon: GraduationCap,
    title: 'Noida International University',
    subtitle: 'Education-led relevance for families and rentals',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    alt: 'University campus style image representing Noida International University',
  },
  {
    icon: Landmark,
    title: 'Golf Course Influence',
    subtitle: 'Lifestyle-facing destination narrative',
    image:
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Golf course landscape representing premium lifestyle connectivity',
  },
  {
    icon: Building2,
    title: 'Greater Noida to Gurugram',
    subtitle: 'A broader NCR movement map for serious buyers',
    image:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    alt: 'City growth corridor image representing Greater Noida, Noida, Delhi, and Gurugram reach',
  },
];

export const pricingNotes = [
  'Unregistered: Rs 49K / sq.mtr',
  'Registered: Rs 70K / sq.mtr',
  'Starting at Rs 49 Lakhs*',
];

export const credibilityPoints = [
  'Airport-led township potential',
  'Strong expressway-led location pitch',
  'Lifestyle and education landmarks nearby',
  'Trusted guidance for serious buyers',
];

export const heroStats = [
  { value: '49 Lakhs*', label: 'Starting From' },
  { value: '30 mins', label: 'Airport Reach' },
  { value: 'High Growth', label: 'NCR Corridor' },
];

export const leadBadgeIcon = BadgeCheck;
