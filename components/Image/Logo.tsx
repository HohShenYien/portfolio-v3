import { Image } from "@chakra-ui/react";

interface ILogoProps {
  height?: number;
}

const Logo = ({ height = 9 }: ILogoProps) => {
  return <Image alt="Logo" src="/logo.svg" height={height} />;
};

export default Logo;
