
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-mono font-bold glow-text mb-2">
              &lt;JH /&gt;
            </div>
            <p className="text-muted-foreground">
              Desenvolvedor Backend • Java • Spring Boot • Python
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/jadsonhenrique"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-border p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:animate-glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jadsonhenrique"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-border p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:animate-glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jadson@email.com"
              className="cyber-border p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:animate-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2024 Jadson Henrique. Desenvolvido com React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
