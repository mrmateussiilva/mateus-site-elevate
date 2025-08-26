import { Button } from "@/components/ui/enhanced-button";
import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestão Empresarial",
      description: "Sistema completo de gestão empresarial com dashboards interativos, controle de estoque, vendas e relatórios em tempo real.",
      tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      type: "web",
      icon: Monitor,
      gradient: "from-neon-cyan to-neon-purple",
      links: {
        github: "https://github.com/mateusjsilva",
        demo: "https://demo.mateusjsilva.com"
      }
    },
    {
      title: "App de Produtividade",
      description: "Aplicativo mobile para gerenciamento de tarefas com sistema de gamificação, sincronização em tempo real e analytics.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      type: "mobile",
      icon: Smartphone,
      gradient: "from-neon-purple to-neon-pink",
      links: {
        github: "https://github.com/mateusjsilva",
        demo: "https://demo.mateusjsilva.com"
      }
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com pagamentos integrados, painel administrativo e sistema de análise de vendas.",
      tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
      type: "web",
      icon: Monitor,
      gradient: "from-neon-green to-neon-cyan",
      links: {
        github: "https://github.com/mateusjsilva",
        demo: "https://demo.mateusjsilva.com"
      }
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-neon-purple font-mono text-sm uppercase tracking-wider">/* Projetos */</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Meus <span className="text-neon-cyan">trabalhos</span> recentes
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Uma seleção de projetos que demonstram minha paixão por criar soluções elegantes e funcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass p-8 rounded-2xl hover-glow hover-lift cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Project type icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
                    {project.type}
                  </span>
                </div>

                {/* Project info */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-background-tertiary rounded-full text-xs font-medium border border-card-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="cyber" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          >
            Vamos criar algo juntos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;