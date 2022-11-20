import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { colors } from "../../../styles/variables";
import { fadeUp } from "../../Animation";
import style from "./Project.module.scss";
import { m } from "framer-motion";

const Project = () => {
  return (
    <Grid templateColumns={"7fr 5fr"} as={m.div} {...fadeUp}>
      <GridItem
        pos="relative"
        overflow="hidden"
        className={style.projectImgContainer}
      >
        <Box
          pos="absolute"
          left="0"
          top="0"
          height="full"
          width="full"
          bg={`${colors.brand[950]}`}
          className={style.overlay}
          zIndex="2"
        />
        <Image
          src="https://i.imgur.com/hhAAMKM.png"
          alt="test"
          width="100%"
          className={style.projectImg}
        />
      </GridItem>

      <Flex
        flexDir="column"
        flex="1"
        justifyContent="center"
        alignItems="stretch"
        width="110%"
        ml="-11%"
      >
        <Text
          color="brand.300"
          fontFamily="mono"
          textAlign="end"
          lineHeight={1}
          fontSize="sm"
        >
          Hackathon Projects
        </Text>
        <Text
          color="white"
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="end"
        >
          Kommunity
        </Text>
        <Box pos="relative" minH="50%" my={4}>
          <Text color={colors.text} pos="relative" zIndex="2" px={6} py={3}>
            hello world
          </Text>
          <Box
            bg="brand.950"
            pos="absolute"
            right={0}
            top={0}
            height="100%"
            width="100%"
            zIndex="1"
          />
        </Box>
        <Flex flexDirection={"row-reverse"}>
          {["React Native", "Django"].map((tech) => (
            <Text
              key={tech}
              fontFamily="mono"
              color="gray.500"
              marginLeft={8}
              fontSize="sm"
            >
              {tech}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Box></Box>
    </Grid>
  );
};

export default Project;
