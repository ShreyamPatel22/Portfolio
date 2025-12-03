import { Github, Linkedin, Mail } from "lucide-react";
import Sharingan from "../eyes/Sharingan";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Sharingan size={32} isAnimating={false} />
          <span className="font-display font-bold text-xl text-foreground">Shreyam Patel</span>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/ShreyamPatel22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/shreyampatel2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:spate301@charlotte.edu"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <p className="text-muted-foreground font-body text-sm">
          © 2024 Shreyam Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
