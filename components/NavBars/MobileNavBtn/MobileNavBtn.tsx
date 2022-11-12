import { Box } from "@chakra-ui/react";
import styles from "./MobileNavBtn.module.scss";
import { Dispatch, SetStateAction } from "react";
import { m } from "framer-motion";

interface IMobileNavBtnProp {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const MobileNavBtn = ({ setIsOpen, isOpen }: IMobileNavBtnProp) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="flex-start"
      onClick={() => setIsOpen(!isOpen)}
      w="50px"
      h="50px"
      p="5px"
      as={m.button}
      initial={{ rotate: 0 }}
      animate={{ rotate: isOpen ? 360 : 0 }}
      transition="ease all 120ms"
      transformOrigin="center center"
    >
      <Box className={`${styles["nav-btn"]} ${isOpen ? styles.open : ""}`} />
    </Box>
  );
};

export default MobileNavBtn;
