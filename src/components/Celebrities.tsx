"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const celebrities = [
  {
    id: "bpraak",
    name: "B Praak",
    tagline: "Bollywood & Punjabi Singer",
    description:
      "Capturing the raw emotion of B Praak live at AIIMS Rishikesh — fire, smoke, and the voice that defined a generation.",
    knownFor: "Filhall · Teri Mitti · Mann Bharrya",
    heroImage: "/celebrities/bpraak/bpraak-01.jpg",
    gallery: [
      "/celebrities/bpraak/bpraak-02.jpg",
      "/celebrities/bpraak/bpraak-03.jpg",
      "/celebrities/bpraak/bpraak-04.jpg",
      "/celebrities/bpraak/bpraak-05.jpg",
      "/celebrities/bpraak/bpraak-06.jpg",
    ],
  },
  {
    id: "jubin",
    name: "Jubin Nautiyal",
    tagline: "Bollywood Vocalist",
    description:
      "Jubin Nautiyal — an intimate concert where his voice filled the night and every frame felt like a painting.",
    knownFor: "Tum Hi Aana · Raataan Lambiyan · Lut Gaye",
    heroImage: "/celebrities/jubin/jubin-01.jpg",
    gallery: [
      "/celebrities/jubin/jubin-02.jpg",
      "/celebrities/jubin/jubin-03.jpg",
      "/celebrities/jubin/jubin-04.jpg",
      "/celebrities/jubin/jubin-05.jpg",
      "/celebrities/jubin/jubin-06.jpg",
      "/celebrities/jubin/jubin-07.jpg",
      "/celebrities/jubin/jubin-08.jpg",
    ],
  },
  {
    id: "apdhillon",
    name: "AP Dhillon",
    tagline: "Punjabi-Canadian Artist",
    description:
      "AP Dhillon — the highest streaming Punjabi artist in the world, captured across multiple events in India.",
    knownFor: "Brown Munde · Excuses · With You",
    heroImage: "/celebrities/apdhillon/apdhillon-01.jpg",
    heroPosition: "top" as const,
    gallery: [
      "/celebrities/apdhillon/apdhillon-02.jpg",
      "/celebrities/apdhillon/apdhillon-03.jpg",
      "/celebrities/apdhillon/apdhillon-04.jpg",
      "/celebrities/apdhillon/apdhillon-05.jpg",
      "/celebrities/apdhillon/apdhillon-06.jpg",
      "/celebrities/apdhillon/apdhillon-07.jpg",
      "/celebrities/apdhillon/apdhillon-08.jpg",
    ],
  },
  {
    id: "zeebee",
    name: "Zee Bee",
    tagline: "Indian Rapper & Hip-Hop Artist",
    description:
      "Zee Bee — theatrical, dark, cinematic. A performer who commands the stage like no other.",
    knownFor: "Indian Hip-Hop · Rap",
    heroImage: "/celebrities/zeebee/zeebee-01.jpg",
    gallery: [
      "/celebrities/zeebee/zeebee-02.jpg",
      "/celebrities/zeebee/zeebee-03.jpg",
      "/celebrities/zeebee/zeebee-04.jpg",
      "/celebrities/zeebee/zeebee-05.jpg",
    ],
  },
  {
    id: "artist5",
    name: "Artist Name Here",
    tagline: "Singer & Performer",
    description:
      "A powerful live performer caught mid-song under dramatic stage lighting.",
    knownFor: "Update with real songs",
    heroImage: "/celebrities/artist5/artist5-01.jpg",
    gallery: [
      "/celebrities/artist5/artist5-02.jpg",
      "/celebrities/artist5/artist5-03.jpg",
      "/celebrities/artist5/artist5-04.jpg",
    ],
  },
  // artist6 folder is empty — entry removed to avoid broken images
  {
    id: "artist7",
    name: "Artist Name Here",
    tagline: "Artist",
    description:
      "Behind the scenes — the quiet moments before the spotlight hits.",
    knownFor: "Update with real songs",
    heroImage: "/celebrities/artist7/artist7-01.jpg",
    // Only artist7-01 and artist7-02 exist on disk
    gallery: [
      "/celebrities/artist7/artist7-02.jpg",
    ],
  },
];

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: string[];
  initialIndex: number;
  artistName: string;
  onClose: () => void;
}

