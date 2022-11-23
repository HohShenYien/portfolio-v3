import { AspectRatio, Box, Grid, Image } from "@chakra-ui/react";
import { m } from "framer-motion";
import { spaceBetween } from "./timelineVariables";
import ExperienceDescription from "./ExperienceDescription";
import { IExperienceProps } from ".";
import { useEffect, useRef, useState } from "react";
import { CustomImage } from "../Image";

interface ITimelineItem extends IExperienceProps {
  timelinePosition: number;
}

const TimelineItem = ({ timelinePosition, ...props }: ITimelineItem) => {
  const [activated, setActivated] = useState(false);
  const bubble = useRef<HTMLDivElement>(null);

  const pic = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const rect = bubble.current?.getBoundingClientRect() ?? {
      top: 0,
      bottom: 0,
    };
    if (timelinePosition > (rect.top + rect.bottom) / 2) {
      setActivated(true);
      return;
    }
  }, [timelinePosition, bubble]);

  return (
    <Grid templateColumns={{ md: "3fr 7fr", base: "1fr" }} gap={spaceBetween}>
      <Box
        marginLeft="5%"
        marginTop="8"
        w="90%"
        display={{ md: "block", base: "none" }}
      >
        <m.div
          initial={{
            rotate: 0,
          }}
          style={{
            translateY: `${Math.abs(props.angle) * 1.5}px`,
            opacity: 0,
            transformOrigin: "center center",
          }}
          whileHover={{
            rotate: 0,
            scale: 1.1,
          }}
          animate={activated ? { rotate: props.angle, opacity: 1 } : {}}
        >
          <CustomImage
            imgurId="6rE2F2Q"
            format="jpg"
            alt="test image"
            ref={pic}
            aspectRatio={4 / 3}
          />
        </m.div>
      </Box>

      <ExperienceDescription activated={activated} {...props}>
        <Box
          pos="absolute"
          left={{ md: -spaceBetween / 2, base: 0 }}
          top={4}
          bg={activated ? "brand.400" : "white"}
          w="12"
          h="12"
          rounded="full"
          transform={"translateX(-50%)"}
          ml="0"
          p={"3px"}
          transition="background-color ease-in 300ms"
          ref={bubble}
        >
          <AspectRatio ratio={1}>
            <Image
              src={props.logo}
              alt={props.company.name}
              rounded="full"
              objectPosition="center center"
            />
          </AspectRatio>
        </Box>
      </ExperienceDescription>
    </Grid>
  );
};

export default TimelineItem;
