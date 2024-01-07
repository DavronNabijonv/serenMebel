import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Popup({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { y:50 },
          visible: { y:0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
