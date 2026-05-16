"use client";

import { motion } from "framer-motion";

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Background Image — slow pulsing scale for subtle life */}
      <motion.div
        className="absolute inset-[-10%] w-[120%] h-[120%]"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: {
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src="/siddhant-bg.jpg"
          alt=""
          className="w-full h-full object-cover blur-[6px]"
        />
      </motion.div>

      {/* Dark color overlay — lets image show through while keeping text readable */}
      <div className="absolute inset-0 bg-[#0a0a0a]/70"></div>

      {/* Subtle vignette for cinematic framing */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 100%)",
        }}
      ></div>
      {/* Cover for Veo watermark baked into image */}
      <div className="absolute bottom-0 right-0 w-32 h-16 bg-[#0a0a0a]"></div>
    </div>
  );
}
