import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";

function App() {
  // Use `useBreakpointValue` to determine if the screen size is "lg" or larger
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"} bg={"gold"}>
          Nav
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
