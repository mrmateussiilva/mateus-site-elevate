import { useState, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-mono font-bold">
            <span className="text-neon-purple">&lt;</span>
            <span className="glitch neon-text text-neon-cyan" data-text="Mateus.JSilva">
              Mateus.JSilva
            </span>
            <span className="text-neon-purple">/&gt;</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", id: "home" },
              { label: "Sobre", id: "sobre" },
              { label: "Projetos", id: "projetos" },
              { label: "Blog", id: "blog" },
              { label: "Contato", id: "contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground-secondary hover:text-neon-cyan transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <Button 
            variant="cyber" 
            onClick={() => scrollToSection("contato")}
            className="hidden md:inline-flex"
          >
            Vamos Conversar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;