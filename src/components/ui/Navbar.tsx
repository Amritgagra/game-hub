import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image boxSize={"60px"} src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
