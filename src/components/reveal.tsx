import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = { children: JSX.Element; width?: "fit-content" | "100%" };

function Reveal({ children, width = "fit-content" }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${
        width === "fit-content" ? "w-auto" : "w-full"
      }`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.75, ease: "easeIn" }}
        className="absolute text-white top-1 bottom-0 left-0 right-0 bg-blue-900 z-20"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
