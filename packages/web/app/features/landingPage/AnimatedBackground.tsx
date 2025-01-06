import { motion } from "framer-motion";

export function AnimatedBackground() {
  const secondary = getComputedStyle(document.documentElement)
    .getPropertyValue("--secondary")
    .split(" ")
    .join(", ");
  const primary = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary")
    .split(" ")
    .join(", ");

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, hsl(${secondary}), hsl(${primary}))`,
      }}
    >
      {/* Gradient circles that follow mouse movement */}
      <motion.div
        className="absolute h-[800px] w-[800px] rounded-full blur-[100px]"
        style={{
          background: `linear-gradient(to right, hsla(${secondary}, 0.4), hsla(${primary}, 0.4))`,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 50,
        }}
      />

      {/* Floating shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          className="absolute h-[600px] w-[600px] rounded-full blur-[80px]"
          style={{
            background: `linear-gradient(to bottom right, hsla(${primary}, 0.3), hsla(${secondary}, 0.3))`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Animated gradient stripes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`stripe-${
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              i
            }`}
            className="absolute h-[200px] w-[2000px]"
            style={{
              background: `linear-gradient(to right, transparent, hsla(${primary}, 0.4), transparent)`,
            }}
            initial={{
              x: "-100%",
              y: i * 300,
              rotate: -45,
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
