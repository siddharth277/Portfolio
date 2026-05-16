import DynamicBackground from "@/components/DynamicBackground";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Showreel from "@/components/Showreel";
import Projects from "@/components/Projects";
import Celebrities from "@/components/Celebrities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative z-0">
      <DynamicBackground />
      <ScrollyCanvas />
      <Showreel />
      <Projects />
      <Celebrities />
      <Contact />
    </main>
  );
}
