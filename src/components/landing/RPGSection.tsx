import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sword, Sparkles, PlayCircle } from "lucide-react";
import trailerVideo from "@/assets/trailer.mp4";

const RPGSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Sistema Soulslike de Alta Letalidade",
    "Narrativa Profunda e Ramificada",
    "Atmosfera de Horror Cósmico e Teológico",
  ];

  return (
    <section
      id="rpg"
      ref={ref}
      className="relative py-32 bg-gradient-abyss overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Intro do Jogo */}
        <div className="text-center mb-16">
             <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 bg-accent/5 mb-6 rounded-full"
             >
                <Sword className="w-4 h-4 text-accent" />
                <span className="font-heading text-xs tracking-widest uppercase text-accent">
                    RPG em Desenvolvimento
                </span>
             </motion.div>
             <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 text-glow">
              A Saga de <span className="text-accent">Enoch</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed font-light">
              Jogue como um Caminhante em um mundo dilacerado pelo divino. Enfrente anjos caídos, 
              monstros de pedra e os seus próprios pecados.
            </p>
        </div>

        {/* Trailer Section com Moldura Gótica */}
        <div id="trailer" className="max-w-5xl mx-auto relative group">
            {/* Efeito de brilho de fundo */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative gothic-frame bg-black aspect-video overflow-hidden shadow-2xl">
                <video 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-700"
                    controls
                    preload="metadata"
                >
                    <source src={trailerVideo} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                </video>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-foreground/40 text-xs tracking-widest uppercase">
                <PlayCircle className="w-4 h-4" />
                <span>Trailer de Gameplay - Alpha</span>
            </div>
        </div>

        {/* Features List */}
        <div className="mt-20 border-t border-white/5 pt-10">
            <ul className="flex flex-wrap justify-center gap-8 md:gap-16">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground/60 font-heading uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-primary" /> {feature}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default RPGSection;
