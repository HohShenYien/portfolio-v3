import { ChakraProps } from "@chakra-ui/react";
import { AnimationProps } from "framer-motion";

interface IAnimation extends ChakraProps, Omit<AnimationProps, "transition"> {}

const fadeInRight: IAnimation = {
  initial: {
    translateX: -30,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
  transition: "all ease-in 0.2s",
};

const fadeUp: IAnimation = {
  initial: {
    translateY: 30,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
  transition: "all linear 0.1s",
};

const fadeDown: IAnimation = {
  initial: {
    translateY: -30,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
  transition: "all linear 0.1s",
};

export { fadeInRight, fadeUp, fadeDown };
