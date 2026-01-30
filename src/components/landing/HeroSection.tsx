import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GothicButton } from "@/components/ui/GothicButton";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-vignette" />
        <div className="absolute inset-0 divine-light" />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-primary text-2xl">✦</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase text-primary/80 mb-6"
          >
            Explorando os Mistérios da Fé
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight text-glow"
          >
            Instituto
            <br />
            <span className="text-primary">Enoch Path</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Onde a teologia profunda encontra a narrativa épica. 
            Um podcast que ilumina e um RPG que desafia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GothicButton variant="sacred" size="lg" asChild>
              <a href="#podcast">Ouvir Podcast</a>
            </GothicButton>
            <GothicButton variant="default" size="lg" asChild>
              <a href="#rpg">Conhecer o RPG</a>
            </GothicButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-foreground/40 hover:text-primary transition-colors duration-300 group"
          >
            <span className="font-heading text-xs tracking-[0.2em] uppercase">
              Explorar
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
