import { motion, AnimatePresence } from "framer-motion";
import Sharingan from "./eyes/Sharingan";
import Rinnegan from "./eyes/Rinnegan";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.5,
        filter: "blur(20px)",
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "hsl(0 100% 50%)" : "hsl(270 70% 60%)",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Eyes container */}
      <motion.div
        className="flex items-center gap-16 md:gap-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sharingan - Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Sharingan size={window.innerWidth < 768 ? 120 : 180} />
        </motion.div>

        {/* Rinnegan - Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Rinnegan size={window.innerWidth < 768 ? 120 : 180} />
        </motion.div>
      </motion.div>

      {/* Energy lines connecting eyes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.line
          x1="30%"
          y1="50%"
          x2="70%"
          y2="50%"
          stroke="url(#energyGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0 100% 50%)" />
            <stop offset="50%" stopColor="hsl(300 70% 50%)" />
            <stop offset="100%" stopColor="hsl(270 70% 60%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <motion.div
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.p
          className="text-muted-foreground font-body text-lg tracking-widest uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Awakening...
        </motion.p>
      </motion.div>

      {/* Skip hint */}
      <motion.button
        className="absolute bottom-8 right-8 text-muted-foreground/50 text-sm font-body hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onComplete}
      >
        Skip →
      </motion.button>

      {/* Auto transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 4 }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  );
};

export default IntroAnimation;
