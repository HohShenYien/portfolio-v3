import {
  As,
  AspectRatio,
  ChakraProps,
  forwardRef,
  Image,
} from "@chakra-ui/react";
import { ImgurSize, generateImgurUrl, generateFallbackSrc } from ".";
import { m } from "framer-motion";
import { useCallback, useMemo } from "react";
import { useImageStore } from "../../store";

interface ImageProps extends ChakraProps, React.ComponentProps<As> {
  imgurId?: string; // imgur id
  format?: string;
  size?: ImgurSize | number;
  alt: string;
  src?: string;
  fallbackSrc?: string;
  aspectRatio?: number;
  canOpen?: boolean;
}

const CustomImage = forwardRef(
  (
    {
      imgurId,
      format,
      size,
      alt,
      src,
      fallbackSrc,
      aspectRatio,
      canOpen = true,
      ...props
    }: ImageProps,
    ref
  ) => {
    const imgSrc = useMemo(() => {
      // @ts-ignore
      return src ?? generateImgurUrl({ size, imgurId, format });
    }, [size, imgurId, format, src]);
    const imageStore = useImageStore();

    const openImg = useCallback(() => {
      if (!canOpen) return;
      const fullSrc =
        // @ts-ignore
        src ?? generateImgurUrl({ size: "full", imgurId, format });
      imageStore?.setSrc?.(fullSrc);
    }, [format, imageStore, imgurId, src, canOpen]);

    const image = (
      <>
        <Image
          onClick={openImg}
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
          cursor={canOpen ? "pointer" : ""}
        />
      </>
    );

    if (aspectRatio) {
      return <AspectRatio ratio={aspectRatio}>{image}</AspectRatio>;
    }
    return image;
  }
);

CustomImage.displayName = "Custom Image";

export default CustomImage;
