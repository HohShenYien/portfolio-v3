import {
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Flex,
  Box,
  Icon,
  IconButton,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { readings } from "components/Content";
import { ImgurImage } from "components/Image";
import { ExternalLink, X } from "lucide-react";
import { useViewerStore } from "store";
import { ReadingViewerContent } from ".";
import style from "./ReadingViewer.module.scss";

const ReadingViewer = () => {
  const { key, index, isOpen, onClose, meta } = useViewerStore();

  const data =
    meta == "current"
      ? readings.current[key as "new" | "reading" | "completed"]?.[index ?? 0]
      : readings.past[index ?? 0];

  const { title, image, link } = data ?? {};

  return isOpen && data.title ? (
    <Modal isOpen={isOpen ?? false} onClose={() => onClose?.()} size="full">
      <ModalOverlay />
      <ModalContent
        bg="transparent"
        justifyContent="center"
        onClick={() => onClose?.()}
        alignItems="center"
      >
        <Flex
          onClick={(event) => event.stopPropagation()}
          bg="brand.950"
          flexDir={{ base: "column", md: "row" }}
          maxW="90vw"
          pos="relative"
        >
          <Box className={style.container} bg="brand.1000">
            <ImgurImage
              alt={title}
              imgurId={image.id}
              format={image.format}
              size="large thumbnail"
              h={{ md: "md", base: "auto" }}
              w={{ md: "auto", base: "90vw" }}
              maxH={{ base: "40vh", md: "none" }}
              objectFit="contain"
            />

            <Link href={link} target="_blank">
              <Box className={style.overlay}>
                <Icon
                  as={ExternalLink}
                  aria-label="External Link"
                  color="brand.200"
                  boxSize="16"
                />
              </Box>
            </Link>
          </Box>
          <ReadingViewerContent {...data} />
          <IconButton
            bgColor="#33333360"
            aria-label="close"
            pos="absolute"
            left="1"
            top="1"
            icon={<X size="24px" color="#DDD" />}
            rounded="full"
            _hover={{
              bgColor: "#33333390",
            }}
            _active={{
              bgColor: "#333333B0",
            }}
            onClick={() => onClose?.()}
          />
        </Flex>
      </ModalContent>
    </Modal>
  ) : (
    <></>
  );
};

export default ReadingViewer;
