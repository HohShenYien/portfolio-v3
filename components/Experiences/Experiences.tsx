import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from "@chakra-ui/react";
import { experienceContent } from "components/Content";
import ExperienceDescription from "./ExperienceDescription";
import { AnimatePresence, m } from "framer-motion";
import { fadeUp } from "components/Animation";
import style from "./Experiences.module.scss";
import { useState } from "react";
import { ImgurImage } from "components/Image";
const tabVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Experiences = () => {
  const orientation = useBreakpointValue({
    base: "horizontal",
    md: "vertical",
  }) as "vertical" | "horizontal";
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box display="flex" justifyContent="center" as={m.div} {...fadeUp}>
      <m.div layout transition={{ duration: 0.3 }}>
        <Tabs
          variant="unstyled"
          orientation={orientation}
          maxW="calc(100vw - 32px)"
          defaultIndex={0}
          onChange={(index) => setTabIndex(index)}
        >
          <TabList overflow={{ base: "auto", md: "unset" }} position="relative">
            {experienceContent.experiences.map((experience, index) => (
              <Tab
                key={index}
                _hover={{ bg: "whiteAlpha.100", color: "whiteAlpha.800" }}
                fontSize={"sm"}
                color="whiteAlpha.600"
                _selected={{
                  color: "brand.300",
                  bg: { md: "whiteAlpha.200", base: "transparent" },
                }}
                fontFamily={"mono"}
                whiteSpace={"nowrap"}
                py={3}
                justifyContent={"flex-start"}
                borderLeft={{ md: "solid 2px", base: "none" }}
                borderBottom={{ md: "none", base: "2px" }}
                borderColor="whiteAlpha.300"
                position={"relative"}
              >
                <ImgurImage
                  display={{ md: "block", base: "none" }}
                  rounded="full"
                  size={"small square"}
                  height="8"
                  width="8"
                  // top="50%"
                  // transform="translateY(-50%) translateX(-70px)"
                  imgurId={experience.logo}
                  alt={experience.company.name}
                  mr={2}
                  border="solid 2px"
                  borderColor={index === tabIndex ? "brand.400" : "white"}
                />
                {experience.company.name}
              </Tab>
            ))}
            <TabIndicator
              mt="-1.5px"
              width={{ md: "3px", base: undefined }}
              height={{ md: undefined, base: "3px" }}
              bottom={{ base: 0, md: undefined }}
              bg="brand.400"
              borderRadius="1px"
            />
          </TabList>

          <AnimatePresence mode="wait">
            {experienceContent.experiences.map(
              (experience, index) =>
                index === tabIndex && (
                  <m.div
                    key={index}
                    className={style.tab}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={tabVariants}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                  >
                    <Box
                      py={0}
                      px={{ md: "3", base: 0 }}
                      maxW={{ md: "65ch", base: "none" }}
                      mt={{ base: 4, md: 0 }}
                    >
                      <ExperienceDescription {...experience} />
                    </Box>
                  </m.div>
                )
            )}
          </AnimatePresence>
        </Tabs>
      </m.div>
    </Box>
  );
};

export default Experiences;
