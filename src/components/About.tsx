import { User, Code, Palette, Lightbulb } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Front-end", level: 87, color: "neon-cyan" },
    { category: "Back-end", level: 90, color: "neon-purple" },
    { category: "UX/UI", level: 80, color: "neon-green" },
    { category: "DevOps", level: 90, color: "neon-pink" },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Docker", "PostgreSQL", "MongoDB", "Tailwind CSS"
  ];

  return (
    <section id="sobre" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-neon-green mb-4 text-left max-w-md mx-auto">
            <span className="text-neon-cyan">mateus@dev:~$</span> cat /about/README.md
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            O <span className="text-neon-purple">artista</span> por trás do <span className="text-neon-cyan">código</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl hover-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-neon-purple/20">
                  <User className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <div className="font-mono text-xs text-neon-green mb-1">
                    <span className="text-neon-cyan">$</span> systemctl status developer.service
                  </div>
                  <h3 className="text-xl font-semibold">Minha Jornada</h3>
                </div>
              </div>
              <p className="text-foreground-secondary leading-relaxed">
                Sou apaixonado por criar soluções que combinam funcionalidade e estética, 
                vendo cada linha de código como uma pincelada em uma tela digital. 
                Transformo ideias complexas em experiências digitais elegantes e intuitivas.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl hover-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-neon-cyan/20">
                  <Lightbulb className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-mono text-xs text-neon-green mb-1">
                    <span className="text-neon-cyan">$</span> vim ~/.config/philosophy/blog.md
                  </div>
                  <h3 className="text-xl font-semibold">"O Código e o Bug"</h3>
                </div>
              </div>
              <p className="text-foreground-secondary leading-relaxed">
                Meu blog é uma expressão da minha filosofia como programador. Para mim, 
                códigos são mais que instruções—são expressões artísticas que resolvem 
                problemas do mundo real. Cada bug é uma lição, cada solução é uma obra de arte.
              </p>
            </div>
          </div>

          {/* Right side - Skills & Tech */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="glass p-8 rounded-2xl hover-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-neon-green/20">
                  <Code className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <div className="font-mono text-xs text-neon-green mb-1">
                    <span className="text-neon-cyan">$</span> top -p $(pgrep -f "skills")
                  </div>
                  <h3 className="text-xl font-semibold">Habilidades</h3>
                </div>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.category}</span>
                      <span className="text-xs text-foreground-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        skill.color === 'neon-cyan' ? 'bg-gradient-to-r from-neon-cyan to-neon-cyan/60' :
                        skill.color === 'neon-purple' ? 'bg-gradient-to-r from-neon-purple to-neon-purple/60' :
                        skill.color === 'neon-green' ? 'bg-gradient-to-r from-neon-green to-neon-green/60' :
                        'bg-gradient-to-r from-neon-pink to-neon-pink/60'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="glass p-8 rounded-2xl hover-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-neon-orange/20">
                  <Palette className="w-6 h-6 text-neon-orange" />
                </div>
                <div>
                  <div className="font-mono text-xs text-neon-green mb-1">
                    <span className="text-neon-cyan">$</span> ls /usr/local/bin/ | grep -E "(tech|tools)"
                  </div>
                  <h3 className="text-xl font-semibold">Stack & Ferramentas</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-background-tertiary rounded-full text-sm font-medium border border-card-border hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;