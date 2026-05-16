"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 15% — fully gone before section 2 starts
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  // Section 2: 30% to 50% — no overlap with section 1
  const opacity2 = useTransform(scrollYProgress, [0.30, 0.35, 0.45, 0.50], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.30, 0.50], [40, -40]);

  // Section 3: 60% to 80% — no overlap with section 2
  const opacity3 = useTransform(scrollYProgress, [0.60, 0.65, 0.75, 0.80], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.60, 0.80], [40, -40]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-8 md:px-24">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <h1 className="font-serif text-5xl md:text-7xl font-light tracking-[0.2em] text-[#e8e4dc] uppercase">
          Siddhant Shukla
          <br />
          <span className="text-2xl md:text-4xl text-[#C0392B] mt-4 block tracking-[0.3em]">Cinematographer.</span>
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left md:ml-24"
      >
        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-[0.1em] text-[#e8e4dc]">
          Every frame tells <br />
          <span className="text-[#C0392B]">a story.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right md:mr-24"
      >
        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-[0.1em] text-[#e8e4dc]">
          Light. Motion. <br />
          <span className="text-[#C0392B]">Emotion.</span>
        </h2>
      </motion.div>
    </div>
  );
}
