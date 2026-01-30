import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "YouTube", href: "#" },
    { name: "Spotify", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  const navLinks = [
    { name: "O Instituto", href: "#sobre" },
    { name: "Podcast", href: "#podcast" },
    { name: "RPG", href: "#rpg" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer className="relative py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#inicio" className="mb-8">
            <span className="font-display text-2xl text-primary text-glow">
              Instituto Enoch Path
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading text-xs tracking-[0.15em] uppercase text-foreground/50 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/40 hover:text-primary transition-colors duration-300 text-sm font-body"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-foreground/30 text-sm text-center">
            © {currentYear} Instituto Enoch Path. Todos os direitos reservados.
          </p>
          
          {/* Quote */}
          <p className="mt-6 font-heading text-xs tracking-widest uppercase text-foreground/20 text-center">
            "Caminhando com Deus entre o visível e o invisível"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
