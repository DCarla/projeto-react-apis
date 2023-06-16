import { useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { CardsContainer, TituloPagina } from "./PokemonListPageStyle";
import { useRecebeDados } from "../../Hooks/useRecebeDados";

function PokemonListPage() {
  const pokemons = useRecebeDados();
  console.log(pokemons);
  return (
    <>
      <TituloPagina>Todos Pokémons</TituloPagina>
      <CardsContainer>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </CardsContainer>
    </>
  );
}

export default PokemonListPage;
