import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "matuespython@gmail.com",
      href: "mailto:matuespython@gmail.com",
      color: "neon-cyan",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (27) 99590-0071",
      href: "tel:+5511999999999",
      color: "neon-purple",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Espírito Santo, Brasil",
      href: "#",
      color: "neon-green",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mrmateussiilva",
      color: "neon-cyan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/",
      color: "neon-purple",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "neon-green",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-neon-green mb-4 text-left max-w-md mx-auto">
            <span className="text-neon-cyan">mateus@dev:~$</span> mail -s "Vamos conversar?" contato@
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Vamos <span className="text-neon-cyan">criar</span> algo <span className="text-neon-purple">incrível</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Tem um projeto em mente? Quer bater um papo sobre tecnologia? 
            Estou sempre aberto a novas oportunidades e conversas interessantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl hover-glow">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-neon-cyan" />
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background-tertiary border-card-border focus:border-neon-cyan"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background-tertiary border-card-border focus:border-neon-cyan"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-background-tertiary border-card-border focus:border-neon-cyan"
                  placeholder="Sobre o que você quer conversar?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-background-tertiary border-card-border focus:border-neon-cyan resize-none"
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="glass p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-background-tertiary hover:bg-card-hover transition-colors duration-300 group"
                  >
                    <div className={`p-3 rounded-full transition-colors duration-300 ${
                      info.color === 'neon-cyan' ? 'bg-neon-cyan/20 group-hover:bg-neon-cyan/30' :
                      info.color === 'neon-purple' ? 'bg-neon-purple/20 group-hover:bg-neon-purple/30' :
                      'bg-neon-green/20 group-hover:bg-neon-green/30'
                    }`}>
                      <info.icon className={`w-5 h-5 ${
                        info.color === 'neon-cyan' ? 'text-neon-cyan' :
                        info.color === 'neon-purple' ? 'text-neon-purple' :
                        'text-neon-green'
                      }`} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">{info.label}</p>
                      <p className="font-medium group-hover:text-neon-cyan transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-semibold mb-6">
                Redes Sociais
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-full bg-background-tertiary hover:bg-card-hover border border-card-border hover:border-neon-cyan transition-all duration-300 hover:shadow-cyan-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-foreground-secondary group-hover:text-neon-cyan transition-colors duration-300" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-background-tertiary rounded-lg">
                <p className="text-sm text-foreground-secondary">
                  <span className="text-neon-cyan font-mono">// status:</span> Disponível para novos projetos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;