import { Box, Image } from "@chakra-ui/react";
import { m } from "framer-motion";
import { useState } from "react";

const AvatarMobile = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      textAlign={"end"}
      pos="absolute"
      w="100vw"
      top={0}
      left={"100vw"}
      minH="100vh"
      overflow="visible"
    >
      <m.div
        style={{
          display: "inline-block",
          transformOrigin: "bottom left",
          overflow: "visible",
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: -65 }}
        transition={{
          type: "spring",
          damping: 9,
          stiffness: 60,
          restDelta: 0.1,
        }}
      >
        <Image
          src="/images/me-low.png"
          onLoad={() => setImageLoaded(true)}
          alt="This is me"
          width="100vw"
          loading="eager"
        />
      </m.div>
    </Box>
  );
};

export default AvatarMobile;
