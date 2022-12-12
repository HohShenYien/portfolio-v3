import { projectArchives } from "components/Content";
import create from "zustand";
import {
  IProjectViewerData,
  ProjectViewerStore,
} from "../types/ProjectViewerStore";

export const useProjectViewerStore = create<Partial<ProjectViewerStore>>()(
  (set, get): Partial<ProjectViewerStore> => ({
    year: undefined,
    index: undefined,
    isOpen: false,
    setData: ({ year, index }: IProjectViewerData) => {
      set({
        year,
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
        (get().index ?? 0) <
        (projectArchives[get().year ?? ""]?.length ?? 0) - 1
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
