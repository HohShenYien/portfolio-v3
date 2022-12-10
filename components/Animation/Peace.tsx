import { m } from "framer-motion";
import { useState } from "react";

const variants = {
  swing: {
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      mass: 1.8,
    },
  },
  original: {
    rotate: -40,
    scale: 0.6,
    transition: { duration: 0.2, delay: 0.6 },
  },
};

const Peace = () => {
  const [swing, setSwing] = useState(false);

  return (
    <m.img
      src="/images/emojis/peace.svg"
      style={{
        height: "28px",
        rotate: -40,
        transformOrigin: "bottom right",
        scale: 0.6,
        marginLeft: 12,
        marginBottom: 6,
      }}
      variants={variants}
      animate={swing ? "swing" : "original"}
      onAnimationComplete={() => setSwing(!swing)}
    />
  );
};

export default Peace;
