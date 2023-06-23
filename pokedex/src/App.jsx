import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import { GlobaState } from "./Context/GlobalState";
import GlobalStyle from "./GlobalStyle";
import PokemonListPage from "./Pages/PokemonsListPage/PokemonListPage";
import { Router } from "./Router/Router";
import { ModalPokedex } from "./Components/Modalpokedex";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Router onOpen={onOpen} />
      <ModalPokedex isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </ChakraProvider>
  );
}

export default App;
