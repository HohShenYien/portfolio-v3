export interface IViewerData {
  index: number;
  key: string;
}

export interface ViewerStore {
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
