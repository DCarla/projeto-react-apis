import PokemonCard from "../../Components/PokemonCard/PokemonCard";

function PokedexPage(props) {
  return (
    <>
      {props.pokedex.map((pokemon) => {
        return (
          <PokemonCard
            addPokemon={props.addPokemon}
            key={pokemon.name}
            pokemon={pokemon}
            removerPokemon={props.removerPokemon}
          />
        );
      })}
    </>
  );
}

export default PokedexPage;
