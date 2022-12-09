import { Box, Image } from "@chakra-ui/react";
import { m } from "framer-motion";
import { useMemo, useState } from "react";
import { Rect, useRect } from "react-use-rect";
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

const Avatar = ({ mousePos }: IHeroSectionProp) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [rotated, setRotated] = useState(false);

  const [eyeRect, setEyeRect] = useState<Rect | null>(null);
  const [eyeRef] = useRect(setEyeRect);

  const [avatarRect, setAvatarRect] = useState<Rect | null>(null);
  const [avatarRef] = useRect(setAvatarRect);

  const eyeLoc = useMemo(() => {
    if (eyeRect) {
      return {
        x: (eyeRect.left + eyeRect.right) / 2,
        y: eyeRect.top,
      };
    }
    return {
      x: 0,
      y: 0,
    };
  }, [eyeRect]);

  const avatarLoc = useMemo(() => {
    if (avatarRect) {
      return {
        x: (avatarRect.left + avatarRect.right) / 2,
        y: (avatarRect.top + avatarRect.bottom) / 2,
      };
    }
    return {
      x: 0,
      y: 0,
    };
  }, [avatarRect]);

  const angle = useMemo(() => {
    return getAngle(eyeLoc.x, eyeLoc.y, mousePos.x, mousePos.y) + 300;
  }, [eyeLoc, mousePos]);

  const translationY = useMemo(() => {
    if (mousePos.y > 600 || mousePos.x < 400) {
      return 0;
    }
    const distance = getDistance(
      avatarLoc.x,
      avatarLoc.y,
      mousePos.x,
      mousePos.y
    );
    const motion = distance / 10;
    return 60 - Math.min(Math.max(0, motion), 60);
  }, [mousePos, avatarLoc]);

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
          style={{ position: "absolute", right: "62vw", top: "2vw" }}
          animate={{ translateY: translationY }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 40,
            restDelta: 0.5,
          }}
        >
          <m.div
            style={{ rotate: -20 }}
            initial={{ y: "10vw" }}
            transition={{
              type: "spring",
              damping: 9,
              stiffness: 50,
              restDelta: 0.5,
            }}
            animate={{ y: "0" }}
          >
            <Image
              src="/images/me/avatar-me.svg"
              width="8vw"
              alt="Avatar Me!"
              ref={avatarRef}
            />
            {/* Eyeballs */}
            <Box
              pos="absolute"
              top="3.5vw"
              left="2.5vw"
              display="flex"
              ref={eyeRef}
            >
              {Array(2)
                .fill(0)
                .map((_: number, index: number) => {
                  return (
                    <m.div
                      key={index}
                      initial={{
                        rotate: 0,
                        paddingTop: 4,
                        transformOrigin: "top center",
                        marginRight: index === 0 ? "2vw" : "0",
                      }}
                      animate={{
                        rotate: angle,
                      }}
                      transition={{
                        duration: 0,
                        type: "rotate",
                      }}
                    >
                      <Box
                        bgColor="#2C1B18"
                        w={"0.5vw"}
                        h={"0.5vw"}
                        rounded="full"
                      />
                    </m.div>
                  );
                })}
            </Box>
          </m.div>
        </m.div>
      )}

      <m.div
        style={{
          display: "inline-block",
          transformOrigin: "bottom left",
          overflow: "visible",
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
