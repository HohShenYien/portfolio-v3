import { ImgurSize } from ".";

interface ImgurUrlProp {
  size: ImgurSize;
  imgurId: string;
  format?: string;
}

const sizeToCharMap: Record<ImgurSize, string> = {
  full: "",
  "small square": "s",
  "big square": "b",
  "small thumbnail": "t",
  "medium thumbnail": "m",
  "large thumbnail": "l",
  "huge thumbnail": "h",
};

export const generateImgurUrl = ({
  size = "large thumbnail",
  imgurId,
  format = "png",
}: ImgurUrlProp) => {
  return `https://i.imgur.com/${imgurId}${sizeToCharMap[size]}.${format}`;
};

const getFallbackSize = (size: ImgurSize): ImgurSize => {
  switch (size) {
    case "full":
    case "huge thumbnail":
    case "large thumbnail":
      return "small thumbnail";
    default:
      return "small square";
  }
};

export const generateFallbackSrc = ({
  size,
  imgurId,
  format = "png",
}: ImgurUrlProp) => {
  return generateImgurUrl({ size: getFallbackSize(size), imgurId, format });
};
