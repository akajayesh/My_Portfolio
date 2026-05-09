import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      <div className="w-[2px] h-[100px] bg-white/5 relative overflow-hidden rounded-full">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-secondary origin-top"
          style={{ scaleY, height: '100%' }}
        />
      </div>
      <div className="rotate-90 origin-center whitespace-nowrap font-mono text-[10px] text-secondary tracking-[0.4em] uppercase">
        Status: Recruiting_Mode
      </div>
    </aside>
  );
}
