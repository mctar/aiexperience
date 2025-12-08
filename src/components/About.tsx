import { motion } from "motion/react";
import { Bot, Cpu, Network, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-Agenter",
    description:
      "Vi utvikler og implementerer autonome agenter som kan utføre komplekse oppgaver på vegne av din bedrift.",
    colorClass: "bg-sky-100 text-sky-600",
  },
  {
    icon: Network,
    title: "Agentisk Arkitektur",
    description:
      "Design av systemer der flere AI-modeller samarbeider for å løse problemer mer effektivt enn enkeltstående modeller.",
    colorClass: "bg-amber-100 text-amber-600",
  },
  {
    icon: Cpu,
    title: "Strategisk Rådgivning",
    description:
      "Vi hjelper ledere med å forstå og navigere skiftet fra tradisjonell automatisering til kognitiv autonomi.",
    colorClass: "bg-violet-100 text-violet-600",
  },
  {
    icon: Zap,
    title: "Implementering",
    description:
      "Fra pilotprosjekter til fullskala utrulling – vi sikrer at teknologien leverer reell forretningsverdi.",
    colorClass: "bg-emerald-100 text-emerald-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 text-slate-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Hvorfor Agentisk AI?
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Vi beveger oss fra verktøy vi bruker, til agenter vi samarbeider med.
            AI Experience er din partner i denne transformasjonen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/50 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-white hover:bg-white/80 hover:shadow-md"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.colorClass}`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
