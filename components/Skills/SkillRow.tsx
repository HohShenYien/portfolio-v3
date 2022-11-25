import { Box, HStack, Image } from "@chakra-ui/react";
import { Skill } from ".";

const SkillRow = ({ name, progress, description }: Skill) => {
  return (
    <HStack>
      <Image src={`/images/languages/${name}.svg`} alt={name} w={6} />
      <Box flex={1} />
    </HStack>
  );
};
