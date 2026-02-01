import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CharacterSection from "@/components/landing/CharacterSection";
import RPGSection from "@/components/landing/RPGSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <Header />
      <main>
        <HeroSection />
        <RPGSection />
        <CharacterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
