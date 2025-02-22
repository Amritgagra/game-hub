import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Image boxSize={"60px"} src={logo} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
