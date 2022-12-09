import ImageViewer from "./ImageViewer";
import CustomImage from "./CustomImage";
import Logo from "./Logo";

export type ImgurSize =
  | "small square"
  | "big square"
  | "small thumbnail"
  | "medium thumbnail"
  | "large thumbnail"
  | "huge thumbnail"
  | "full";

export * from "./utils";

export { CustomImage, ImageViewer, Logo };
