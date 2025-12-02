import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cpu, Film } from "lucide-react";

const projects = [
  {
    title: "LifeLens",
    subtitle: "AI Emergency Detection Tool",
    description: "Full-stack system using HuggingFace DETR for real-time emergency object detection with secure API routing and RBAC authentication",
    tags: ["React", "FastAPI", "HuggingFace", "DETR", "Python"],
    icon: Cpu,
    color: "primary",
    date: "May 2025"
  },
  {
    title: "Movie Recommendation System",
    subtitle: "Personalized Recommendations Engine",
    description: "Modular Express.js engine that generates personalized movie recommendations with session persistence and smart filtering",
    tags: ["Express.js", "Node.js", "JavaScript", "REST API"],
    icon: Film,
    color: "secondary",
    date: "Feb 2025"
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-glow-red">Featured</span>{" "}
            <span className="text-muted-foreground">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                      project.color === "primary"
                        ? "bg-gradient-to-br from-primary to-transparent"
                        : "bg-gradient-to-br from-secondary to-transparent"
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${
                        project.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                      }`}>
                        <IconComponent 
                          className={project.color === "primary" ? "text-primary" : "text-secondary"} 
                          size={24} 
                        />
                      </div>
                      <span className="text-sm font-body text-muted-foreground">{project.date}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold mb-1 text-foreground group-hover:text-glow-red transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className={`font-body text-sm mb-4 ${
                      project.color === "primary" ? "text-primary" : "text-secondary"
                    }`}>
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground font-body mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-body text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors font-body text-sm"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
