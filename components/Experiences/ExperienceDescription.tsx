import {
  Box,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
  UnorderedList,
  useOutsideClick,
} from "@chakra-ui/react";
import { colors } from "styles/variables";
import { NiceLink } from "../Links";
import { m } from "framer-motion";
import { Star } from "lucide-react";
import { IExperienceProps } from ".";
import { useRef, useState } from "react";

const mapTypeToEmoji = (type: IExperienceProps["type"]) => {
  switch (type) {
    case "Full-Time":
      return "/images/emojis/rocket.png";
    case "Internship":
      return "/images/emojis/seedling.png";
    default:
      return "/images/emojis/juggling.png";
  }
};

const ExperienceDescription = ({
  title,
  company,
  achievements,
  techs,
  dates,
  type,
}: IExperienceProps) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => setIsLabelOpen(false),
  });

  return (
    <Box pos="relative">
      <Box as={m.div} border="none" px={{ md: 8, base: 3 }} ml={0}>
        <Box py={1} px={0}>
          <Text
            color={"gray.200"}
            fontWeight="semibold"
            fontSize={{ md: "lg", base: "md" }}
            lineHeight={{ base: 1.2, md: "unset" }}
            as="h4"
          >
            <Tooltip
              label={type}
              placement="top"
              bg="brand.900"
              isOpen={isLabelOpen}
            >
              <Image
                src={mapTypeToEmoji(type)}
                alt={type}
                height={8}
                width={8}
                display={"inline"}
                mr={2}
                onMouseEnter={() => setIsLabelOpen(true)}
                onMouseLeave={() => setIsLabelOpen(false)}
                onClick={() => setIsLabelOpen(true)}
                ref={ref}
              />
            </Tooltip>
            {title} <Text as="span">@ </Text>
            <NiceLink
              href={company.url}
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
        <Box p={0}>
          <List pl={2} mb={4} mt={2} spacing={2}>
            {achievements.map((achievement, index: number) => (
              <ListItem key={index} color={colors.text} display="flex">
                <ListIcon
                  as={Star}
                  color="brand.400"
                  fill="currentColor"
                  mt="1"
                />
                <Text>{achievement}</Text>
              </ListItem>
            ))}
          </List>
          <Flex wrap="wrap">
            {techs.map((tech: string) => (
              <Text
                color="brand.300"
                key={tech}
                fontFamily="mono"
                fontSize={{ md: "sm", base: "sm" }}
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
