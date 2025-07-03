
const About = () => {
  const skills = [
    'Java & Spring Boot',
    'Python & FastAPI',
    'PostgreSQL & MongoDB', 
    'RabbitMQ & Apache Kafka',
    'Docker & Kubernetes',
    'AWS & Azure',
    'Microservices',
    'REST & GraphQL APIs'
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-4xl font-bold mb-6 glow-text">
              &lt;Sobre Mim /&gt;
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Desenvolvedor Backend apaixonado por criar soluções robustas e escaláveis. 
                Com expertise em <span className="text-primary font-mono">Java</span> e 
                <span className="text-primary font-mono"> Spring Boot</span>, desenvolvo 
                APIs RESTful e microservices que atendem milhares de usuários.
              </p>
              <p>
                Especialista em arquiteturas distribuídas, trabalhando com mensageria 
                através do <span className="text-primary font-mono">RabbitMQ</span> e 
                bancos de dados relacionais. Sempre buscando as melhores práticas em 
                clean code e design patterns.
              </p>
              <p>
                Experiência sólida com <span className="text-primary font-mono">Python</span> 
                para automação e desenvolvimento de APIs, além de conhecimento em 
                tecnologias cloud e containerização.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="cyber-border p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center glow-text">
                Stack Principal
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm">{skill}</span>
                  </div>
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
