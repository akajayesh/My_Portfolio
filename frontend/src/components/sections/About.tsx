import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../../data/content";

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="px-6 md:px-16 max-w-[1440px] mx-auto py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <div className="sticky top-32">
            <h2 className="font-display text-4xl md:text-5xl text-on-surface">
              <span className="text-primary-dim text-2xl md:text-3xl block mb-2 font-mono">01.</span>
              About Me
            </h2>
            
            <div className="mt-8 hidden md:block">
              <div className="w-[1px] h-32 bg-gradient-to-b from-primary-dim to-transparent ml-4"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-8 glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="rim-light absolute inset-0 pointer-events-none opacity-50"></div>
          
          <div className="space-y-6 font-sans text-lg text-on-surface-variant leading-relaxed relative z-10">
            {about.paragraphs.map((text, i) => (
              <p key={i}>
                {text.split(/technical excellence over shortcuts|backend performance|artificial intelligence/).reduce((acc: any[], part, j, arr) => {
                  acc.push(part);
                  if (j < arr.length - 1) {
                    const match = text.match(/technical excellence over shortcuts|backend performance|artificial intelligence/g)?.[j];
                    if (match === 'technical excellence over shortcuts') {
                      acc.push(<span key={match} className="text-on-surface font-medium italic">{match}</span>);
                    } else if (match === 'backend performance') {
                      acc.push(<span key={match} className="text-primary-dim">{match}</span>);
                    } else if (match === 'artificial intelligence') {
                      acc.push(<span key={match} className="text-secondary">{match}</span>);
                    }
                  }
                  return acc;
                }, [])}
              </p>
            ))}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 mt-8 border-t border-white/10">
              <div>
                <div className="text-primary-dim font-display text-xl mb-1">Backend</div>
                <div className="font-mono text-sm opacity-80">Distributed Systems</div>
              </div>
              <div>
                <div className="text-primary-dim font-display text-xl mb-1">Full Stack</div>
                <div className="font-mono text-sm opacity-80">Modern UX/UI</div>
              </div>
              <div>
                <div className="text-primary-dim font-display text-xl mb-1">AI/ML</div>
                <div className="font-mono text-sm opacity-80">NLP & Vision</div>
              </div>
              <div>
                <div className="text-primary-dim font-display text-xl mb-1">Testing</div>
                <div className="font-mono text-sm opacity-80">QA Automation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
