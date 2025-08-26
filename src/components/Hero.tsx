import { Button } from "@/components/ui/enhanced-button";
import { ChevronDown, Github, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-8 animate-fade-in">
            <span className="text-neon-cyan font-mono text-lg">Olá, eu sou</span>
          </div>

          {/* Name with glitch effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span 
              className="glitch neon-text bg-gradient-primary bg-clip-text text-transparent" 
              data-text="Mateus"
            >
              Mateus
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground-secondary mb-8">
            <span className="text-neon-purple">Artista de Código</span> & <span className="text-neon-cyan">Criador de Soluções</span>
          </h2>

          {/* Code block */}
          <div className="code-block max-w-2xl mx-auto mb-12 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm text-neon-green">
              <code>{`> const minhaMissão = () => {
  return "Transformar problemas complexos em
          soluções elegantes através do código";
};

> console.log(minhaMissão());
// "Transformar problemas complexos em soluções elegantes através do código"`}</code>
            </pre>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToProjects}
              className="group"
            >
              Ver Projetos
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="cyber" 
              size="xl" 
              onClick={scrollToContact}
            >
              Vamos Conversar
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/mateusjsilva", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mateusjsilva", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contato@mateusjsilva.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-card-border hover:border-neon-cyan transition-all duration-300 hover:shadow-cyan-glow"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-foreground-secondary group-hover:text-neon-cyan transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-neon-cyan opacity-60" />
      </div>
    </section>
  );
};

export default Hero;