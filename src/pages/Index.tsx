import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://x.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between px-6 py-12 sm:px-12 md:px-24 lg:px-32">
      {/* Top accent line */}
      <motion.div
        className="mb-16 h-px w-16 bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* Main content */}
      <main className="flex flex-1 flex-col justify-center max-w-2xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
        >
          Hey, I'm{" "}
          <span className="text-accent">Alex</span>.
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mb-4"
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
        >
          Designer & developer crafting thoughtful digital experiences. Currently
          building things that matter.
        </motion.p>

        <motion.p
          className="text-base text-muted-foreground/70 leading-relaxed max-w-md mb-12"
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
        >
          Based in San Francisco. Open to freelance and collaboration — let's
          create something great together.
        </motion.p>

        {/* Links */}
        <motion.nav
          className="flex flex-wrap gap-3"
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/10"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          ))}
        </motion.nav>
      </main>

      {/* Footer */}
      <motion.footer
        className="pt-16 text-xs text-muted-foreground/50"
        custom={4}
        variants={fade}
        initial="hidden"
        animate="show"
      >
        © {new Date().getFullYear()} Alex. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Index;
