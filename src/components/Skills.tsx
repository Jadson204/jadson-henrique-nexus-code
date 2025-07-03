
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Python", level: 85 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "ElasticSearch", level: 70 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 75 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 }
      ]
    },
    {
      title: "Messaging",
      skills: [
        { name: "RabbitMQ", level: 90 },
        { name: "Apache Kafka", level: 80 },
        { name: "WebSockets", level: 75 },
        { name: "gRPC", level: 70 }
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 glow-text animate-fade-in">
            &lt;Habilidades /&gt;
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções robustas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="cyber-border p-6 rounded-lg animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center glow-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">{skill.name}</span>
                      <span className="text-primary text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-cyan-400 h-2 rounded-full transition-all duration-1000 animate-pulse-glow"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates/Achievements */}
        <div className="mt-16 text-center">
          <div className="cyber-border p-6 rounded-lg inline-block animate-fade-in">
            <h3 className="text-xl font-bold mb-4 glow-text">Certificações</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary font-mono rounded-full border border-primary/20">
                Oracle Certified Professional
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary font-mono rounded-full border border-primary/20">
                AWS Solutions Architect
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary font-mono rounded-full border border-primary/20">
                Spring Professional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
