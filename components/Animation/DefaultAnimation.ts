import { ChakraProps } from "@chakra-ui/react";
import { AnimationProps, TargetAndTransition } from "framer-motion";

interface IAnimation extends ChakraProps, Omit<AnimationProps, "transition"> {
  whileInView: TargetAndTransition;
}

const fadeInRight: IAnimation = {
  initial: {
    translateX: -30,
    opacity: 0,
  },
  // @ts-ignore
  viewport: { once: true },
  whileInView: {
    translateX: 0,
    opacity: 1,
  },
  transition: "all ease-in 0.25s",
};

const fadeInLeft: IAnimation = {
  initial: {
    translateX: 30,
    opacity: 0,
  },
  // @ts-ignore
  viewport: { once: true },
  whileInView: {
    translateX: 0,
    opacity: 1,
  },
  transition: "all ease-in 0.25s",
};

const fadeUp: IAnimation = {
  initial: {
    translateY: 60,
    opacity: 0,
  },
  // @ts-ignore
  viewport: { once: true },
  whileInView: {
    translateY: 0,
    opacity: 1,
  },
  transition: "all linear 0.3s",
};

const fadeDown: IAnimation = {
  initial: {
    translateY: -30,
    opacity: 0,
  },
  // @ts-ignore
  viewport: { once: true },
  whileInView: {
    translateY: 0,
    opacity: 1,
  },
  transition: "all linear 0.1s",
};

const fadeIn: IAnimation = {
  initial: {
    opacity: 0,
  },
  // @ts-ignore
  viewport: { once: true },
  whileInView: {
    opacity: 1,
  },
  transition: "all linear 300ms",
};

export { fadeInRight, fadeInLeft, fadeUp, fadeDown, fadeIn };
