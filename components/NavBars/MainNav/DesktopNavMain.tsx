import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { NiceLink } from "../../Links";
import { m } from "framer-motion";
import { fadeDown } from "../../Animation";
import headers from "./headers";
import { MainNavProps } from ".";
import { Logo } from "../../Image";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function DesktopNavMain({ navStyles }: MainNavProps) {
  const router = useRouter();
  const isHome = useMemo(() => router.pathname === "/", [router]);

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
                <NiceLink href={`/#${header.id}`} color="white" isHome={isHome}>
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
