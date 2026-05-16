"use client";

import { motion } from "framer-motion";

const projects = [
  {
    category: "Wedding Films",
    title: "Cinematic storytelling for your most important day",
    description: "Capturing the quiet tears at a first look and the joy of the celebration.",
    image: "/projects/wedding.png"
  },
  {
    category: "Brand Commercials",
    title: "Visual narratives that move audiences",
    description: "Building a brand's visual world from scratch with cinematic precision.",
    image: "/projects/commercial.png"
  },
  {
    category: "Short Films",
    title: "Narrative filmmaking, frame by frame",
    description: "Stories told through patience, light, and raw emotion.",
    image: "/projects/shortfilm.png"
  },
  {
    category: "Portrait Photography",
    title: "Faces, light, and raw emotion",
    description: "Images that linger long after the screen goes dark.",
    image: "/projects/portrait.png"
  },
  {
    category: "Event Coverage",
    title: "Every moment, perfectly captured",
    description: "Bringing the vision of a filmmaker to the unpredictability of live events.",
    image: "/projects/event.png"
  },
  {
    category: "Travel Documentaries",
    title: "Stories from across the world",
    description: "Documenting cultures, landscapes, and the beauty of our planet.",
    image: "/projects/travel.png"
  },
];

export default function Projects() {
  return (
    <section className="bg-transparent py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#e8e4dc]">Selected Works</h2>
          <div className="w-24 h-[1px] bg-[#C0392B] mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden p-8 border border-white/5 transition-all duration-500 hover:border-[#C0392B]/50 hover:shadow-[0_0_30px_rgba(192,57,43,0.15)] flex flex-col justify-end min-h-[400px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C0392B] mb-4 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-[24px] text-[#e8e4dc] mb-3 leading-snug group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-mono text-[12px] text-gray-400 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
