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
} from "./PokemonCardStyle";
import pokebola from "../../assets/bola.svg";
import estilo from "../../assets/Normal.svg";
import pok from "../../assets/Snorlax.svg";
import { useNavigate } from "react-router-dom";
import { SwitchTag } from "../SwitchTag/SwitchTag";
import React, { useEffect, useState } from "react";

export function PokemonCard(props) {
  const [pokemonData, setPokemonData] = useState({});
  const navigate = useNavigate();

  const goToDetalhePage = () => {
    navigate("/detalhes");
  };
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

      <CardBox>
        <InfoBox>
          <IdCard>
            <IdPokemom>#{pokemonData.id} </IdPokemom>
            <NomePokemom>{props.pokemon.name}</NomePokemom>
            {pokemonData?.types?.map((item) => (
              <SwitchTag type={item.type.name} />
            ))}
          </IdCard>

          <DetailButton onClick={goToDetalhePage}>
            <u>Detalhes</u>
          </DetailButton>
        </InfoBox>
        <img src={pokebola} alt="Bola de fundo" />
      </CardBox>
      <CapturarButton>Capturar</CapturarButton>
    </Container>
  );
}

export default PokemonCard;
