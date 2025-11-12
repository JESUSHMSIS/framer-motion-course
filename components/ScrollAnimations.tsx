"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(86, 1, 245)", "rgb(33, 23, 240)", "rgb(1, 245, 13)"],
  );
  return (
    <div>
      <motion.div
        style={{
          scaleX: scaleX,
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      ></motion.div>
      <motion.div
        className="h-[100vh] bg-red-400 "
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <p>hola</p>
      </motion.div>
      <motion.div
        className="h-[100vh] w-full bg-blue-500"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        hola a todso
      </motion.div>
      <motion.div
        className="h-[100vh] w-full bg-amber-300"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        hola a todso
      </motion.div>
    </div>
  );
};

export default ScrollAnimations;
