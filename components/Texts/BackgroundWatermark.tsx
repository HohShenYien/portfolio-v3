import { ChakraProps, Text } from "@chakra-ui/react";

interface IBackgroundWatermarkProp extends ChakraProps {
  text: string;
}

const BackgroundWatermark = ({
  text,
  ...additionalStyle
}: IBackgroundWatermarkProp) => {
  return (
    <Text
      color="#FFFFFF09"
      fontWeight="bolder"
      fontSize="290px"
      lineHeight="0.8"
      whiteSpace="nowrap"
      {...additionalStyle}
    >
      {text}
    </Text>
  );
};

export default BackgroundWatermark;
