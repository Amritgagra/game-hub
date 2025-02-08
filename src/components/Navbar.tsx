import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image boxSize={"60px"} src={logo} />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
