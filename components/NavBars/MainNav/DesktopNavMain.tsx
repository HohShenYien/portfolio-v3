import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { NiceLink } from "../../Links";
import { m } from "framer-motion";
import { fadeDown } from "../../Animation";
import headers from "./headers";
import { MainNavProps } from ".";

export default function DesktopNavMain({ navStyles }: MainNavProps) {
  return (
    <Box as="header" {...navStyles} display={{ base: "none", md: "block" }}>
      <Box
        maxW="7xl"
        mx="auto"
        display="flex"
        py="2"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 6, "2xl": 0 }}
      >
        <Link href="/">
          <HStack alignItems="flex-end" spacing={1}>
            <Image alt="Logo" src="/logo.svg" height={12} />
            <Text
              color="brand.400"
              fontSize="4xl"
              fontWeight="bold"
              lineHeight={1}
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
                <NiceLink href={`#${header.id}`} color="white">
                  {header.title}
                </NiceLink>
              </Box>
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
}
