import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LazyMotion, domAnimation } from "framer-motion";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const theme = extendTheme({
  colors: {
    brand: {
      50: "rgba(167,139,250,0.2)", // this is for outline button special
      100: "rgba(139,92,246,0.4)",
      200: "rgb(221 214 254)",
      300: "rgb(196 181 253)",
      400: "rgb(167 139 250)",
      500: "rgb(139 92 246)",
      600: "rgb(124 58 237)",
      700: "rgb(109 40 217)",
      800: "rgb(91 33 182)",
      900: "rgb(76 29 149)",
      950: "#0F052C",
    },
  },
  fonts: {
    heading: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </ChakraProvider>
  );
}
