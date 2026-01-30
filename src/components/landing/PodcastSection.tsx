import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, Play, Clock, Calendar } from "lucide-react";
import { GothicButton } from "@/components/ui/GothicButton";
import podcastImage from "@/assets/podcast-image.jpg";

const PodcastSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const episodes = [
    {
      number: "EP 12",
      title: "O Livro de Enoque: Origens e Mistérios",
      duration: "1h 23min",
      date: "15 Jan 2025",
    },
    {
      number: "EP 11",
      title: "Anjos Caídos na Tradição Judaica",
      duration: "58min",
      date: "08 Jan 2025",
    },
    {
      number: "EP 10",
      title: "Apocalipse: Visões do Fim",
      duration: "1h 05min",
      date: "01 Jan 2025",
    },
  ];

  return (
    <section
      id="podcast"
      ref={ref}
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Divine light effect */}
      <div className="absolute inset-0 divine-light opacity-50" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="gothic-border p-2">
              <img
                src={podcastImage}
                alt="Caminho de Enoque Podcast"
                className="w-full aspect-square object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-2 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full border-2 border-primary bg-background/80 flex items-center justify-center group hover:bg-primary/20 transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-5 h-5 text-primary" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-primary">
                Podcast Teológico
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Caminho de
              <br />
              <span className="text-primary">Enoque</span>
            </h2>

            <p className="text-foreground/60 text-lg leading-relaxed mb-10">
              Uma jornada sonora através dos textos sagrados, tradições místicas 
              e questões teológicas que moldaram civilizações. Cada episódio é 
              uma meditação profunda sobre os mistérios da fé.
            </p>

            {/* Recent Episodes */}
            <div className="space-y-4 mb-10">
              <h3 className="font-heading text-sm tracking-widest uppercase text-foreground/50 mb-6">
                Episódios Recentes
              </h3>
              {episodes.map((episode, index) => (
                <motion.div
                  key={episode.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:bg-card/50"
                >
                  <span className="font-heading text-xs text-primary/70 w-14">
                    {episode.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm text-foreground group-hover:text-primary transition-colors truncate">
                      {episode.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-xs text-foreground/40">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {episode.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {episode.date}
                      </span>
                    </div>
                  </div>
                  <Play className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>

            <GothicButton variant="default" size="lg" asChild>
              <a href="#" className="inline-flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                Ouvir Todos os Episódios
              </a>
            </GothicButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
