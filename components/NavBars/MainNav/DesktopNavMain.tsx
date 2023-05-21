import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowLink, NiceLink } from "../../Links";
import { m } from "framer-motion";
import { fadeDown } from "../../Animation";
import headers from "./headers";
import { MainNavProps } from ".";
import { Logo } from "../../Image";

export default function DesktopNavMain({ navStyles, isHome }: MainNavProps) {
  return (
    <Box as="header" {...navStyles} display={{ base: "none", md: "block" }}>
      <Box
        maxW="7xl"
        mx="auto"
        display="flex"
        py="4"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 6, "2xl": 0 }}
      >
        <Link href="/">
          <HStack alignItems="flex-end" spacing={1}>
            <Logo />
            <Text
              color="brand.400"
              fontSize="4xl"
              fontWeight="semibold"
              lineHeight={0.75}
            >
              hen Yien
            </Text>
          </HStack>
        </Link>
        <HStack spacing={8} as="nav">
          {headers.map((header, index: number) => {
            return (
              <Box
                as={m.div}
                key={header.id}
                {...fadeDown}
                transition={`all linear 0.2s ${index * 0.1}s`}
                fontSize="sm"
                fontWeight="light"
              >
                <NiceLink
                  href={`/#${header.id}`}
                  color="white"
                  isHome={isHome}
                  blank={false}
                >
                  {header.title}
                </NiceLink>
              </Box>
            );
          })}
          <Box
            as={m.div}
            {...fadeDown}
            transition={`all linear 0.2s ${headers.length * 0.1}s`}
            fontSize="sm"
            fontWeight="light"
          >
            <a href="" download>
              <Button
                variant="outline"
                colorScheme="brand"
                size={{ md: "sm", base: "sm" }}
                color="brand.500"
              >
                Resume
              </Button>
            </a>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
