import { Flex, IconButton, Grid, Box } from "@chakra-ui/react";
import { ImageZoomer, ImgurImage } from "components/Image";
import { IProjectArchive } from "components/Projects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ReactNode, useMemo } from "react";
import { useViewerStore } from "store";
import { colors } from "styles/variables";
import style from "./MovementButton.module.scss";

interface IProjectViewerContainerProps {
  project: IProjectArchive;
  children: ReactNode;
}

const ProjectViewerContainer = ({
  project,
  children,
}: IProjectViewerContainerProps) => {
  const { onClose, canPrev, canNext, prev, next, index } = useViewerStore();

  const canGoNext = useMemo(() => {
    return canNext?.() ?? false;
  }, [canNext, index]);

  const canGoPrev = useMemo(() => {
    return canPrev?.() ?? false;
  }, [canPrev, index]);

  return (
    <Grid templateColumns={{ lg: "2fr 1fr", base: "1fr" }}>
      <Flex
        bg="brand.1000"
        justifyContent="center"
        alignItems="center"
        pos="relative"
        className={style.image}
        px={{ md: 12 }}
      >
        <ImageZoomer>
          <ImgurImage
            imgurId={project.img}
            size="full"
            alt="HELLO"
            w="full"
            maxH="90vh"
            minH="450px"
            objectFit={"contain"}
          />
        </ImageZoomer>

        {canGoPrev && (
          <Box
            className={style.container}
            onClick={() => prev?.()}
            px={2}
            left={0}
          >
            <IconButton
              aria-label="Previous Project"
              icon={<ChevronLeft size="36px" color={colors.brand[500]} />}
              className={style.button}
              _focusVisible={{
                outlineColor: "brand.400",
              }}
            />
          </Box>
        )}
        {canGoNext && (
          <Box
            className={style.container}
            onClick={() => next?.()}
            px={2}
            right={0}
          >
            <IconButton
              aria-label="Next Project"
              icon={<ChevronRight size="36px" color={colors.brand[500]} />}
              className={style.button}
              _focusVisible={{
                outlineColor: "brand.400",
              }}
            />
          </Box>
        )}
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
      {children}
    </Grid>
  );
};
export default ProjectViewerContainer;
