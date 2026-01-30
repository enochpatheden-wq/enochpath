import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Compass, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BookOpen,
      title: "Teologia Profunda",
      description:
        "Exploramos textos sagrados e apócrifos com rigor acadêmico e reverência espiritual.",
    },
    {
      icon: Compass,
      title: "Narrativa Épica",
      description:
        "Criamos mundos e histórias que desafiam a alma e expandem a imaginação.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Reunimos buscadores de conhecimento em uma jornada compartilhada de descoberta.",
    },
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-32 bg-gradient-abyss overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-lg mb-4 block">✦</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            O Instituto
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            O Instituto Enoch Path nasceu da convergência entre o estudo teológico 
            profundo e a arte da narrativa. Somos guardiões de histórias antigas 
            e criadores de novas jornadas.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="card-gothic p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <p className="font-heading text-2xl md:text-3xl text-foreground/80 italic leading-relaxed">
            "E Enoque andou com Deus; e não apareceu mais, 
            <br className="hidden md:block" />
            porque Deus o tomou."
          </p>
          <cite className="block mt-6 text-primary/70 text-sm tracking-widest uppercase">
            — Gênesis 5:24
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutSection;
