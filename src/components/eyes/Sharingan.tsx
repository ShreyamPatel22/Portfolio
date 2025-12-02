import { motion } from "framer-motion";

interface SharinganProps {
  size?: number;
  isAnimating?: boolean;
}

const Sharingan = ({ size = 200, isAnimating = true }: SharinganProps) => {
  return (
    <motion.div
      className="relative eye-glow-sharingan rounded-full"
      style={{ width: size, height: size }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(0 100% 55%) 0%, hsl(0 80% 35%) 60%, hsl(0 60% 20%) 100%)",
        }}
      />
      
      {/* Tomoe container - rotates */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isAnimating ? { rotate: 360 } : {}}
        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
      >
        {/* Three Tomoe positioned around the center */}
        {[0, 120, 240].map((rotation, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              width: size * 0.22,
              height: size * 0.28,
              transform: `rotate(${rotation}deg) translateY(-${size * 0.22}px)`,
            }}
          >
            <svg viewBox="0 0 40 50" className="w-full h-full">
              {/* Tomoe shape - comma/teardrop */}
              <circle cx="20" cy="15" r="10" fill="#0a0a0a" />
              <path
                d="M20 15 Q30 30 20 48 Q10 30 20 15"
                fill="#0a0a0a"
              />
            </svg>
          </div>
        ))}
      </motion.div>
      
      {/* Center pupil */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.2,
          height: size * 0.2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #000 70%, #1a1a1a 100%)",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.8)",
        }}
      />
      
      {/* Reflection */}
      <div
        className="absolute rounded-full bg-white/40"
        style={{
          width: size * 0.1,
          height: size * 0.1,
          top: "25%",
          left: "30%",
        }}
      />
    </motion.div>
  );
};

export default Sharingan;
