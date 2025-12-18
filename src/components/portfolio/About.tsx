import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code } from "lucide-react";

const skills = [
  { name: "React / TypeScript", level: 95 },
  { name: "Python / Java", level: 90 },
  { name: "Node.js / Express", level: 88 },
  { name: "PostgreSQL / MongoDB", level: 85 },
  { name: "REST APIs / FastAPI", level: 90 },
];

const techStack = [
  "JavaScript", "TypeScript", "Python", "Java", "C/C++", "Golang",
  "React", "Node.js", "Express.js", "TailwindCSS", "FastAPI",
  "PostgreSQL", "MongoDB", "Firebase", "Git", "Linux"
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-glow-red">About</span>{" "}
            <span className="text-muted-foreground">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
              Software Engineer & Problem Solver
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="text-primary" size={20} />
                <span className="font-body">UNC Charlotte - BS Computer Science (GPA: 3.87)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="text-secondary" size={20} />
                <span className="font-body">Charlotte, NC</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Code className="text-primary" size={20} />
                <span className="font-body">Software Engineering Concentration</span>
              </div>
            </div>

            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              I'm a passionate software engineer with experience building full-stack applications, 
              implementing secure authentication systems, and developing AI-powered tools. 
              Currently interning at Kithli, leading React development for member booking flows.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              With a strong foundation in data structures, algorithms, and software engineering 
              principles, I focus on creating scalable, performant solutions that make a real impact.
            </p>

            {/* Tech stack tags */}
            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-body text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="font-display text-lg font-semibold mb-6 text-foreground">Core Skills</h4>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-body text-foreground font-medium">
                    {skill.name}
                  </span>
                  <span className="font-body text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, hsl(0 100% 50%) 0%, hsl(270 70% 55%) 100%)`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
