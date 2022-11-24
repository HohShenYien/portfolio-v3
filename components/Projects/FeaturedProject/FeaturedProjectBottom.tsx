import { Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { ExternalLink, Github } from "lucide-react";

interface IFeaturedProjectBottomProp {
  inverted: boolean;
  tags: string[];
  github?: string;
  link?: string;
}

const FeaturedProjectBottom = ({
  inverted,
  tags,
  github,
  link,
}: IFeaturedProjectBottomProp) => {
  return (
    <>
      <Flex
        mt={2}
        justify={{
          md: inverted ? "flex-start" : "flex-end",
          base: "flex-start",
        }}
      >
        {tags.map((tech) => (
          <Text
            key={tech}
            fontFamily="mono"
            color="gray.200"
            mr={{ base: 6, md: inverted ? 8 : 0 }}
            ml={{ base: 0, md: inverted ? 0 : 8 }}
            fontSize="sm"
          >
            {tech}
          </Text>
        ))}
      </Flex>
      <Flex
        mt={{ base: 2, md: 4 }}
        justify={{
          md: inverted ? "flex-start" : "flex-end",
          base: "flex-start",
        }}
      >
        {github && (
          <Link href={github} target="_blank">
            <IconButton
              icon={<Github />}
              aria-label="GitHub"
              variant="unstyled"
              color="brand.400"
              _hover={{ color: "brand.200" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            />
          </Link>
        )}
        {link && (
          <Link href={link} target="_blank">
            <IconButton
              icon={<ExternalLink />}
              aria-label="External Link"
              variant="unstyled"
              color="brand.400"
              _hover={{ color: "brand.200" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            />
          </Link>
        )}
      </Flex>
    </>
  );
};

export default FeaturedProjectBottom;
