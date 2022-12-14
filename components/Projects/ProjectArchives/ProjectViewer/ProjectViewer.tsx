import { Modal, ModalContent, ModalOverlay, Box } from "@chakra-ui/react";
import { projectArchives } from "components/Content";
import { useViewerStore } from "store";
import ProjectViewerContainer from "./ProjectViewerContainer";
import ProjectViewerContent from "./ProjectViewerContent";

const ProjectViewer = () => {
  const { key: year, index, isOpen, onClose } = useViewerStore();

  const data = projectArchives[year ?? ""]?.[index ?? 0];

  return isOpen && data ? (
    <Modal isOpen={isOpen ?? false} onClose={() => onClose?.()} size="full">
      <ModalOverlay />
      <ModalContent
        bg="transparent"
        justifyContent="center"
        onClick={() => onClose?.()}
      >
        <Box
          maxH="90vh"
          px={{ lg: 8, base: 4 }}
          onClick={(event) => event.stopPropagation()}
        >
          <ProjectViewerContainer project={data}>
            <ProjectViewerContent {...data} year={year ?? ""} />
          </ProjectViewerContainer>
        </Box>
      </ModalContent>
    </Modal>
  ) : (
    <></>
  );
};

export default ProjectViewer;
