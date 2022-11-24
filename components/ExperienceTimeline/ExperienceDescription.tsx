import {
  Box,
  Flex,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { colors } from "../../styles/variables";
import { NiceLink } from "../Links";
import { IExperienceProps } from ".";
import { ReactNode } from "react";
import { m } from "framer-motion";
import { fadeUp } from "../Animation";

interface IExperienceDescriptionProps extends IExperienceProps {
  activated: boolean;
  children?: ReactNode;
}

const ExperienceDescription = ({
  title,
  company,
  achievements,
  techs,
  activated,
  dates,
  children,
}: IExperienceDescriptionProps) => {
  return (
    <Box pos="relative">
      {children}
      <Box
        as={m.div}
        initial={fadeUp.initial}
        animate={activated ? fadeUp.whileInView : {}}
        border="none"
        bg="brand.950"
        px={{ md: 8, base: 3 }}
        pt={3}
        pb={{ md: 3, base: 2 }}
        ml={{ md: 0, base: 8 }}
      >
        <Box py={1} px={0}>
          <Text
            color={"gray.200"}
            fontWeight="semibold"
            fontSize={{ md: "xl", base: "lg" }}
            lineHeight={{ base: 1.2, md: "unset" }}
            as="h4"
          >
            {title}{" "}
            <Text as="span" display={{ base: "none", sm: "inline" }}>
              @{" "}
            </Text>
            <NiceLink
              href={company.url}
              blank
              fontWeight={{ base: "normal", md: "inherit" }}
              fontSize={{ base: "md", md: "inherit" }}
            >
              {company.name}
            </NiceLink>
          </Text>
          <Text color="gray.500" fontSize="sm" mt={{ md: 0, base: 2 }}>
            {dates.start} - {dates.end}
          </Text>
        </Box>
        <Box p={0} maxW="70ch">
          <UnorderedList pl={2} mb={4} mt={2} spacing={2}>
            {achievements.map((achievement, index: number) => (
              <ListItem key={index} color={colors.text}>
                {achievement}
              </ListItem>
            ))}
          </UnorderedList>
          <Flex wrap="wrap">
            {techs.map((tech: string) => (
              <Text
                color="brand.300"
                key={tech}
                fontFamily="mono"
                fontSize="sm"
                mr={6}
                mb={1}
              >
                {tech}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceDescription;
