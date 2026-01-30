import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sword, Sparkles, Clock, Bell } from "lucide-react";
import { GothicButton } from "@/components/ui/GothicButton";
import rpgImage from "@/assets/rpg-image.jpg";

const RPGSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Sistema original baseado em tradições esotéricas",
    "Narrativa profunda inspirada em textos apócrifos",
    "Mecânicas que exploram moralidade e destino",
    "Arte visual no estilo de gravuras clássicas",
  ];

  return (
    <section
      id="rpg"
      ref={ref}
      className="relative py-32 bg-gradient-abyss overflow-hidden"
    >
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sword className="w-5 h-5 text-accent" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-accent">
                RPG em Desenvolvimento
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Enoch
              <br />
              <span className="text-accent">Path</span>
            </h2>

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 bg-accent/5 mb-8">
              <Clock className="w-4 h-4 text-accent" />
              <span className="font-heading text-xs tracking-widest uppercase text-accent">
                Em Desenvolvimento
              </span>
            </div>

            <p className="text-foreground/60 text-lg leading-relaxed mb-8">
              Um RPG de mesa que mergulha nos reinos entre o céu e o abismo. 
              Jogue como um Caminhante—almas escolhidas para trilhar o caminho 
              proibido de Enoque, enfrentando anjos caídos, demônios ancestrais 
              e os segredos que os céus tentam ocultar.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground/70"
                >
                  <Sparkles className="w-4 h-4 text-accent/70 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <GothicButton variant="parchment" size="lg" asChild>
              <a href="#contato" className="inline-flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Receber Novidades
              </a>
            </GothicButton>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="gothic-border p-2">
              <img
                src={rpgImage}
                alt="Enoch Path RPG"
                className="w-full aspect-square object-cover"
              />
              {/* Ember glow effect */}
              <div className="absolute inset-2 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-tr from-accent/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-card border border-accent/30 px-6 py-4 shadow-ember"
            >
              <span className="font-display text-2xl text-accent">2025</span>
              <span className="block font-heading text-xs tracking-widest uppercase text-foreground/50 mt-1">
                Lançamento
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RPGSection;
