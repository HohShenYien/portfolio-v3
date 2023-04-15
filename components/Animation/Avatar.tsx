import { Box, Image, Tooltip } from "@chakra-ui/react";
import { m } from "framer-motion";
import { useMemo, useState } from "react";
import { IHeroSectionProp } from "../Sections/HeroSection";

const getAngle = (
  eyeX: number,
  eyeY: number,
  cursorX: number,
  cursorY: number
) => {
  const dy = cursorY - eyeY;
  const dx = cursorX - eyeX;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
};

const getDistance = (
  eyeX: number,
  eyeY: number,
  cursorX: number,
  cursorY: number
) => {
  const dy = cursorY - eyeY;
  const dx = cursorX - eyeX;
  return Math.sqrt(dy * dy + dx * dx);
};

const Avatar = ({}: IHeroSectionProp) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [rotated, setRotated] = useState(false);

  return (
    <Box
      textAlign={"end"}
      pos="absolute"
      w="160vw"
      top={0}
      left={0}
      minH="100vh"
      overflow="visible"
    >
      {rotated && (
        <m.div
          style={{
            position: "absolute",
            right: "60vw",
            top: "4vw",
            rotate: -15,
          }}
        >
          <m.div
            initial={{ y: "10vw" }}
            animate={{ translateY: -120 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 70,
              restDelta: 0.5,
            }}
            whileHover={{ translateY: -160 }}
          >
            <Tooltip
              label="Learning Golang"
              placement="left-start"
              hasArrow
              bg="brand.500"
            >
              <Image
                src="/images/me/gopher.png"
                width="8vw"
                alt="Avatar Gopher"
              />
            </Tooltip>
          </m.div>
        </m.div>
      )}

      <m.div
        style={{
          display: "inline-block",
          transformOrigin: "bottom left",
          overflow: "visible",
          pointerEvents: "none",
        }}
        initial={{ rotate: 0 }}
        animate={imageLoaded ? { rotate: -65 } : {}}
        transition={{
          type: "spring",
          damping: 9,
          stiffness: 60,
          restDelta: 0.1,
          delay: 0.5,
        }}
        onAnimationComplete={() => setRotated(true)}
      >
        <Image
          src="/images/me/me-low.png"
          alt="This is me "
          width="60vw"
          onLoad={() => setImageLoaded(true)}
        />
      </m.div>
    </Box>
  );
};

export default Avatar;
