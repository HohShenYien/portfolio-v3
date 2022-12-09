import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { MainNavProps, navigateTo } from ".";
import { MobileNavBtn } from "..";
import { Logo } from "../../Image";
import headers from "./headers";

export default function MobileNavMain({ navStyles, isHome }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startAnim, setStartAnim] = useState(false);
  useEffect(() => {
    setStartAnim(isOpen);
  }, [isOpen]);

  const onClick = useCallback((id: string) => {
    setIsOpen(false);
    navigateTo(`/#${id}`);
  }, []);

  return (
    <Box as="header" {...navStyles} display={{ base: "block", md: "none" }}>
      <Drawer
        placement={"top"}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <DrawerContent bg="brand.1000" minH="full">
          <DrawerBody>
            <VStack pt="100px">
              <VStack justify="center" spacing="8" as="nav">
                {headers.map((header, index) => (
                  <Box key={header.id} overflowY="hidden">
                    <Link
                      href={isHome ? undefined : `/#${header.id}`}
                      onClick={() => isHome && onClick(header.id)}
                    >
                      <Text
                        fontSize="4xl"
                        color="white"
                        transform={
                          startAnim ? "translateY(0)" : "translateY(100%)"
                        }
                        transition={`all ease-in 150ms ${200 + index * 50}ms`}
                      >
                        {header.title}
                      </Text>
                    </Link>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box
        display="flex"
        px="4"
        alignItems="center"
        justifyContent="space-between"
        pos="relative"
      >
        <Link href="/">
          <HStack alignItems="flex-end" spacing={1}>
            <Logo height={8} />
            <Text
              color="brand.400"
              fontSize="3xl"
              fontWeight="semibold"
              lineHeight={0.75}
            >
              hen Yien
            </Text>
          </HStack>
        </Link>
        <MobileNavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
    </Box>
  );
}
