import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Three.js", level: 75 },
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

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
              A Developer Who Sees Beyond
            </h3>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Like the wielder of powerful dōjutsu, I perceive the intricate patterns 
              in code that others might miss. My journey in development has been one 
              of continuous evolution, mastering new techniques and pushing the 
              boundaries of what's possible.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              I specialize in creating immersive web experiences that captivate users 
              and deliver exceptional performance. Every project is an opportunity to 
              demonstrate precision, creativity, and technical excellence.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
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
