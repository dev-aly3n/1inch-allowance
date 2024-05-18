import { Variants } from "framer-motion";

export const framerProps = {
  initial: "hidden",
  animate: "visible",
  exit: "out",
};

export const fadeInAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
