"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Esta en la vista?", isInView);
  });
  return (
    <div>
      <div className="h-[150vh]"></div>
      <motion.div
        className="h-[100vh] bg-white"
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      ></motion.div>
      <div
        ref={ref}
        className={isInView ? `h-[100vh] bg-blue-900` : "h-[60vh] bg-amber-600"}
        style={{ transition: "1s background" }}
      ></div>
    </div>
  );
};

export default ViewBasedAnimations;
