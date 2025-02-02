import { Icon } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <>
      <Switch
        colorPalette="blue"
        size="lg"
        checked={isDarkMode}
        onChange={toggleColorMode}
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        trackLabel={{
          on: (
            <Icon color="yellow.400">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
        }}
      />
    </>
  );
};

export default ColorModeSwitch;
