
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse-glow"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            Jadson Henrique
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            <span className="text-primary">&gt;</span> Desenvolvedor Backend
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Especialista em Java, Spring Boot e Python, construindo soluções robustas 
            e escaláveis para sistemas modernos.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/jadsonhenrique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-border p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:animate-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/jadsonhenrique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-border p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:animate-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:jadson@email.com"
              className="cyber-border p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:animate-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('projetos')}
            className="cyber-border px-8 py-3 rounded-lg font-mono uppercase tracking-wider hover:bg-primary/10 transition-all duration-300 hover:animate-glow"
          >
            Ver Projetos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full relative">
          <div className="w-1 h-3 bg-primary rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
