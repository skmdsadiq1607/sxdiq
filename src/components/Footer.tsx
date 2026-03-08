import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Shaik Kemple Mohammed Sadiq. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/shaik-sadiq-b1650a377" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="mailto:skmdsadiq1607@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="ml-2 p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
