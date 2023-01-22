export interface IViewerData {
  index: number;
  key?: string;
  meta?: "current" | "past";
}

export interface ViewerStore {
  meta: "current" | "past";
  key: string;
  index: number;
  isOpen: boolean;
  setData: (value: IViewerData) => void;
  onOpen: () => void;
  onClose: () => void;
  next: () => void;
  prev: () => void;
  canPrev: () => boolean;
  canNext: () => boolean;
}
