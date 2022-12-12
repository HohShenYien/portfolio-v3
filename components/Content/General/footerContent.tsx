import { Box } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import { colors } from "styles/variables";
import { Peace, peace } from "components/Animation";

const footerContent = {
  copyright: (
    <Box
      justifyContent="flex-start"
      display="flex"
      alignItems="flex-end"
      textColor={colors.text}
      fontSize={{ base: "sm", md: "md" }}
    >
      © 2022 No rights reserved. We live in a free world{" "}
      {/* <Lottie animationData={peace} style={{ height: 40 }} /> */}
      <Peace />
    </Box>
  ),
  quote: "Stay Hungry, Stay Foolish",
  links: [
    { url: "/", name: "Home" },
    { url: "/projects", name: "Project Archives" },
    { url: "/readings", name: "Readings" },
    // { url: "/", name: "Goals" },
  ],
  socials: [
    { url: "https://github.com/HohShenYien", icon: "github" },
    { url: "https://www.linkedin.com/in/shen-yien/", icon: "linkedin" },
    { url: "https://www.facebook.com/wenwen.hoh/", icon: "facebook" },
    { url: "mailto:hohshenyien@gmail.com", icon: "email" },
  ],
};

export default footerContent;
