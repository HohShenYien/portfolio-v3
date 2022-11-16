import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { compileAsync } from "sass";
import { colors } from "../../styles/variables";
import { NiceLink } from "../Links";
import { m } from "framer-motion";
import { fadeUp } from "../Animation";
import { ReactNode } from "react";

interface ITimelineAccordion {
  title: string;
  company: {
    name: string;
    url: string;
  };
  achievements: ReactNode[];
  techs: string[];
}

const TimelineAccordion = ({
  title,
  company,
  achievements,
  techs,
}: ITimelineAccordion) => {
  return (
    <AccordionItem
      border="none"
      bg="brand.950"
      as={m.div}
      {...fadeUp}
      px={8}
      py={3}
    >
      <AccordionButton py={1} px={0}>
        <Box flex="1" textAlign="left">
          <Text color={"white"} fontWeight="semibold" fontSize="2xl">
            {title} @ <NiceLink href={company.url}>{company.name}</NiceLink>
          </Text>
          <Text color="gray.400">August 2022 - Present</Text>
        </Box>
      </AccordionButton>
      <AccordionPanel p={0}>
        <UnorderedList pl={2} mb={4} mt={2}>
          {achievements.map((achievement, index: number) => (
            <ListItem key={index} color={colors.text}>
              {achievement}
            </ListItem>
          ))}
        </UnorderedList>
        <HStack spacing={6}>
          {techs.map((tech: string) => (
            <Text color="brand.500" key={tech} fontFamily="mono">
              {tech}
            </Text>
          ))}
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default TimelineAccordion;
