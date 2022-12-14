import { Box, Icon, Image } from "@chakra-ui/react";
import { m } from "framer-motion";
import CodingGuy from "./CodingGuy";
import LanguageBubble from "./LanguageBubble";

const CodingAbout = () => {
  return (
    <Box as={m.div} display="flex" justifyContent="center" alignItems="center">
      <Box display="inline-block" pos="relative" flex={1}>
        <Image
          src="/images/coding/terminal.svg"
          alt="terminal"
          pos="absolute"
          right="10%"
          top="10%"
          zIndex="2"
        />
        <Box
          pos="absolute"
          bg="brand.600"
          px="3"
          py="1"
          rounded="2"
          right="14%"
          bottom="44%"
          zIndex="3"
          fontFamily="mono"
          fontSize="sm"
          color="white"
        >
          {"{}"}
        </Box>
        <Box
          pos="absolute"
          bg="brand.300"
          px="2"
          py="1"
          rounded="2"
          right="24%"
          top="4%"
          zIndex="3"
          fontFamily="mono"
          fontSize="sm"
        >
          {"</>"}
        </Box>
        <LanguageBubble w={8} h={8} lang="python" top="5%" right="41%" />
        <LanguageBubble
          w={8}
          h={8}
          lang="java"
          top="40%"
          left="20%"
          zIndex="3"
          scale={1.2}
        />
        <LanguageBubble
          w={8}
          h={8}
          lang="javascript"
          bottom="2%"
          right="40%"
          zIndex="3"
          scale={1.4}
        />
        <LanguageBubble
          w={8}
          h={8}
          lang="react"
          top="32%"
          right="3%"
          scale={1.1}
        />
        <LanguageBubble
          w={8}
          h={8}
          lang="vue"
          top="55%"
          right="34%"
          scale={1.5}
        />
        <LanguageBubble
          w={8}
          h={8}
          lang="nextjs"
          top="62%"
          right="50%"
          zIndex="3"
        />
        <LanguageBubble
          w={8}
          h={8}
          lang="typescript"
          top="10%"
          left="5%"
          zIndex="3"
          scale={0.9}
        />
        <LanguageBubble
          w={8}
          h={8}
          lang="laravel"
          bottom="10%"
          left="10%"
          scale={1.4}
        />
        <CodingGuy />
      </Box>
    </Box>
  );
};
export default CodingAbout;
