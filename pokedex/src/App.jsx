import Header from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import PokemonListPage from "./Pages/PokemonsListPage/PokemonListPage";
import { Router } from "./Router/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
