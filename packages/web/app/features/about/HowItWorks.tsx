import { motion } from "framer-motion";

export interface Step {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface HowItWorksProps {
  title: string;
  description: string;
  steps: Step[];
}

export function HowItWorks({ title, description, steps }: HowItWorksProps) {
  const secondary = getComputedStyle(document.documentElement)
    .getPropertyValue("--secondary")
    .split(" ")
    .join(", ");

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between gap-8 bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:flex-row">
      <div className="flex-1 space-y-6">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
        <p className="mb-8 text-lg text-muted-foreground">{description}</p>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "hsl(var(--secondary))",
                }}
              >
                <step.icon
                  className="h-6 w-6"
                  style={{
                    color: "hsl(var(--secondary-foreground))",
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative h-[600px] flex-1">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 600"
          style={{ filter: `drop-shadow(0 0 20px hsl(--${secondary}))` }}
        >
          <title>Path Visualization</title>
          <motion.path
            d="M200,50 C300,100 100,200 200,250 C300,300 100,400 200,450 C300,500 100,600 200,550"
            stroke={`hsla(${secondary}, 0.5)`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          {[50, 150, 250, 350, 450].map((y, index) => (
            <motion.circle
              key={y}
              cx="200"
              cy={y}
              r="20"
              stroke={`hsla(${secondary}, 0.5)`}
              fill={`hsla(${secondary}, 0.6)`}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0.8] }}
              transition={{
                duration: 2,
                delay: index * 0.4,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
