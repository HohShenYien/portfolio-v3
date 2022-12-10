import { Box, Image, PositionProps } from "@chakra-ui/react";
import { m } from "framer-motion";
import { useMemo } from "react";
import { colors } from "styles/variables";

interface ILangBubbleProps extends PositionProps {
  w?: number;
  h?: number;
  lang: string;
  zIndex?: number | string;
  scale?: number;
}

const LanguageBubble = ({
  w = 8,
  h = 8,
  zIndex = 1,
  lang,
  top,
  left,
  right,
  bottom,
  scale = 1,
}: ILangBubbleProps) => {
  const delay = useMemo(() => Math.random(), []);
  const translateY = useMemo(() => Math.random() * 8 - 4, []);
  const translateX = useMemo(() => Math.random() * 8 - 4, []);
  const duration = useMemo(() => Math.random() * 2 + 1, []);
  return (
    <m.div
      style={{
        zIndex: zIndex,
        position: "absolute",
        top: `${top ?? "unset"}`,
        left: `${left ?? "unset"}`,
        right: `${right ?? "unset"}`,
        bottom: `${bottom ?? "unset"}`,
        padding: "6px",
        backgroundColor: `${colors.brand[900]}70`,
        backdropFilter: "blur(3px)",
        borderRadius: "999px",
      }}
      viewport={{ once: true }}
      initial={{
        scale: 0,
        opacity: 0,
        translateX: 0,
        translateY: 0,
      }}
      whileInView={{
        scale,
        opacity: 1,
        transition: {
          delay,
          type: "spring",
        },
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration,
        ease: "easeInOut",
      }}
      animate={{
        translateX,
        translateY,
      }}
    >
      <Image w={w} h={h} src={`/images/languages/${lang}.svg`} alt={lang} />
    </m.div>
  );
};

export default LanguageBubble;
