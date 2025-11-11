"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const BasicsOfMotion = () => {
  const [invisible, setInvisible] = useState(true);
  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">
      <motion.button
        onClick={() => setInvisible(!invisible)}
        className="bg-blue-800 text-white uppercase p-2 rounded-2xl"
      >
        {invisible ? (
          <motion.p initial={{ rotate: "0deg" }} animate={{ rotate: "360deg" }}>
            Ocultar
          </motion.p>
        ) : (
          <motion.p>Mostrar</motion.p>
        )}
      </motion.button>
      <AnimatePresence>
        {invisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0 }}
            animate={{ rotate: "180deg", scale: 1 }}
            exit={{ rotate: "0deg", scale: 0 }}
            transition={{ duration: 0.4, ease: "backInOut" }}
            className="bg-white w-[100px] h-[100px]"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
