import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Phantom Dashboard",
    description: "A real-time analytics dashboard with dark theme and stunning visualizations",
    tags: ["React", "D3.js", "WebSocket"],
    color: "primary",
  },
  {
    title: "Void Commerce",
    description: "E-commerce platform with immersive 3D product showcases",
    tags: ["Next.js", "Three.js", "Stripe"],
    color: "secondary",
  },
  {
    title: "Neural Canvas",
    description: "AI-powered design tool that generates artwork from text descriptions",
    tags: ["Python", "TensorFlow", "React"],
    color: "primary",
  },
  {
    title: "Echo Social",
    description: "Privacy-focused social platform with end-to-end encryption",
    tags: ["TypeScript", "PostgreSQL", "WebRTC"],
    color: "secondary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 bg-muted/20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-glow-purple">My</span>{" "}
            <span className="text-muted-foreground">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-glow-red transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-body text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors font-body"
                    >
                      <Github size={18} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
