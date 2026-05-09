import { Github, Send, Terminal, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-16 md:py-24 border-t border-white/5 bg-surface-container-lowest mt-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="font-display text-2xl font-black text-primary">J.SUTAR</h2>
          <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant/50">
            © {new Date().getFullYear()} Jayesh Sutar. Built for the future.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/jayeshsutar" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant/50 hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(235,178,255,0.8)] transition-all duration-300 hover:-translate-y-1">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/jayeshsutar" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant/50 hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(235,178,255,0.8)] transition-all duration-300 hover:-translate-y-1">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:jayeshsutar312@gmail.com" className="text-on-surface-variant/50 hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(235,178,255,0.8)] transition-all duration-300 hover:-translate-y-1">
            <Send className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
