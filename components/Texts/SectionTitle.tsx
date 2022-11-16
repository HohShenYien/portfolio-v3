import { Box, Text } from "@chakra-ui/react";

interface ISectionTitleProp {
  text: string;
}

const SectionTitle = ({ text }: ISectionTitleProp) => {
  return (
    <Box
      pos="relative"
      _before={{
        content: '""',
        width: "50px",
        height: "2px",
        backgroundColor: "whiteAlpha.800",
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      pl={"70px"}
    >
      <Text
        as="h2"
        color="whiteAlpha.800"
        fontSize="4xl"
        letterSpacing={"6px"}
        fontWeight="medium"
      >
        {text}
      </Text>
    </Box>
  );
};

export default SectionTitle;
