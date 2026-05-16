"use client";

import { motion } from "framer-motion";
import { Mail, Camera, Play, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-transparent py-32 px-8 md:px-24 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#C0392B] rounded-full blur-[150px] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#e8e4dc] mb-6 tracking-wide">
            let&apos;s capture <span className="text-[#C0392B] italic">moments.</span>
          </h2>
          
          <div className="w-24 h-[1px] bg-[#C0392B] mx-auto my-12"></div>
          
          <a 
            href="mailto:siddharthshukla840@gmail.com"
            className="inline-block px-10 py-4 bg-[#C0392B] text-white font-mono text-sm uppercase tracking-widest hover:bg-[#a02c20] transition-colors duration-300 mb-20"
          >
            Get in touch
          </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <a 
              href="mailto:siddharthshukla840@gmail.com" 
              className="group flex items-center gap-3 text-gray-400 hover:text-[#C0392B] transition-colors duration-300"
            >
              <Mail size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">Email</span>
            </a>

            <a 
              href="https://instagram.com/siddontrip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-400 hover:text-[#C0392B] transition-colors duration-300"
            >
              <Camera size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">Instagram</span>
            </a>

            <a 
              href="https://www.youtube.com/@siddontripp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-400 hover:text-[#C0392B] transition-colors duration-300"
            >
              <Play size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">YouTube</span>
            </a>

            <a 
              href="https://wa.me/919555353796" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-400 hover:text-[#C0392B] transition-colors duration-300"
            >
              <MessageCircle size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">WhatsApp</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 uppercase tracking-widest"
        >
          <p>© {new Date().getFullYear()} Siddhant Shukla</p>
          <p className="mt-4 md:mt-0">All rights reserved</p>
        </motion.div>
      </div>
    </section>
  );
}
