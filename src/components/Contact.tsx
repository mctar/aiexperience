import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 text-slate-900">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-8 text-center shadow-lg backdrop-blur-md md:p-16"
        >
          {/* Decorative background elements inside card */}
          <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber-200/50 blur-3xl" />

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Klar for fremtiden?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-600">
            Enten du er nysgjerrig på potensialet eller klar for å bygge din
            første agent, tar vi gjerne en uforpliktende prat.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="mailto:kontakt@aiexperience.no"
              className="flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              kontakt@aiexperience.no
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Oslo, Norge</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
