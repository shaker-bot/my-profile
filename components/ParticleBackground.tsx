"use client";

import { motion } from "framer-motion";

// Fixed particle positions to avoid hydration mismatches
const PARTICLES = [
  { id: 0,  x: 5,  y: 8,  size: 3,   opacity: 0.12, duration: 22, dx: 12,  dy: -8  },
  { id: 1,  x: 88, y: 15, size: 2,   opacity: 0.10, duration: 28, dx: -10, dy: 15  },
  { id: 2,  x: 42, y: 75, size: 4,   opacity: 0.08, duration: 35, dx: 8,   dy: -20 },
  { id: 3,  x: 75, y: 45, size: 2.5, opacity: 0.15, duration: 20, dx: -15, dy: 10  },
  { id: 4,  x: 18, y: 90, size: 3,   opacity: 0.10, duration: 25, dx: 20,  dy: -12 },
  { id: 5,  x: 92, y: 70, size: 4,   opacity: 0.08, duration: 30, dx: -8,  dy: -15 },
  { id: 6,  x: 35, y: 30, size: 2,   opacity: 0.12, duration: 18, dx: 10,  dy: 18  },
  { id: 7,  x: 60, y: 85, size: 3.5, opacity: 0.10, duration: 32, dx: -12, dy: -10 },
  { id: 8,  x: 15, y: 50, size: 2,   opacity: 0.08, duration: 24, dx: 15,  dy: 12  },
  { id: 9,  x: 80, y: 25, size: 3,   opacity: 0.12, duration: 28, dx: -18, dy: 8   },
  { id: 10, x: 50, y: 10, size: 4,   opacity: 0.10, duration: 20, dx: 6,   dy: 20  },
  { id: 11, x: 95, y: 90, size: 2.5, opacity: 0.08, duration: 36, dx: -10, dy: -8  },
  { id: 12, x: 28, y: 65, size: 3,   opacity: 0.15, duration: 22, dx: 18,  dy: -15 },
  { id: 13, x: 70, y: 55, size: 2,   opacity: 0.10, duration: 26, dx: -6,  dy: 12  },
  { id: 14, x: 45, y: 40, size: 3.5, opacity: 0.08, duration: 30, dx: 12,  dy: -18 },
];

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-500 dark:bg-blue-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            x: [0, p.dx, 0, -(p.dx / 2), 0],
            y: [0, p.dy, 0, -(p.dy / 2), 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
