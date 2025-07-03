
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "API REST completa para e-commerce com Spring Boot, incluindo sistema de pagamentos, gestão de estoque e notificações em tempo real via RabbitMQ.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ", "Docker"],
      github: "https://github.com/jadsonhenrique/ecommerce-api",
      demo: "https://ecommerce-api-demo.com"
    },
    {
      title: "Microservices Architecture",
      description: "Arquitetura de microservices para sistema bancário com Spring Cloud, implementando padrões de circuit breaker, service discovery e distributed tracing.",
      tech: ["Java", "Spring Cloud", "Kubernetes", "Redis", "Kafka"],
      github: "https://github.com/jadsonhenrique/banking-microservices",
      demo: null
    },
    {
      title: "Data Processing Pipeline",
      description: "Pipeline de processamento de dados em Python para análise de logs em tempo real, utilizando Apache Kafka e ElasticSearch para indexação.",
      tech: ["Python", "FastAPI", "Kafka", "ElasticSearch", "Docker"],
      github: "https://github.com/jadsonhenrique/data-pipeline",
      demo: "https://data-pipeline-demo.com"
    },
    {
      title: "Task Management API",
      description: "Sistema de gerenciamento de tarefas com autenticação JWT, cache Redis e documentação automática com Swagger.",
      tech: ["Java", "Spring Security", "MongoDB", "Redis", "AWS"],
      github: "https://github.com/jadsonhenrique/task-manager",
      demo: "https://task-manager-demo.com"
    }
  ];

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 glow-text animate-fade-in">
            &lt;Projetos /&gt;
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, focados em backend e arquitetura de sistemas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="cyber-border p-6 rounded-lg hover:bg-primary/5 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold glow-text group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
