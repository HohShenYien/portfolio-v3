import { Modal, ModalContent, ModalOverlay, Image } from "@chakra-ui/react";
import { useImageStore } from "../../store";
import ImgurImage from "./ImgurImage";

const ImageViewer = () => {
  const imageStore = useImageStore();
  return imageStore?.isOpen ? (
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
        <ImgurImage
          imgurId={imageStore.src}
          alt="Project Image"
          size="full"
          maxH="80vh"
          height="auto"
          objectFit="contain"
        />
      </ModalContent>
    </Modal>
  ) : (
    <></>
  );
};

export default ImageViewer;
