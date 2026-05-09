import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => t === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/70 backdrop-blur-xl border-b border-outline/10 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <Terminal className="text-primary-dim w-8 h-8 group-hover:text-primary transition-colors" />
          <span className="font-display text-2xl font-bold text-primary tracking-tighter">
            JAYESH SUTAR <span className="text-on-surface-variant/50 font-normal">// ENG</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-on-surface-variant/70 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-on-surface-variant/70 hover:text-primary transition-colors duration-300 p-2"
            aria-label="Toggle themes"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-on-surface p-2"
            aria-label="Toggle themes"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-on-surface p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[100] flex flex-col p-6"
          >
            <div className="flex justify-end mb-12">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl font-semibold text-on-surface hover:text-primary-dim"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
