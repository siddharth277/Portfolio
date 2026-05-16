"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aman & Shruti",
    role: "Wedding Client",
    quote: "Siddhant didn't just capture our wedding; he captured the very soul of the day. Every time we watch the film, we are transported back to those exact emotions. Truly extraordinary work.",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director",
    quote: "Working with Siddhant on our brand campaign was an absolute masterclass in visual storytelling. His understanding of light and pacing gave our brand a cinematic edge we didn't know we had.",
  },
  {
    name: "Vikram Mehta",
    role: "Short Film Director",
    quote: "His patience on set and his instinct for exactly when to hit record sets him apart from any other DOP I've worked with. The frames he composed elevated the entire narrative.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-transparent py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#e8e4dc]">Words From Collaborators</h2>
          <div className="w-24 h-[1px] bg-[#C0392B] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#111111] p-10 border border-white/5 relative flex flex-col justify-between"
            >
              <Quote className="text-[#C0392B] w-10 h-10 mb-8 opacity-50" />
              
              <p className="font-serif italic text-xl text-gray-300 leading-relaxed mb-10">
                "{testimonial.quote}"
              </p>
              
              <div>
                <div className="w-8 h-[1px] bg-white/10 mb-4"></div>
                <h4 className="font-mono text-sm text-[#e8e4dc] uppercase tracking-widest mb-1">
                  {testimonial.name}
                </h4>
                <span className="font-mono text-xs text-[#C0392B] uppercase tracking-wider">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
