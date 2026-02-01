import { motion } from "framer-motion";
import enochFull from "@/assets/enoch-full.jpeg";
import conceptFace from "@/assets/concept-face.jpg";
import conceptStaff from "@/assets/concept-staff.jpg";

const CharacterSection = () => {
  const images = [
    { src: enochFull, title: "O Peregrino", desc: "Marcado por eras de conflito." },
    { src: conceptFace, title: "Erosão Divina", desc: "A corrupção da carne e da alma." },
    { src: conceptStaff, title: "Cajado Ancestral", desc: "Relíquia de um poder esquecido." },
  ];

  return (
    <section id="personagens" className="py-20 bg-background relative border-t border-border/30">
       <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Arte & Conceito</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Vislumbres daqueles que ousam trilhar o caminho proibido.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative overflow-hidden border border-border bg-card/50 hover:border-primary/50 transition-colors duration-500"
                >
                    <div className="aspect-[3/4] overflow-hidden">
                        <img 
                            src={item.src} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                        <h3 className="font-display text-xl text-primary mb-1">{item.title}</h3>
                        <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
       </div>
    </section>
  );
};

export default CharacterSection;
