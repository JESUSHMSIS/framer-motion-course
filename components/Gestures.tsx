"use client";

import { motion, MotionConfig } from "motion/react";

const Gestures = () => {
  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">
      <MotionConfig
        transition={{
          duration: 0.123,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          whileHover={{ scale: 1.06 }}
          className="bg-blue-700 p-2 rounded-xl w-[100px]"
        >
          click me!
        </motion.button>

        <motion.button
          whileTap={{ scale: 1.25, rotate: "-2.5deg" }}
          whileHover={{ scale: 1.06 }}
          className="bg-red-700 p-2 rounded-xl w-[100px]"
        >
          click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
