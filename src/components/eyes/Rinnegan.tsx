import { motion } from "framer-motion";

interface RinneganProps {
  size?: number;
  isAnimating?: boolean;
}

const Rinnegan = ({ size = 200, isAnimating = true }: RinneganProps) => {
  const rings = [0.9, 0.75, 0.6, 0.45, 0.3];

  return (
    <motion.div
      className="relative eye-glow-rinnegan rounded-full"
      style={{ width: size, height: size }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      {/* Base eye */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 70% 70%) 0%, hsl(270 60% 45%) 50%, hsl(270 50% 25%) 100%)",
        }}
      />

      {/* Concentric rings */}
      <motion.div
        className="absolute inset-0"
        animate={isAnimating ? { rotate: -360 } : {}}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      >
        {rings.map((scale, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border-2"
            style={{
              width: size * scale,
              height: size * scale,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderColor: "hsl(270 40% 20%)",
            }}
            animate={isAnimating ? { opacity: [0.6, 1, 0.6] } : {}}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.15,
            }}
          />
        ))}
      </motion.div>

      {/* Tomoe on outer ring */}
      <motion.div
        className="absolute inset-0"
        animate={isAnimating ? { rotate: 360 } : {}}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
        {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              width: size * 0.08,
              height: size * 0.12,
              top: "8%",
              left: "50%",
              transform: `translateX(-50%) rotate(${rotation}deg)`,
              transformOrigin: `50% ${size * 0.42}px`,
            }}
          >
            <svg viewBox="0 0 20 30" className="w-full h-full">
              <ellipse cx="10" cy="10" rx="6" ry="8" fill="hsl(270 40% 20%)" />
              <path
                d="M10 10 Q15 20 10 28 Q5 20 10 10"
                fill="hsl(270 40% 20%)"
              />
            </svg>
          </div>
        ))}
      </motion.div>

      {/* Center pupil */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.15,
          height: size * 0.15,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, hsl(270 30% 10%) 60%, hsl(270 40% 20%) 100%)",
        }}
      />

      {/* Reflection */}
      <div
        className="absolute rounded-full bg-white/20"
        style={{
          width: size * 0.08,
          height: size * 0.08,
          top: "28%",
          left: "33%",
        }}
      />
    </motion.div>
  );
};

export default Rinnegan;
