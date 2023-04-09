import { Modal, ModalContent, ModalOverlay, Box } from "@chakra-ui/react";
import { useImageStore } from "../../store";
import ImgurImage from "./ImgurImage";
import ImageZoomer from "./ImageZoomer";

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
        justifyContent="center"
        alignItems="center"
        onClick={() => imageStore?.onClose?.()}
      >
        <Box
          onClick={(event) => event.stopPropagation()}
          display="flex"
          justifyContent="center"
        >
          <ImageZoomer>
            <ImgurImage
              imgurId={imageStore.src}
              alt="Project Image"
              size="full"
              maxH="80vh"
              height="auto"
              objectFit="contain"
            />
          </ImageZoomer>
        </Box>
      </ModalContent>
    </Modal>
  ) : (
    <></>
  );
};

export default ImageViewer;
