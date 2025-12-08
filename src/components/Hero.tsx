import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import exampleImage from 'figma:asset/915e1124631342ead8a51f4f6bada715d4e7d909.png';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#fdfbf7] px-4 text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={exampleImage} 
          alt="Artistic background" 
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-[#fdfbf7]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center space-x-2 rounded-full border border-sky-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-sky-900 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-sky-500" />
          <span>Velkommen til den agentiske tidsalder</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-8xl"
        >
          AI Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl font-medium"
        >
          Ditt konsulenthus for fremtidens teknologi. Vi hjelper bedrifter med å
          realisere verdien av AI-agenter og autonom intelligens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 shadow-lg hover:shadow-xl"
          >
            Kom i gang
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/50 px-8 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-white"
          >
            Les mer
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400"
      >
        <div className="h-6 w-px bg-gradient-to-b from-transparent to-slate-400" />
      </motion.div>
    </section>
  );
}
