import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import Lottie from "react-lottie-player";
import { error404, fadeIn, fadeUp } from "components/Animation";
import { Footer } from "components/Footer";
import { ArrowLink } from "components/Links";
import { MainNavWrapper } from "components/NavBars/MainNav";
import { colors } from "styles/variables";
import { m } from "framer-motion";
import { Header } from "components/Header";
import { generateImgurUrl } from "components/Image";

export default function Home() {
  return (
    <Box as="div" bg="brand.1000">
      <Header
        title="Page Not Found"
        description={"404 Not Found"}
        image={generateImgurUrl({
          size: "large thumbnail",
          imgurId: "nPrJjja",
        })}
      />
      <MainNavWrapper />
      <Box as="main" minH="100vh" pt={12}>
        <Box as={m.div} {...fadeIn}>
          <Lottie loop play animationData={error404} style={{ height: 480 }} />
        </Box>
        <Box as={m.div} {...fadeUp}>
          <Text
            textColor={"gray.300"}
            textAlign="center"
            fontSize={{ md: "6xl", base: "4xl" }}
            fontWeight={{ md: "semibold", base: "bold" }}
            textTransform={"uppercase"}
            mt={{ base: -32, sm: -16 }}
            position="relative"
            zIndex={4}
            lineHeight="0.9"
          >
            Page Not Found
          </Text>
          <Text color={colors.text} textAlign="center" fontSize="lg" mt={4}>
            This page might not have existed at all!
          </Text>
          <Flex
            mt={12}
            flexDir={{ md: "row", base: "column" }}
            alignItems={{ base: "center", md: "center" }}
            justifyContent="center  "
            gap="6"
          >
            <Link href="/">
              <Button colorScheme="brand" size={{ md: "md", base: "md" }}>
                Back to home
              </Button>
            </Link>
            <Link href="https://blogs.shenyien.cyou/csdiary/">
              <Button
                variant="outline"
                colorScheme="brand"
                size={{ md: "md", base: "md" }}
              >
                <ArrowLink>Check out my Blogs</ArrowLink>
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
