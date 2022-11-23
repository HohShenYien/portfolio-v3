export interface ImageStore {
  src: string;
  isOpen: boolean;
  setSrc: (value: string) => void;
  onOpen: () => void;
  onClose: () => void;
}
