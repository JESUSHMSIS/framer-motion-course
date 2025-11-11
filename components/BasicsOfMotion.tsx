"use client";

import { motion } from "motion/react";

const BasicsOfMotion = () => {
  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "180deg" }}
        transition={{ duration: 1 }}
        className="bg-white w-[100px] h-[100px]"
      ></motion.div>
    </div>
  );
};

export default BasicsOfMotion;
