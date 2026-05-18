import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "TranQuility Inc.",
    role: "Software Engineer Intern",
    period: "Mar 2026 - May 2026",
    highlights: [
      "Contributed to full-stack features for a startup platform, collaborating with engineers to build scalable application components",
      "Implemented and debugged RESTful API endpoints and backend logic to support core platform functionality"
    ],
    color: "primary"
  },
  {
    company: "Klees ABC & Party Mart",
    role: "Software Engineer · Freelance",
    period: "Jan 2026 - May 2026",
    highlights: [
      "Built and maintained internal systems supporting retail operations and impacting real customers and revenue",
      "Designed and deployed a responsive website improving mobile usability and page load performance by ~30%",
      "Applied secure coding and database design principles across all deliverables"
    ],
    color: "secondary"
  },
  {
    company: "Kithli",
    role: "Software Engineer Intern",
    period: "Aug 2025 - Dec 2025",
    highlights: [
      "Enhanced the booking experience by building Kithli's core booking system, a crucial platform feature for member scheduling",
      "Connected outpatients with post-procedure companions, creating supportive community-driven patient experiences",
      "Collaborated with designers and engineers to refine usability and ensure product vision translated into real-world functionality"
    ],
    color: "primary"
  },
  {
    company: "Momentum360™",
    role: "Software Engineer Intern",
    period: "May 2025 - Aug 2025",
    highlights: [
      "Developed a secure, scalable login system for the MentorMe Vault platform",
      "Integrated Google OAuth 2.0 for streamlined user authentication and implemented 2FA to strengthen account security",
      "Added Google reCAPTCHA to detect and block automated bots"
    ],
    color: "secondary"
  },
  {
    company: "Venture Starters",
    role: "Student Intern",
    period: "Sep 2024 - Apr 2025",
    highlights: [
      "Analyzed 150+ startup pitches evaluating market fit, scalability, and competitive edge using internal tracking tools",
      "Conducted market research using Python for web scraping and SQL for data querying",
      "Assisted in automating the pitch evaluation pipeline using scripts and templates to improve consistency and speed"
    ],
    color: "primary"
  },
  {
    company: "Outlier",
    role: "AI Training & Evaluation Intern",
    period: "Sep 2024 - Dec 2024",
    highlights: [
      "Reviewed and refined generative AI outputs to improve model performance on STEM-related writing tasks",
      "Provided structured technical feedback on AI-generated explanations in math, computer science, and data science",
      "Collaborated asynchronously with AI trainers and developers in an agile workflow"
    ],
    color: "secondary"
  },
  {
    company: "Best Western Hotels & Resorts",
    role: "Team Manager · Part-time",
    period: "Jan 2023 - Aug 2024",
    highlights: [
      "Managed team operations and coordinated staff across shifts in a fast-paced hospitality environment"
    ],
    color: "primary"
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 bg-muted/10 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-glow-purple">Work</span>{" "}
            <span className="text-muted-foreground">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-16" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                  exp.color === "primary"
                    ? "bg-primary border-background"
                    : "bg-secondary border-background"
                }`}
                style={{
                  boxShadow: exp.color === "primary"
                    ? "0 0 20px hsl(0 100% 50% / 0.5)"
                    : "0 0 20px hsl(270 70% 55% / 0.5)"
                }}
              />

              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="font-body text-muted-foreground flex items-center gap-2">
                      <Briefcase size={14} />
                      {exp.role}
                    </p>
                  </div>
                  <span className="font-body text-sm text-muted-foreground flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="font-body text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        exp.color === "primary" ? "bg-primary" : "bg-secondary"
                      }`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
