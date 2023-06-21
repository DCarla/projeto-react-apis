import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import Header from "../Components/Header/Header";
import { useState } from "react";

export const Router = () => {
  const [pokedex, setPokedex] = useState([]);

  const addPokemon = (pokemonToAdd) => {
    const jaNapokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!jaNapokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      alert("Pokemon foi adicionado na Pokedex");
    } else {
      alert("Pokemons já esta Pokedex");
    }
  };

  const removerPokemon = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (ItemPokedex) => ItemPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
  };

  console.log("pokedex", pokedex);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PokemonListPage
              addPokemon={addPokemon}
              removerPokemon={removerPokemon}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage pokedex={pokedex} removerPokemon={removerPokemon} />
          }
        />
        <Route path="/pokemondetails/:nome" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
