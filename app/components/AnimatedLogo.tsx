"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState } from "react";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

const tapSpring = {
  type: "spring",
  stiffness: 600,
  damping: 30,
};

const snapSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
  restDelta: 0.01,
};

export function AnimatedLogo() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const snapToCenter = () => {
    if (!isDragging) return;
    animate(x, 0, snapSpring);
    animate(y, 0, snapSpring);
    setIsDragging(false);
  };

  return (
    <motion.div
      className={`flex relative cursor-grab active:cursor-grabbing select-none touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange1/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-blackblue rounded-xl ${isDragging ? "z-[100]" : ""}`}
      style={{
        x,
        y,
        touchAction: "none",
      }}
      role="img"
      aria-label="DIGITAL STEP Creative Agency"
      tabIndex={0}
      drag
      dragConstraints={false}
      dragElastic={0.1}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={snapToCenter}
      whileHover={{
        scale: 1.1,
        filter: "brightness(1.2)",
        transition: spring,
      }}
      whileTap={{
        scale: 0.95,
        rotate: [0, -2, 2, -2, 0],
        transition: tapSpring,
      }}
      whileDrag={{
        scale: 1.05,
        rotate: [0, -3, 3, -3, 0],
        filter: "brightness(1.15)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      transition={spring}
    >
      <motion.img
        src="/ydslien/logo.png"
        alt="DIGITAL STEP Creative Agency Logo"
        className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain pointer-events-none"
        drag={false}
        aria-hidden
      />
    </motion.div>
  );
}
