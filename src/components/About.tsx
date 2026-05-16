"use client";

import { motion } from "framer-motion";

const skills = [
  "Cinematography",
  "Videography",
  "Wedding Films",
  "Brand Commercials",
  "Short Films",
  "Portrait Photography",
  "Travel Documentary",
  "Color Grading",
  "Lighting Design",
  "Post-Production",
  "Aerial/Drone",
  "Event Coverage"
];

export default function About() {
  return (
    <section className="bg-transparent py-32 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Bio Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2"
        >
          <h2 className="font-serif text-4xl text-[#e8e4dc] mb-8">The Vision</h2>
          <div className="space-y-6 font-mono text-sm leading-loose text-gray-400">
            <p>
              Siddhant Shukla is a cinematographer, videographer, and photographer based in India, driven by a lifelong obsession with light and visual storytelling. His work spans cinematic wedding films, brand commercials, narrative short films, portrait photography, event coverage, and travel documentaries.
            </p>
            <p>
              What sets Siddhant apart is his ability to feel a moment before capturing it — bringing the patience of a photographer and the vision of a filmmaker together in every project. Whether shooting the quiet tears at a first look or building a brand's visual world from scratch, the goal is always the same: images that linger long after the screen goes dark.
            </p>
            <p className="text-[#C0392B] italic font-serif text-lg tracking-wide">
              Available for projects across India and internationally.
            </p>
          </div>
        </motion.div>

        {/* Right: Skills Tag Cloud */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 border border-white/10 text-gray-300 font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#C0392B] hover:text-[#C0392B] transition-colors duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
