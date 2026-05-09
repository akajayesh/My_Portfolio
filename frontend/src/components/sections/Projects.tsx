import { motion } from "motion/react";
import { ExternalLink, Github, Globe } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/content";

export function Projects() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'globe': return <Globe className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="px-6 md:px-16 max-w-[1440px] mx-auto py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-16 gap-6"
      >
        <h2 className="font-display text-4xl md:text-5xl text-on-surface">
          <span className="text-primary-dim text-2xl md:text-3xl block mb-2 font-mono">02.</span>
          Featured Projects
        </h2>
        <div className="font-mono text-sm text-on-surface-variant uppercase tracking-widest hidden md:block">
          // Index of recent deployments
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card flex flex-col h-full group"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 bg-surface-highest/90 backdrop-blur border border-white/10 text-on-surface font-mono text-[10px] px-2 py-1 tracking-wider uppercase">
                {project.category}
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="font-display text-2xl mb-4 text-on-surface group-hover:text-primary-dim transition-colors">
                {project.title}
              </h3>
              <p className="font-sans text-on-surface-variant mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-surface-highest text-primary-dim font-mono text-[10px] px-2 py-0.5 border border-primary-dim/10 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-6 border-t border-white/5 pt-6 mt-auto">
                {project.links.map(link => (
                  <a 
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface hover:text-primary-dim transition-colors flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider"
                  >
                    {link.label} {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
