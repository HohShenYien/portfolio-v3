import { AnimationProps, useAnimationControls } from "framer-motion";
import { RefObject, useEffect } from "react";
import useOnScreen from "./useOnScreen";

interface ScrollSeqAnimationProps {
  ref: RefObject<HTMLElement>;
  animation: (index: number) => AnimationProps;
}

const useScrollSeqAnimation = ({ ref, animation }: ScrollSeqAnimationProps) => {
  const controls = useAnimationControls();
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    isOnScreen && controls.start(animation);
  }, [controls, isOnScreen, animation]);

  return {
    ...controls,
    startNow: () => {
      controls.start(animation);
    },
  };
};

export default useScrollSeqAnimation;
