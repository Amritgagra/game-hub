import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show when={showAside}>
          <GridItem area={"aside"} bg={"lightblue"}>
            aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"pink"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
