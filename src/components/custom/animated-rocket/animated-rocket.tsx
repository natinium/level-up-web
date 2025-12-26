"use client";

import Image from "next/image";
import { motion } from "motion/react";

/**
 * A component that displays an animated rocket image.
 * The rocket floats up and down in a smooth, continuous loop.
 *
 * @returns {React.ReactElement} The rendered animated rocket component.
 */
export function AnimatedRocket() {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }} // Animate the y-axis to create a float effect
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse", // Smoothly reverse the animation
      }}
    >
      <Image
        src="/assets/images/rocket.png"
        alt="Rocket"
        width={200}
        height={200}
        priority
      />
    </motion.div>
  );
}
