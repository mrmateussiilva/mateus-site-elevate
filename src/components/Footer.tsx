import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-card-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-mono font-bold mb-4">
              <span className="text-neon-purple">&lt;</span>
              <span className="text-neon-cyan">Mateus.JSilva</span>
              <span className="text-neon-purple">/&gt;</span>
            </div>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              Artista de Código & Criador de Soluções. 
              Transformando ideias em realidade através da programação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Navegação</h4>
            <ul className="space-y-2">
              {["Home", "Sobre", "Projetos", "Blog", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground-secondary hover:text-neon-cyan transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-purple">Filosofia</h4>
            <blockquote className="text-foreground-secondary text-sm italic leading-relaxed">
              "Cada linha de código é uma pincelada na tela digital, 
              cada função uma nota na sinfonia da lógica."
            </blockquote>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground-muted text-sm flex items-center gap-2">
              © {currentYear} Mateus J. Silva. Feito com 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              e 
              <Code className="w-4 h-4 text-neon-cyan" />
            </p>
            
            <div className="flex items-center gap-4 text-xs text-foreground-muted">
              <span>Versão 2.0</span>
              <span>•</span>
              <span>React + TypeScript</span>
              <span>•</span>
              <span className="code-block py-1 px-2 text-xs">
                <span className="text-neon-green">console.log</span>
                <span className="text-foreground-secondary">("Obrigado pela visita!");</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;