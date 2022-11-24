import { Modal, ModalContent, ModalOverlay, Image } from "@chakra-ui/react";
import { useImageStore } from "../../store";

const ImageViewer = () => {
  const imageStore = useImageStore();
  return (
    imageStore?.isOpen && (
      <Modal
        isOpen={imageStore?.isOpen ?? false}
        onClose={() => imageStore?.onClose?.()}
        size="full"
      >
        <ModalOverlay />
        <ModalContent
          bg="transparent"
          onClick={() => imageStore?.onClose?.()}
          justifyContent="center"
        >
          <Image
            src={imageStore.src ?? ""}
            alt="HELLO"
            maxH="80vh"
            height="auto"
            objectFit="contain"
          />
        </ModalContent>
      </Modal>
    )
  );
};

export default ImageViewer;