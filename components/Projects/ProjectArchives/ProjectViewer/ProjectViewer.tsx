import {
  Modal,
  ModalContent,
  ModalOverlay,
  Box,
  Grid,
  Text,
  Flex,
  HStack,
  VStack,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { projectArchives } from "components/Content";
import { Dot } from "components/Extra";
import { ImgurImage } from "components/Image";
import { useProjectViewerStore } from "store";
import { colors } from "styles/variables";
import { getProjectIcon } from "../../OtherProjects/utils";
import ProjectLinks from "../../ProjectLinks";
import ProjectViewerContainer from "./ProjectViewerContainer";
import ProjectViewerContent from "./ProjectViewerContent";

const ProjectViewer = () => {
  const { year, index, isOpen, onOpen, onClose, next, prev, canPrev, canNext } =
    useProjectViewerStore();

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
