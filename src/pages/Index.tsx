import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Film, Code, Globe, Mail, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7, ease: "easeOut" as const },
});

const experiences = [
  {
    role: "Global IT Track & Trace Delivery Center Director",
    company: "JTI (Japan Tobacco International)",
    period: "Current",
    description:
      "Leading international Track & Trace systems and software delivery across global markets. Driving regulatory compliance solutions and managing cross-functional engineering teams.",
  },
  {
    role: "Founder & Creative Director",
    company: "Cengel Studio",
    period: "Ongoing",
    description:
      "A creative studio blending code and cinema — building web applications, mobile apps, and producing music videos, short films, and sound design.",
  },
];

const services = [
  { icon: Code, title: "Software", desc: "Web & mobile apps, APIs, ERP systems" },
  { icon: Film, title: "Film & Video", desc: "Music videos, commercials, short films" },
  { icon: Globe, title: "Track & Trace", desc: "Global regulatory compliance solutions" },
  { icon: Briefcase, title: "Enterprise", desc: "IT strategy & delivery leadership" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 w-full px-6 py-24 sm:px-12 md:px-24 lg:px-32">
          <motion.div {...fadeUp(0.1)} className="mb-4">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
              IT Director · Creative Studio
            </span>
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Avni{" "}
            <span className="text-primary">Cengel</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.35)}
            className="max-w-xl text-lg sm:text-xl text-secondary-foreground/80 leading-relaxed mb-10"
          >
            Experienced IT Director & creative technologist blending enterprise
            software leadership with film and digital storytelling. Based in
            Madrid.
          </motion.p>
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/avnicengel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://cengel.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50"
            >
              Cengel Studio
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:hello@cengel.ai"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24 sm:px-12 md:px-24 lg:px-32">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp()}>
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase mb-6">
              About
            </h2>
            <p className="text-2xl sm:text-3xl font-display font-semibold leading-snug text-foreground mb-6">
              I am a highly experienced IT Director with deep expertise in Track
              & Trace systems, regulatory compliance, and software delivery
              across global enterprises.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Over the years, I've led international teams building
              mission-critical systems while simultaneously running a creative
              studio that blends code and cinema. From robust web applications
              to immersive films, I bring a unique intersection of technical
              leadership and creative vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Do */}
      <section className="px-6 py-24 sm:px-12 md:px-24 lg:px-32 bg-card">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            {...fadeUp()}
            className="text-sm font-medium tracking-widest text-primary uppercase mb-12"
          >
            What I Do
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i * 0.1)}
                className="rounded-xl border border-border bg-background/50 p-6 transition-colors hover:border-primary/30"
              >
                <s.icon className="mb-4 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-24 sm:px-12 md:px-24 lg:px-32">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            {...fadeUp()}
            className="text-sm font-medium tracking-widest text-primary uppercase mb-12"
          >
            Experience
          </motion.h2>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                {...fadeUp(i * 0.15)}
                className="border-l-2 border-primary/30 pl-6"
              >
                <p className="text-xs font-medium text-primary mb-1">
                  {exp.period}
                </p>
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="px-6 py-24 sm:px-12 md:px-24 lg:px-32 bg-card">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            {...fadeUp()}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Let's work together
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            Whether it's enterprise software, a creative project, or something
            in between — I'd love to hear from you.
          </motion.p>
          <motion.div {...fadeUp(0.2)} className="flex justify-center gap-3 flex-wrap">
            <a
              href="mailto:hello@cengel.ai"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            <a
              href="https://cengel.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50"
            >
              Visit Studio
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bottom bar */}
      <footer className="px-6 py-8 sm:px-12 md:px-24 lg:px-32 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Avni Cengel. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
