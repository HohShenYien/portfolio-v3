import "styles/globals.css";
import type { AppProps } from "next/app";
import { LazyMotion, domAnimation } from "framer-motion";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import "@fontsource/fira-code/300.css";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";

import { colors } from "styles/variables";
import { MainNavWrapper } from "components/NavBars/MainNav";
import { Footer } from "components/Footer";
import { ReactNode } from "react";

const theme = extendTheme({
  colors: {
    brand: colors.brand,
  },
  fonts: {
    heading: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    mono: `"Fira Code", monospace`,
  },
  components: {
    Drawer: {
      zIndex: 1000,
    },
  },
});

const getLayout = (children: ReactNode) => {
  return (
    <>
      <MainNavWrapper />
      {children}
      <Footer />
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LazyMotion features={domAnimation}>
        {getLayout(<Component {...pageProps} />)}
      </LazyMotion>
    </ChakraProvider>
  );
}
