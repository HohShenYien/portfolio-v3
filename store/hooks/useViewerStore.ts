import { projectArchives } from "components/Content";
import create from "zustand";
import { IViewerData, ViewerStore } from "../types/ViewerStore";

export const useViewerStore = create<Partial<ViewerStore>>()(
  (set, get): Partial<ViewerStore> => ({
    key: undefined,
    index: undefined,
    isOpen: false,
    setData: ({ key, index }: IViewerData) => {
      set({
        key,
        index,
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
    next: () => {
      const index = (get().index ?? 0) + +(get().canNext?.() ?? 0);
      set({ index });
    },
    canNext: () => {
      return (
        (get().index ?? 0) < (projectArchives[get().key ?? ""]?.length ?? 0) - 1
      );
    },
    prev: () => {
      const index = (get().index ?? 0) - +(get().canPrev?.() ?? 0);
      set({ index });
    },
    canPrev: () => {
      return (get().index ?? 0) > 0;
    },
  })
);
