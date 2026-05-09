import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const interval = 30; // ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a beat before dismissing
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center technical-grid"
    >
      <div className="flex flex-col items-center max-w-sm w-full px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary-dim font-mono mb-4 text-sm tracking-widest uppercase"
        >
          System.Initialize()
        </motion.div>
        
        <div className="w-full h-1 bg-surface-highest rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary-dim"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 flex justify-between w-full text-on-surface-variant font-mono text-xs">
          <span>LOADING ASSETS</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
