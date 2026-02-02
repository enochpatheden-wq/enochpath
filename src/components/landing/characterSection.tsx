import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// ATENÇÃO AQUI: Mudei para .png para bater com seus arquivos
import enochFull from "@/assets/enoch-full.jpeg"; 
import conceptFace from "@/assets/concept-face.png"; 
import conceptStaff from "@/assets/concept-staff.png";

const CharacterSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const images = [
    { id: 1, src: enochFull, title: "O Peregrino", desc: "Marcado por eras de conflito." },
    { id: 2, src: conceptFace, title: "Erosão Divina", desc: "A corrupção da carne e da alma." },
    { id: 3, src: conceptStaff, title: "Cajado Ancestral", desc: "Relíquia de um poder esquecido." },
  ];

  return (
    <section id="personagens" className="py-24 bg-background relative border-t border-border/30">
       <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-glow">Arte & Conceito</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto font-light">
                Clique nas relíquias para examinar os detalhes da corrupção.
            </p>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((item) => (
                <motion.div 
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className="group relative cursor-pointer"
                >
                    <div className="relative overflow-hidden border border-border bg-card shadow-lg aspect-[3/4] gothic-frame">
                        <motion.img 
                            layoutId={`image-${item.id}`}
                            src={item.src} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        {/* Overlay Gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                        
                        <div className="absolute bottom-0 inset-x-0 p-6">
                            <motion.h3 className="font-display text-xl text-primary mb-1">{item.title}</motion.h3>
                            <p className="text-sm text-foreground/70">{item.desc}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Lightbox (Modal de Zoom) */}
        <AnimatePresence>
            {selectedId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop Escuro */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />
                    
                    {/* Card Expandido */}
                    <motion.div 
                        layoutId={`card-container-${selectedId}`}
                        className="relative w-full max-w-4xl bg-card border border-primary/20 shadow-2xl overflow-hidden rounded-sm"
                    >
                         <button 
                            onClick={() => setSelectedId(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-primary hover:text-black transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col md:flex-row h-full max-h-[80vh]">
                            {/* Imagem Grande */}
                            <div className="flex-1 overflow-hidden bg-black flex items-center justify-center">
                                <motion.img 
                                    layoutId={`image-${selectedId}`}
                                    src={images.find(i => i.id === selectedId)?.src} 
                                    className="max-w-full max-h-[70vh] object-contain"
                                />
                            </div>
                            
                            {/* Detalhes na lateral (desktop) ou baixo (mobile) */}
                            <div className="p-8 md:w-80 bg-zinc-900/50 border-l border-white/5 flex flex-col justify-center">
                                <h3 className="font-display text-2xl text-primary mb-4">
                                    {images.find(i => i.id === selectedId)?.title}
                                </h3>
                                <p className="text-foreground/80 leading-relaxed">
                                    {images.find(i => i.id === selectedId)?.desc}
                                </p>
                                <div className="mt-8 pt-4 border-t border-white/10 text-xs text-foreground/40 uppercase tracking-widest">
                                    Concept Art Original
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
       </div>
    </section>
  );
};

export default CharacterSection;
