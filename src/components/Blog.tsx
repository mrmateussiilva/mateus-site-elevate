import { Button } from "@/components/ui/enhanced-button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Clean Code: A Arte da Legibilidade",
      excerpt: "Uma reflexão profunda sobre como escrever códigos elegantes e fáceis de manter, explorando princípios fundamentais do desenvolvimento.",
      date: "12 Mar 2025",
      readTime: "8 min",
      category: "Desenvolvimento",
      color: "neon-cyan",
    },
    {
      title: "O Bug Como Professor",
      excerpt: "Como transformar erros em oportunidades valiosas de aprendizado e crescimento na jornada de um desenvolvedor.",
      date: "05 Mar 2025",
      readTime: "6 min",
      category: "Filosofia",
      color: "neon-purple",
    },
    {
      title: "React Hooks: Magia Moderna",
      excerpt: "Explorando o poder dos React Hooks e como eles revolucionaram a forma como pensamos sobre estado e efeitos colaterais.",
      date: "28 Fev 2025",
      readTime: "12 min",
      category: "React",
      color: "neon-green",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-neon-green font-mono text-sm uppercase tracking-wider">// Blog</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="text-neon-cyan">O Código</span> e o <span className="text-neon-purple">Bug</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Compartilhando conhecimento, experiências e reflexões sobre o mundo da programação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group glass p-8 rounded-2xl hover-glow hover-lift cursor-pointer relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${post.color}/5 to-transparent group-hover:from-${post.color}/10 transition-all duration-300`} />
              
              <div className="relative z-10">
                {/* Category and date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-${post.color}/20 text-${post.color} rounded-full text-xs font-medium border border-${post.color}/30`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-foreground-muted text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-neon-cyan transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground-secondary mb-6 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground-muted text-xs">
                    <BookOpen className="w-3 h-3" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group-hover:text-neon-cyan transition-colors duration-300 p-0"
                  >
                    Ler mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Gostou do conteúdo?
            </h3>
            <p className="text-foreground-secondary mb-6">
              Assine minha newsletter para receber os posts mais recentes e insights exclusivos sobre desenvolvimento.
            </p>
            <Button variant="hero" size="lg">
              Assinar Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;