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
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(0 100% 50%) 0%, hsl(0 100% 40%) 40%, hsl(0 80% 25%) 70%, hsl(0 60% 10%) 100%)",
          boxShadow: "0 0 60px hsl(0 100% 50% / 0.8), 0 0 100px hsl(0 100% 50% / 0.5), inset 0 0 30px hsl(0 0% 0% / 0.5)",
        }}
      />

      {/* Inner red ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, hsl(0 100% 55%) 0%, hsl(0 100% 45%) 60%, hsl(0 80% 30%) 100%)",
        }}
      />

      {/* Mangekyō pattern container - rotates */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isAnimating ? { rotate: 360 } : {}}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      >
        <svg
          viewBox="0 0 200 200"
          style={{ width: size * 0.9, height: size * 0.9 }}
          className="absolute"
        >
          {/* Three curved blades - Mangekyō style */}
          {[0, 120, 240].map((rotation) => (
            <g key={rotation} transform={`rotate(${rotation} 100 100)`}>
              {/* Curved blade with teardrop end */}
              <path
                d="M100 100 
                   Q 85 70, 100 45
                   Q 115 70, 100 100
                   M100 45
                   Q 65 55, 50 85
                   Q 70 75, 100 100"
                fill="#0a0a0a"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              {/* Outer curved extension */}
              <path
                d="M100 45 
                   C 75 40, 55 55, 45 80
                   Q 60 65, 100 100"
                fill="#0a0a0a"
                stroke="#0a0a0a"
                strokeWidth="3"
              />
              {/* Circle at the tip */}
              <circle cx="100" cy="48" r="12" fill="#0a0a0a" />
            </g>
          ))}
          
          {/* Center connecting ring */}
          <circle 
            cx="100" 
            cy="100" 
            r="22" 
            fill="none" 
            stroke="#0a0a0a" 
            strokeWidth="8"
          />
        </svg>
      </motion.div>

      {/* Center pupil */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.18,
          height: size * 0.18,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #000 60%, #1a0000 100%)",
          boxShadow: "inset 0 0 15px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)",
        }}
      />

      {/* Reflection highlight */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.12,
          height: size * 0.08,
          top: "22%",
          left: "25%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
          borderRadius: "50%",
          transform: "rotate(-20deg)",
        }}
      />
    </motion.div>
  );
};

export default Sharingan;
