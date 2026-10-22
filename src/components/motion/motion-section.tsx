import type { ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";

export type MotionAnimation =
  "fade" | "rise" | "slide-left" | "slide-right" | "scale";

const animations: Record<
  MotionAnimation,
  { initial: Record<string, number>; transition: object }
> = {
  fade: {
    initial: { opacity: 0 },
    transition: { duration: 1.2, ease: "easeOut" },
  },
  rise: {
    initial: { opacity: 0, y: 22 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
  "slide-left": {
    initial: { opacity: 0, x: -28 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
  "slide-right": {
    initial: { opacity: 0, x: 28 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
  scale: {
    initial: { opacity: 0, scale: 0.97 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

type MotionSectionProps = ComponentPropsWithoutRef<"section"> & {
  animation?: MotionAnimation;
};

export function MotionSection({
  children,
  animation = "rise",
  ...props
}: MotionSectionProps) {
  const selected = animations[animation];

  return (
    <section {...props}>
      <motion.div
        initial={selected.initial}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        viewport={{
          once: true,
          amount: 0.01,
          margin: "0px 0px 0px 0px",
        }}
        transition={selected.transition}
      >
        {children}
      </motion.div>
    </section>
  );
}