function Lightbox({ images, initialIndex, artistName, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(10,10,10,0.97)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-8 text-[#e8e4dc]/60 hover:text-[#c9a96e] transition-colors font-mono text-2xl z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ×
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-xs text-[#e8e4dc]/40 tracking-widest uppercase">
        {current + 1} / {images.length}
      </div>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`${artistName} ${current + 1}`}
          className="object-contain max-w-[90vw] max-h-[85vh]"
          style={{ border: "1px solid rgba(201,169,110,0.2)" }}
        />
      </motion.div>

      {/* Prev */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#e8e4dc]/50 hover:text-[#c9a96e] transition-colors font-mono text-2xl border border-white/10 hover:border-[#c9a96e]/40"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Next */}
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-[#e8e4dc]/50 hover:text-[#c9a96e] transition-colors font-mono text-2xl border border-white/10 hover:border-[#c9a96e]/40"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
      >
        ›
      </button>

      {/* Artist name footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif italic text-[#e8e4dc]/30 text-lg tracking-wide">
        {artistName}
      </div>
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Celebrities() {
  const [activeId, setActiveId] = useState(celebrities[0].id);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const active = celebrities.find((c) => c.id === activeId)!;

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  // Reset gallery scroll when artist changes
  useEffect(() => {
    if (galleryRef.current) galleryRef.current.scrollLeft = 0;
  }, [activeId]);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-28 px-0"
        style={{ background: "#0a0a0a" }}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-16"
          >
            <h2
              className="text-[#e8e4dc] font-light italic"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "0.02em",
              }}
            >
              Through the Lens of Siddhant Shukla
            </h2>
            <div
              className="mt-4 mb-5"
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(90deg, #c9a96e, transparent)",
              }}
            />
            <p
              className="text-[#e8e4dc]/40 uppercase tracking-[0.2em]"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px" }}
            >
              Creating cinematic experiences through light, motion, and emotion.
            </p>
          </motion.div>

          {/* ── Tab Row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex gap-8 overflow-x-auto pb-4 mb-12 scrollbar-hide border-b"
            style={{ borderColor: "rgba(201,169,110,0.1)" }}
          >
            {celebrities.map((celeb) => (
              <button
                key={celeb.id}
                onClick={() => setActiveId(celeb.id)}
                className="relative flex-shrink-0 pb-4 transition-all duration-300"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: activeId === celeb.id ? "#c9a96e" : "rgba(232,228,220,0.35)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {celeb.name}
                {activeId === celeb.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0"
                    style={{ height: "2px", background: "#c9a96e" }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Hero Display ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-[1400px] mx-auto px-8 md:px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-8 mb-6" style={{ minHeight: "480px" }}>

              {/* Left — Hero Image (3/5 width) */}
              <motion.div
                key={`hero-${activeId}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="col-span-1 md:col-span-3 relative overflow-hidden"
                style={{ minHeight: "400px", border: "1px solid rgba(201,169,110,0.15)" }}
              >
                <img
                  src={active.heroImage}
                  alt={active.name}
                  className="w-full h-full object-cover"
                  style={{ position: "absolute", inset: 0, objectPosition: (active as typeof celebrities[number] & { heroPosition?: string }).heroPosition ?? "center" }}
                />
                {/* Bottom gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent)" }}
                />
              </motion.div>

              {/* Right — Text (2/5 width) */}
              <motion.div
                key={`text-${activeId}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="col-span-1 md:col-span-2 flex flex-col justify-center py-10 md:py-0 md:pl-4"
              >
                <p
                  className="uppercase tracking-[0.18em] mb-4"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    color: "#c9a96e",
                  }}
                >
                  {active.tagline}
                </p>

                <h3
                  className="text-[#e8e4dc] font-light leading-tight mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(32px, 4vw, 52px)",
                  }}
                >
                  {active.name}
                </h3>

                <div
                  className="mb-6"
                  style={{ width: "48px", height: "1px", background: "rgba(201,169,110,0.5)" }}
                />

                <p
                  className="mb-8 leading-relaxed"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "13px",
                    color: "rgba(232,228,220,0.55)",
                    lineHeight: "1.8",
                  }}
                >
                  {active.description}
                </p>

                <p
                  className="italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "15px",
                    color: "#c9a96e",
                    opacity: 0.8,
                  }}
                >
                  {active.knownFor}
                </p>

                {active.gallery.length > 0 && (
                  <p
                    className="mt-8 uppercase tracking-widest"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      color: "rgba(232,228,220,0.2)",
                    }}
                  >
                    {active.gallery.length} photos below ↓
                  </p>
                )}
              </motion.div>
            </div>

            {/* ── Gallery Strip ── */}
            {active.gallery.length > 0 && (
              <motion.div
                key={`gallery-${activeId}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                ref={galleryRef}
                className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
              >
                {active.gallery.map((src, idx) => (
                  <div
                    key={src}
                    onClick={() => openLightbox(active.gallery, idx)}
                    className="flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,169,110,0.18)]"
                    style={{
                      height: "280px",
                      width: "auto",
                      minWidth: "200px",
                      border: "1px solid rgba(201,169,110,0.12)",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.12)";
                    }}
                  >
                    <img
                      src={src}
                      alt={`${active.name} ${idx + 2}`}
                      className="h-full w-auto object-cover transition-transform duration-500 hover:scale-[1.04]"
                    />
                    {/* Hover overlay with expand hint */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(10,10,10,0.3)" }}
                    >
                      <span
                        className="text-[#c9a96e]"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                        }}
                      >
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            initialIndex={lightbox.index}
            artistName={active.name}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}
