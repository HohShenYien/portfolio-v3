import create from "zustand";
import { ImageStore } from "../types/ImageStore";

export const useImageStore = create<Partial<ImageStore>>()(
  (set): Partial<ImageStore> => ({
    src: undefined,
    isOpen: false,
    setSrc: (src: string) => {
      set({
        src,
        isOpen: true,
      });
    },
    onOpen: () => {
      set({
        isOpen: true,
      });
    },
    onClose: () => {
      set({
        isOpen: false,
      });
    },
  })
);
