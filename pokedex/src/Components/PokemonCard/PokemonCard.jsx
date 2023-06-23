import {
  PokemonImg,
  CardBox,
  Container,
  InfoBox,
  DetailButton,
  CapturarButton,
  IdCard,
  IdPokemom,
  NomePokemom,
  RemoveButton,
} from "./PokemonCardStyle";
import pokebola from "../../assets/bola.svg";
import estilo from "../../assets/Normal.svg";
import pok from "../../assets/Snorlax.svg";
import { useNavigate } from "react-router-dom";
import { SwitchTag } from "../SwitchTag/SwitchTag";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { goToDetailPage } from "../../Router/cordinator";
import { switchCores } from "../SwitchTag/switchCores";

export function PokemonCard(props) {
  const [pokemonData, setPokemonData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const getPokemon = async (Link) => {
    const result = await fetch(Link);
    const data = await result.json();
    setPokemonData(data);
  };
  console.log("pokemondata", setPokemonData);
  useEffect(() => {
    getPokemon(props.pokemon.url);
  }, []);

  console.log(props);
  return (
    <Container>
      <PokemonImg
        src={pokemonData?.sprites?.other["official-artwork"].front_default}
        alt="Pokemon"
      />

      <CardBox
        cor={switchCores(pokemonData.types && pokemonData.types[0].type.name)}
      >
        <InfoBox>
          <IdCard>
            <IdPokemom>#{pokemonData.id} </IdPokemom>
            <NomePokemom>{props.pokemon.name}</NomePokemom>
            {pokemonData?.types?.map((item) => (
              <SwitchTag type={item.type.name} key={item.type.name} />
            ))}
          </IdCard>

          <DetailButton
            onClick={() => goToDetailPage(navigate, pokemonData.name)}
          >
            <u>Detalhes</u>
          </DetailButton>
        </InfoBox>
        <img src={pokebola} alt="Bola de fundo" />
      </CardBox>

      {location.pathname === "/" ? (
        <CapturarButton onClick={() => props.addPokemon(props.pokemon)}>
          Capturar!
        </CapturarButton>
      ) : (
        <RemoveButton onClick={() => props.removerPokemon(props.pokemon)}>
          Excluir
        </RemoveButton>
      )}
    </Container>
  );
}

export default PokemonCard;
