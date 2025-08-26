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
              <span className="text-neon-green">┌──(</span>
              <span className="text-neon-cyan">mateus@dev</span>
              <span className="text-neon-green">)-[</span>
              <span className="text-neon-purple">~/portfolio</span>
              <span className="text-neon-green">]</span>
            </div>
            <p className="text-foreground-secondary text-sm leading-relaxed font-mono">
              <span className="text-neon-green">└─$</span> echo "Artista de Código & Criador de Soluções"<br />
              <span className="text-neon-cyan pl-3">// Transformando ideias em realidade através da programação</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan font-mono">
              <span className="text-neon-green">$</span> ls -la /navigation/
            </h4>
            <ul className="space-y-2 font-mono">
              {["home", "sobre", "projetos", "blog", "contato"].map((link) => (
                <li key={link} className="flex items-center gap-2">
                  <span className="text-neon-green text-xs">→</span>
                  <a
                    href={`#${link}`}
                    className="text-foreground-secondary hover:text-neon-cyan transition-colors duration-300 text-sm"
                  >
                    ./{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy/System Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-purple font-mono">
              <span className="text-neon-green">$</span> uname -a
            </h4>
            <div className="text-foreground-secondary text-sm font-mono space-y-2">
              <div>Linux dev-mateus 5.19.0</div>
              <div className="text-neon-cyan">#passion SMP creativity</div>
              <div>x86_64 GNU/Innovation</div>
            </div>
            <blockquote className="text-foreground-secondary text-sm italic leading-relaxed mt-4 font-mono">
              <span className="text-neon-green"># </span>"Cada linha de código é uma<br />
              <span className="text-neon-green"># </span> pincelada na tela digital"
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
            
            <div className="flex items-center gap-4 text-xs text-foreground-muted font-mono">
              <span className="text-neon-green">$</span>
              <span>version 2.0.1</span>
              <span className="text-neon-purple">|</span>
              <span>built with React + TypeScript</span>
              <span className="text-neon-purple">|</span>
              <span className="text-neon-cyan">uptime: ∞</span>
              <span className="text-neon-purple">|</span>
              <div className="code-block py-1 px-2 text-xs">
                <span className="text-neon-green">echo</span>
                <span className="text-foreground-secondary"> "Obrigado pela visita!"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;