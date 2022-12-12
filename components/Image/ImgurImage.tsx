import {
  As,
  AspectRatio,
  ChakraProps,
  forwardRef,
  Image,
} from "@chakra-ui/react";
import { ImgurSize, generateImgurUrl, generateFallbackSrc } from ".";
import { m } from "framer-motion";

interface ImageProps extends ChakraProps, React.ComponentProps<As> {
  imgurId?: string; // imgur id
  format?: string;
  size?: ImgurSize | number;
  alt: string;
  src?: string;
  fallbackSrc?: string;
  aspectRatio?: number;
}

const ImgurImage = forwardRef(
  (
    {
      imgurId,
      format,
      size,
      alt,
      src,
      fallbackSrc,
      aspectRatio,
      ...props
    }: ImageProps,
    ref
  ) => {
    // @ts-ignore
    const imgSrc = src ?? generateImgurUrl({ size, imgurId, format });

    const image = (
      <>
        <Image
          {...props}
          alt={alt}
          // @ts-ignore
          src={imgSrc}
          fallbackSrc={
            fallbackSrc ?? imgurId
              ? // @ts-ignore
                generateFallbackSrc({ size, imgurId, format })
              : ""
          }
          as={m.img}
          layoutId={imgSrc}
          ref={ref}
        />
      </>
    );

    if (aspectRatio) {
      return <AspectRatio ratio={aspectRatio}>{image}</AspectRatio>;
    }
    return image;
  }
);

ImgurImage.displayName = "Custom Image";

export default ImgurImage;
