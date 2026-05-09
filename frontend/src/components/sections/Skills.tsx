import { motion } from "motion/react";
import { Layers, Server, BrainCircuit, Settings, Wrench } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/content";

export function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="px-6 md:px-16 max-w-[1440px] mx-auto py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl text-on-surface">
          <span className="text-primary-dim text-2xl md:text-3xl block mb-2 font-mono">03.</span>
          Technical Arsenal
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 group hover:border-secondary transition-colors"
        >
          <div className="flex items-center gap-4 mb-8">
            <Layers className="text-secondary w-8 h-8 group-hover:scale-110 transition-transform" />
            <h4 className="font-mono text-lg font-bold tracking-widest uppercase">Frontend</h4>
          </div>
          <ul className="space-y-4 font-mono text-sm text-on-surface-variant">
            {skills.frontend.map(skill => (
              <li key={skill.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                {skill.name} <span className="text-primary-dim">{skill.proficiency}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 group border-primary-dim/20 shadow-[0_0_15px_rgba(0,219,231,0.05)] hover:shadow-[0_0_20px_rgba(0,219,231,0.15)]"
        >
          <div className="flex items-center gap-4 mb-8">
            <Server className="text-primary-dim w-8 h-8 group-hover:scale-110 transition-transform" />
            <h4 className="font-mono text-lg font-bold tracking-widest uppercase">Backend</h4>
          </div>
          <ul className="space-y-4 font-mono text-sm text-on-surface-variant">
            {skills.backend.map(skill => (
              <li key={skill.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                {skill.name} <span className="text-primary-dim">{skill.proficiency}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AI ML */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 group hover:border-secondary transition-colors"
        >
          <div className="flex items-center gap-4 mb-8">
            <BrainCircuit className="text-secondary-dim w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
            <h4 className="font-mono text-lg font-bold tracking-widest uppercase">AI / ML</h4>
          </div>
          <ul className="space-y-4 font-mono text-sm text-on-surface-variant">
            {skills.ai.map(skill => (
              <li key={skill.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                {skill.name} <span className="text-primary-dim">{skill.proficiency}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tools & Testing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 grid md:grid-cols-2 gap-8 mt-4"
        >
          <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Settings className="text-primary-dim w-6 h-6" />
              <span className="font-mono uppercase tracking-wider">Testing & QA</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.testing.map(tool => (
                <span key={tool} className="px-2 py-1 bg-surface-highest text-[10px] font-mono border border-white/5 text-on-surface-variant">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Wrench className="text-primary-dim w-6 h-6" />
              <span className="font-mono uppercase tracking-wider">Tools & Tech</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(tool => (
                <span key={tool} className="px-2 py-1 bg-surface-highest text-[10px] font-mono border border-white/5 text-on-surface-variant">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
