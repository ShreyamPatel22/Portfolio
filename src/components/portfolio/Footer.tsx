import { Github, Linkedin, Twitter } from "lucide-react";
import Sharingan from "../eyes/Sharingan";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Sharingan size={32} isAnimating={false} />
          <span className="font-display font-bold text-xl text-foreground">Portfolio</span>
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>

        <p className="text-muted-foreground font-body text-sm">
          © 2024 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
