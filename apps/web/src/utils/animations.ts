import { Variants } from "framer-motion";

export const framerProps = {
  initial: "hidden",
  animate: "visible",
  exit: "out",
};

export const fadeUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
