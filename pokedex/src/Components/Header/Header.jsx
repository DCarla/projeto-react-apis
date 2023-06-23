import {
  BotaoHome,
  BotaoPokedex,
  BotaoPokedexdetalhes,
  Container,
  Logo,
} from "./HeaderStyle";
import logo from "../../assets/LogoPokemon.svg";

import { goToHome, goToPokedexPage } from "../../Router/cordinator";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const pokemonExiste = props.pokedex.find(
    (pok) => pok.name == location.pathname.split("/")[2]
  );

  console.log(pokemonExiste);
  const [pokemonData, setPokemonData] = useState({});
  const getPokemon = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${location.pathname.split("/")[2]}`
    );
    const data = await result.json();
    console.log("aqui ", data);
    setPokemonData(data);
  };
  useEffect(() => {
    getPokemon();
  }, [location.pathname]);

  console.log("aqui ", pokemonData);

  return (
    <>
      <Container>
        <Logo src={logo} alt="Logo" />
        {location.pathname !== "/pokedex" &&
        !location.pathname.includes("pokemondetails") ? (
          <BotaoPokedex
            onClick={() => {
              goToPokedexPage(navigate);
            }}
          >
            Pokédex
          </BotaoPokedex>
        ) : (
          <BotaoHome
            onClick={() => {
              goToHome(navigate);
            }}
          >
            Todos os Pokemon
          </BotaoHome>
        )}
        {location.pathname.includes("pokemondetails") &&
          (pokemonExiste ? (
            <BotaoPokedexdetalhes
              onClick={() => props.removerPokemon(pokemonData)}
            >
              Excluir da Pokedex
            </BotaoPokedexdetalhes>
          ) : (
            <BotaoPokedexdetalhes
              adicionar
              onClick={() => props.addPokemon(pokemonData)}
            >
              Adicionar Pokedex
            </BotaoPokedexdetalhes>
          ))}
      </Container>
    </>
  );
}

export default Header;
