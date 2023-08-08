import { Box } from "@chakra-ui/react";
import { useImageStore } from "store";
import { colors } from "styles/variables";
import { ImgurImage, generateImgurUrl } from "components/Image";
import style from "./FeaturedProjectImage.module.scss";

interface IFeaturedProjectImageProp {
  image: string;
  alt: string;
  format?: string;
}

const FeaturedProjectImage = ({
  image,
  alt,
  format,
}: IFeaturedProjectImageProp) => {
  const imageStore = useImageStore();
  return (
    <Box
      pos="relative"
      overflow="hidden"
      className={style.projectImgContainer}
      flex="7"
    >
      <Box
        pos="absolute"
        left="0"
        top="0"
        height="full"
        width="full"
        bg={`${colors.brand[950]}`}
        className={style.overlay}
        zIndex="2"
        onClick={() => imageStore?.setSrc?.(image)}
        cursor="pointer"
      />
      <ImgurImage
        imgurId={image}
        alt={alt}
        width="100%"
        className={style.projectImg}
        size="huge thumbnail"
        format={format}
      />
    </Box>
  );
};

export default FeaturedProjectImage;
