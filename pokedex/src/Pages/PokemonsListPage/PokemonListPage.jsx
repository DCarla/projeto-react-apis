import { useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { CardsContainer, TituloPagina } from "./PokemonListPageStyle";
import { useRecebeDados } from "../../Hooks/useRecebeDados";

function PokemonListPage(props) {
  const pokemons = useRecebeDados();
  console.log(pokemons);
  return (
    <>
      <TituloPagina>Todos Pokémons</TituloPagina>
      <CardsContainer>
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              addPokemon={props.addPokemon}
              key={pokemon.name}
              pokemon={pokemon}
              removerPokemon={props.removerPokemon}
            />
          );
        })}
      </CardsContainer>
    </>
  );
}

export default PokemonListPage;
