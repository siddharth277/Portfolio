"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { Volume2, VolumeX } from "lucide-react";

export default function Showreel() {
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);

  const videoId = "8VghSmJwjI0";

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
    setIsReady(true);
  };

  const onStateChange = (event: YouTubeEvent) => {
    // If the video ends, play it again
    if (event.data === 0) {
      event.target.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      mute: 1,
      playsinline: 1,
      playlist: videoId, // Required for loop to work
    },
  };

  return (
    <section className="bg-transparent py-32 px-8 md:px-0">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 px-0 md:px-24 text-center md:text-left"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#e8e4dc]">Its me</h2>
          <div className="w-24 h-[1px] bg-[#C0392B] mt-6 mx-auto md:mx-0"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full aspect-video bg-black"
        >
          {/* YouTube Player */}
          <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
            <YouTube 
              videoId={videoId} 
              opts={opts} 
              onReady={onReady}
              onStateChange={onStateChange}
              className="w-full h-full"
              iframeClassName="w-full h-full object-cover"
            />
          </div>

          {/* Overlay for cinematic feel (prevent clicks if needed) */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(10,10,10,0.8)]"></div>

          {/* Custom Sound Toggle */}
          {isReady && (
            <button
              onClick={toggleMute}
              className="absolute bottom-8 right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:border-[#C0392B] hover:text-[#C0392B] transition-all duration-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
