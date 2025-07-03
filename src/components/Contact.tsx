
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jadson@email.com",
      link: "mailto:jadson@email.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 glow-text animate-fade-in">
            &lt;Contato /&gt;
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-8 glow-text">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center space-x-4 p-4 cyber-border rounded-lg hover:bg-primary/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="cyber-border p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 cyber-border rounded-lg">
              <h4 className="text-lg font-bold mb-4 glow-text">
                Disponibilidade
              </h4>
              <p className="text-muted-foreground">
                Atualmente <span className="text-primary font-mono">disponível</span> para 
                novos projetos freelance e oportunidades de trabalho remoto.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="cyber-border bg-background/50"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="cyber-border bg-background/50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono mb-2">
                  Assunto *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="cyber-border bg-background/50"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="cyber-border bg-background/50 min-h-32"
                  placeholder="Descreva seu projeto ou como posso ajudar..."
                />
              </div>

              <Button
                type="submit"
                className="w-full cyber-border bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary border-primary font-mono uppercase tracking-wider"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
