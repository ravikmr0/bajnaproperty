import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPinned,
  Minus,
  Move3d,
  Pause,
  Play,
  PlayCircle,
  Plus,
  ScanSearch,
  X,
} from 'lucide-react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import SectionHeading from '@/components/landing/SectionHeading';
import { virtualTourScenes } from '@/components/landing/data';

const MIN_ZOOM = 1;
const MAX_ZOOM = 1.8;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function VirtualTourSection() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState(virtualTourScenes[0].hotspots[0]?.id ?? '');
  const [pan, setPan] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(1.08);
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const dragRef = useRef<{ x: number; y: number } | null>(null);

  const activeScene = virtualTourScenes[activeSceneIndex];
  const activeHotspot =
    activeScene.hotspots.find((hotspot) => hotspot.id === activeHotspotId) ?? activeScene.hotspots[0];
  const activeShowcaseScene = virtualTourScenes[showcaseIndex];

  const sceneTransform = useMemo(() => {
    const offsetX = (pan.x - 50) * 1.55;
    const offsetY = (pan.y - 50) * 0.65;

    return {
      transform: `translate(${offsetX}%, ${offsetY}%) scale(${zoom})`,
    };
  }, [pan.x, pan.y, zoom]);

  useEffect(() => {
    if (!showcaseOpen || !autoPlay) {
      return;
    }

    const timer = window.setInterval(() => {
      setShowcaseIndex((current) => (current + 1) % virtualTourScenes.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [autoPlay, showcaseOpen]);

  const focusHotspot = (sceneIndex: number, hotspotId: string) => {
    const scene = virtualTourScenes[sceneIndex];
    const hotspot = scene.hotspots.find((item) => item.id === hotspotId);

    if (!hotspot) {
      return;
    }

    setActiveSceneIndex(sceneIndex);
    setActiveHotspotId(hotspotId);
    setPan({
      x: hotspot.targetPanX,
      y: hotspot.targetPanY ?? 50,
    });
    setZoom(clamp(hotspot.targetZoom ?? 1.1, MIN_ZOOM, MAX_ZOOM));
  };

  const setScene = (sceneIndex: number) => {
    const scene = virtualTourScenes[sceneIndex];
    setActiveSceneIndex(sceneIndex);
    setActiveHotspotId(scene.hotspots[0]?.id ?? '');
    setPan({ x: 50, y: 50 });
    setZoom(1.08);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) {
      return;
    }

    const deltaX = event.clientX - dragRef.current.x;
    const deltaY = event.clientY - dragRef.current.y;

    dragRef.current = { x: event.clientX, y: event.clientY };

    setPan((current) => ({
      x: clamp(current.x - deltaX * 0.08, 15, 85),
      y: clamp(current.y - deltaY * 0.05, 28, 72),
    }));
  };

  const stopDragging = (event?: ReactPointerEvent<HTMLDivElement>) => {
    if (event && dragRef.current) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragRef.current = null;
  };

  const adjustZoom = (delta: number) => {
    setZoom((current) => clamp(Number((current + delta).toFixed(2)), MIN_ZOOM, MAX_ZOOM));
  };

  const cycleScene = (direction: -1 | 1) => {
    const nextIndex = (activeSceneIndex + direction + virtualTourScenes.length) % virtualTourScenes.length;
    setScene(nextIndex);
  };

  return (
    <section id="virtual-tour" className="border-b border-white/10 bg-stone-950 py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="360° Virtual Tour"
          title="Bajna Township with expressway and Noida Airport access."
          description="This viewer is built from curated visual scenes instead of Google embeds, giving you a cleaner premium real-estate presentation with drag navigation, hotspots, thumbnails, and a cinematic full-view mode."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#08090b] shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
        >
          <div className="relative">
            <div
              className="group relative aspect-[16/9] touch-none overflow-hidden bg-stone-950"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={stopDragging}
              onPointerLeave={stopDragging}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={sceneTransform}
              >
                <img
                  src={activeScene.image}
                  alt={activeScene.alt}
                  className="h-full w-full object-cover object-center"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_32%),linear-gradient(180deg,rgba(8,9,11,0.18),rgba(8,9,11,0.5)_60%,rgba(8,9,11,0.78))]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,11,0.82),transparent_28%,transparent_72%,rgba(8,9,11,0.82))]" />

                <div className="absolute inset-0 opacity-80">
                  <div className="absolute left-[20%] top-[57%] h-px w-[22%] bg-[linear-gradient(90deg,rgba(245,199,94,0.0),rgba(245,199,94,0.8))]" />
                  <div className="absolute left-[42%] top-[53%] h-px w-[18%] bg-[linear-gradient(90deg,rgba(245,199,94,0.8),rgba(245,199,94,0.0))]" />
                  <div className="absolute left-[57%] top-[46%] h-px w-[16%] bg-[linear-gradient(90deg,rgba(245,199,94,0.0),rgba(245,199,94,0.8))]" />
                </div>

                {activeScene.hotspots.map((hotspot) => {
                  const isActive = hotspot.id === activeHotspot?.id;

                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() => focusHotspot(activeSceneIndex, hotspot.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    >
                      <span className="relative flex items-center">
                        <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-amber-300/25" />
                        <span
                          className={`relative flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition ${
                            isActive
                              ? 'border-amber-200 bg-amber-300 text-stone-950'
                              : 'border-white/25 bg-stone-950/85 text-white'
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </button>
                  );
                })}

                <div className="absolute left-[16%] top-[61%] rounded-full border border-amber-300/30 bg-stone-950/78 px-4 py-2 text-xs uppercase tracking-[0.24em] text-amber-100 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur md:text-sm">
                  Bajna Township
                </div>
                <div className="absolute left-[36%] top-[48%] rounded-full border border-white/15 bg-stone-950/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur md:text-sm">
                  Noida Expressway
                </div>
                <div className="absolute left-[54%] top-[42%] rounded-full border border-white/15 bg-stone-950/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur md:text-sm">
                  Yamuna Expressway (Agra)
                </div>
                <div className="absolute left-[67%] top-[53%] rounded-full border border-white/15 bg-stone-950/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur md:text-sm">
                  Toll Plaza
                </div>
                <div className="absolute left-[74%] top-[29%] rounded-full border border-white/15 bg-stone-950/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur md:text-sm">
                  Noida International Airport
                </div>
              </div>

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-stone-950/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-100 backdrop-blur">
                  <Move3d className="h-4 w-4" />
                  Image 360 View
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-stone-950/70 p-1.5 backdrop-blur">
                  <button
                    type="button"
                    onClick={() => adjustZoom(-0.1)}
                    className="rounded-full p-2 text-stone-200 transition hover:bg-white/10 hover:text-white"
                    aria-label="Zoom out"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-16 text-center text-xs uppercase tracking-[0.25em] text-stone-300">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustZoom(0.1)}
                    className="rounded-full p-2 text-stone-200 transition hover:bg-white/10 hover:text-white"
                    aria-label="Zoom in"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="absolute right-5 top-5 z-20 hidden max-w-sm flex-col gap-3 lg:flex">
                <div className="rounded-[1.4rem] border border-amber-300/25 bg-stone-950/78 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-amber-200">Primary Highlight</p>
                  <h4 className="mt-2 font-heading text-2xl text-white">Bajna Township</h4>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    Highlighted as the core plotted township location, connected visually with
                    Noida Airport and the Bajna expressway corridor.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-stone-950/72 p-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-amber-200">3D Focus</p>
                    <p className="mt-2 text-sm font-semibold text-white">Bajna Full View</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-stone-950/72 p-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-amber-200">Airport Link</p>
                    <p className="mt-2 text-sm font-semibold text-white">Noida Airport</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => cycleScene(-1)}
                  className="rounded-full border border-white/10 bg-stone-950/75 p-3 text-stone-200 transition hover:border-amber-300/35 hover:text-white"
                  aria-label="Previous scene"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => cycleScene(1)}
                  className="rounded-full border border-white/10 bg-stone-950/75 p-3 text-stone-200 transition hover:border-amber-300/35 hover:text-white"
                  aria-label="Next scene"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(8,9,11,0.92))] p-5 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="pointer-events-auto max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Immersive Preview</p>
                    <h3 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
                      Explore Bajna Township Location in 360°
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
                      Drag to rotate, zoom into the corridor, and jump between township,
                      expressway, toll plaza, and airport viewpoints with image-based scenes.
                    </p>
                  </div>

                  <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setShowcaseOpen(true);
                        setShowcaseIndex(0);
                        setAutoPlay(true);
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
                    >
                      <Expand className="h-4 w-4" />
                      Explore Full View
                    </button>
                    <a
                      href="#lead-form"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/15"
                    >
                      <PlayCircle className="h-4 w-4" />
                      Schedule Site Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 border-t border-white/10 bg-black/35 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto]">
              <div className="flex min-w-0 gap-3 overflow-x-auto pb-2">
                {virtualTourScenes.map((scene, index) => (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => setScene(index)}
                    className={`group relative min-w-[220px] overflow-hidden rounded-[1.35rem] border text-left transition ${
                      index === activeSceneIndex
                        ? 'border-amber-300/40 bg-white/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <img
                      src={scene.thumbnail}
                      alt={scene.alt}
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,9,11,0.95))]" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-amber-200">{scene.tag}</p>
                      <h4 className="mt-2 font-heading text-lg text-white">{scene.title}</h4>
                      <p className="mt-1 text-xs leading-5 text-stone-300">{scene.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 sm:min-w-[310px]">
                <div className="inline-flex items-center gap-2 text-amber-200">
                  <MapPinned className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.24em]">Active Hotspot</span>
                </div>
                <h4 className="mt-3 font-heading text-2xl text-white">{activeHotspot.label}</h4>
                <p className="mt-2 text-sm leading-7 text-stone-300">{activeHotspot.note}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeScene.labels.map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-stone-200"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-stone-400">
                  <ScanSearch className="h-4 w-4 text-amber-200" />
                  Drag, zoom, and tap hotspots to change viewpoint
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {showcaseOpen && (
        <div className="fixed inset-0 z-[80] bg-stone-950/95 backdrop-blur-md">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-amber-200">Auto Showcase</p>
                <h3 className="mt-2 font-heading text-2xl text-white">
                  Bajna Township + Noida Airport Full View 3D-Style Tour
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setAutoPlay((current) => !current)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {autoPlay ? 'Pause Tour' : 'Play Tour'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowcaseOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10"
                  aria-label="Close showcase"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <motion.div
                key={activeShowcaseScene.id}
                initial={{ opacity: 0.35, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0"
              >
                <img
                  src={activeShowcaseScene.image}
                  alt={activeShowcaseScene.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_25%),linear-gradient(180deg,rgba(7,7,9,0.2),rgba(7,7,9,0.68)_60%,rgba(7,7,9,0.9))]" />
              </motion.div>

              <div className="absolute inset-x-0 top-0 grid gap-3 p-4 sm:grid-cols-3 sm:p-6">
                {virtualTourScenes.map((scene, index) => (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => setShowcaseIndex(index)}
                    className={`rounded-2xl border px-4 py-3 text-left backdrop-blur transition ${
                      index === showcaseIndex
                        ? 'border-amber-300/40 bg-stone-950/75'
                        : 'border-white/10 bg-stone-950/55 hover:bg-stone-950/70'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-amber-200">{scene.tag}</p>
                    <p className="mt-2 font-semibold text-white">{scene.title}</p>
                  </button>
                ))}
              </div>

              <div className="absolute left-6 top-[26%] hidden rounded-full border border-amber-300/30 bg-stone-950/78 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-amber-100 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur md:inline-flex">
                Bajna Township Highlight
              </div>
              <div className="absolute right-[8%] top-[22%] hidden rounded-full border border-white/15 bg-stone-950/76 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur md:inline-flex">
                Noida Airport View
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.36em] text-amber-200">Cinematic Auto Tour</p>
                  <h3 className="mt-3 font-heading text-4xl text-white sm:text-5xl">
                    {activeShowcaseScene.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-stone-200">
                    {activeShowcaseScene.subtitle}. This full-view mode auto-plays like a
                    premium property video to showcase Bajna Township, expressway reach,
                    and Noida Airport visibility in one flow.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activeShowcaseScene.labels.map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/15 bg-stone-950/65 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={`${activeShowcaseScene.id}-${autoPlay ? 'play' : 'pause'}`}
                    initial={{ width: 0 }}
                    animate={{ width: autoPlay ? '100%' : '35%' }}
                    transition={{ duration: autoPlay ? 3.1 : 0.2, ease: 'linear' }}
                    className="h-full rounded-full bg-amber-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VirtualTourSection;
