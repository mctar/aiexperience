import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import gradientBg from "figma:asset/3ad5bcfe31f89b3a2633d1f949bc037869abd2db.png";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      {/* Global Background Layer */}
      <div className="fixed inset-0 -z-50">
        <img
          src={gradientBg}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-white/60 mix-blend-overlay" />
      </div>

      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
