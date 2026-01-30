import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GothicButton } from "@/components/ui/GothicButton";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Divine light from above */}
      <div className="absolute inset-0 divine-light" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary text-lg mb-4 block">✦</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Junte-se à Jornada
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-foreground/60 text-lg leading-relaxed mb-12">
            Receba notificações sobre novos episódios do podcast, atualizações 
            do desenvolvimento do RPG e conteúdo exclusivo sobre teologia e 
            mistérios ancestrais.
          </p>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  required
                  className="w-full h-12 pl-12 pr-4 bg-card border border-border text-foreground placeholder:text-foreground/30 font-body focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <GothicButton variant="sacred" type="submit" className="h-12">
                <Send className="w-4 h-4" />
                Inscrever
              </GothicButton>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-primary"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="font-heading text-lg">
                Bem-vindo ao caminho.
              </span>
            </motion.div>
          )}

          <p className="text-foreground/30 text-sm mt-6">
            Respeitamos sua privacidade. Sem spam, apenas iluminação.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
