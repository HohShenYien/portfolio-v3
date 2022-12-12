import ImageViewer from "./ImageViewer";
import ImgurImage from "./ImgurImage";
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

export { ImgurImage, ImageViewer, Logo };
