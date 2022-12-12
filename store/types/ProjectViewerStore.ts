export interface IProjectViewerData {
  index: number;
  year: string;
}

export interface ProjectViewerStore {
  year: string;
  index: number;
  isOpen: boolean;
  setData: (value: IProjectViewerData) => void;
  onOpen: () => void;
  onClose: () => void;
  next: () => void;
  prev: () => void;
  canPrev: () => boolean;
  canNext: () => boolean;
}
