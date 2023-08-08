import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MainNavProps, navigateTo } from ".";
import { MobileNavBtn } from "..";
import { Logo } from "../../Image";
import headers from "./headers";

export default function MobileNavMain({ navStyles, isHome }: MainNavProps) {
  const [startAnim, setStartAnim] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setStartAnim(isOpen);
  }, [isOpen]);

  const onClick = (id: string) => {
    setIsOpen(false);
    navigateTo(`/#${id}`);
  };

  return (
    <Box as="header" {...navStyles} display={{ base: "block", md: "none" }}>
      <Drawer
        placement={"top"}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <DrawerContent
          bg="brand.1000"
          minH="full"
          style={{ zIndex: 1000 }}
          containerProps={{ zIndex: 1000 }}
        >
          <DrawerBody>
            <VStack pt="100px">
              <VStack justify="center" spacing="8" as="nav">
                {headers.map((header, index) => (
                  <Box key={header.id} overflowY="hidden">
                    <Link
                      className="special-link"
                      href={isHome ? undefined : `/#${header.id}`}
                      onClick={() => isHome && onClick(header.id)}
                    >
                      <Text
                        fontSize="3xl"
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
                <Box overflowY="hidden">
                  <Link
                    href="https://raw.githubusercontent.com/HohShenYien/portfolio-v3/main/resume.pdf"
                    download
                    className="special-link"
                  >
                    <Button
                      variant="outline"
                      colorScheme="brand"
                      size="lg"
                      color="brand.500"
                      fontSize="3xl"
                      py="4"
                      transform={
                        startAnim ? "translateY(0)" : "translateY(100%)"
                      }
                      transition={`all ease-in 150ms ${
                        200 + headers.length * 50
                      }ms`}
                    >
                      Resume
                    </Button>
                  </Link>
                </Box>
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
        <Link href="/" className="special-link">
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
