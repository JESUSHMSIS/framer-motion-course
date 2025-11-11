"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const BasicsOfMotion = () => {
  const [invisible, setInvisible] = useState(true);
  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">
      <motion.button
        onClick={() => setInvisible(!invisible)}
        layout
        className="bg-blue-800 text-white uppercase p-2 rounded-2xl"
      >
        {invisible ? (
          <motion.p
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "360deg" }}
            exit={{ rotate: "0deg" }}
          >
            Ocultar
          </motion.p>
        ) : (
          <motion.p>Mostrar</motion.p>
        )}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {invisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }} //en y:[] <- significa la secuencia que seguira una vez que aparezca el div
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.7, 1], //<- aca estan los tiempos para cada secuencia de la transicion que llevara el div
            }}
            className="bg-white w-[100px] h-[100px]"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
