import { motion } from "motion/react";
import { Download, ChevronRight, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/content";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-[1440px] mx-auto relative pt-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl"
      >
        <motion.div variants={itemVariants} className="font-mono text-primary-dim mb-4 uppercase tracking-[0.3em] text-sm md:text-base">
          System.initialize({PORTFOLIO_DATA.hero.name}_Sutar)
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="font-display text-[clamp(48px,8vw,100px)] leading-[0.9] mb-8 text-on-surface">
          Hi, I'm <span className="text-primary-dim text-glow">{PORTFOLIO_DATA.hero.name}</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-x-4 gap-y-3 mb-10 items-center">
          {PORTFOLIO_DATA.hero.roles.map((role, idx) => (
            <div key={role} className="flex items-center gap-4">
              <span className="font-mono text-xs md:text-sm bg-surface-highest px-3 py-1 text-primary-dim border border-primary-dim/30">
                {role}
              </span>
              {idx !== PORTFOLIO_DATA.hero.roles.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:block"></div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl text-on-surface-variant max-w-3xl mb-12 border-l-2 border-primary-dim/20 pl-6 leading-relaxed">
          {PORTFOLIO_DATA.hero.description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
          <a href={PORTFOLIO_DATA.hero.resumeLink} target="_blank" rel="noopener noreferrer" className="bg-primary-dim hover:bg-transparent hover:text-primary-dim text-on-primary font-mono px-8 py-4 flex items-center gap-3 border-2 border-primary-dim transition-all duration-300">
            DOWNLOAD RESUME
            <Download className="w-5 h-5" />
          </a>
          
          <a href="#projects" className="border border-white/20 hover:border-secondary text-on-surface font-mono px-8 py-4 transition-all duration-300 bg-white/5 backdrop-blur-sm flex items-center gap-2 group">
            VIEW PROJECTS
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex gap-4 ml-2">
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary-dim hover:border-primary-dim transition-all bg-surface-highest/50">
              <Terminal className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Background Image / Gradients */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-10 md:opacity-20 pointer-events-none overflow-hidden z-0 mask-image-gradient">
        <img 
          src={PORTFOLIO_DATA.hero.heroImage} 
          alt="High-tech circuitry" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent md:hidden" />
      </div>
    </section>
  );
}
