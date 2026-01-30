import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import PodcastSection from "@/components/landing/PodcastSection";
import RPGSection from "@/components/landing/RPGSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PodcastSection />
        <RPGSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
