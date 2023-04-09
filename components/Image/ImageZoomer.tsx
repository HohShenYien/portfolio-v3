import { Box, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { Minimize, ZoomIn, ZoomOut } from "lucide-react";
import { ReactNode } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface IImageZoomerProps {
  children: ReactNode;
}

const ImageZoomer = ({ children }: IImageZoomerProps) => {
  return (
    <TransformWrapper initialScale={1}>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <Box pos="relative" cursor="grab" _active={{ cursor: "grabbing" }}>
          <TransformComponent>{children}</TransformComponent>
          <HStack pos="absolute" spacing={1} bottom={1} right={1}>
            <Tooltip label="Zoom In">
              <IconButton
                onClick={() => zoomIn()}
                icon={<ZoomIn />}
                aria-label="Zoom In"
                colorScheme="brand"
                variant="solid"
              />
            </Tooltip>
            <Tooltip label="Zoom Out">
              <IconButton
                onClick={() => zoomOut()}
                icon={<ZoomOut />}
                aria-label="Zoom Out"
                colorScheme="brand"
                variant="solid"
              />
            </Tooltip>
            <Tooltip label="Reset">
              <IconButton
                onClick={() => resetTransform()}
                icon={<Minimize />}
                aria-label="Zoom Out"
                colorScheme="brand"
                variant="solid"
              />
            </Tooltip>
          </HStack>
        </Box>
      )}
    </TransformWrapper>
  );
};

export default ImageZoomer;
