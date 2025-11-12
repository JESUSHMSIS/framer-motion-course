"use client";

import { motion, useAnimationControls } from "motion/react";
const AnimationControls = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("giro");
  };
  return (
    <div className="grid place-content-center gap-[0.8rem] h-[100vh]">
      <button onClick={handleClick} className="bg-blue-700 p-2 rounded-xl">
        girar
      </button>
      <motion.div
        className="h-[100px] w-[100px] bg-white"
        variants={{
          inicio: {
            rotate: "0deg",
          },
          giro: {
            rotate: "180deg",
          },
        }}
        whileHover="giro"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
