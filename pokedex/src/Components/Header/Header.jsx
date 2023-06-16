import { BotaoHome, BotaoPokedex, Container, Logo } from "./HeaderStyle";
import logo from "../../assets/LogoPokemon.svg";
import menor from "../../assets/iconeesquerdo.svg";
import { goToHome, goToPokedexPage } from "../../Router/cordinator";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <BotaoHome
          onClick={() => {
            goToHome(navigate);
          }}
        >
          <img src={menor} alt="Icone todos Pokémons" />
          <u>Todos Pokémons</u>
        </BotaoHome>

        <Logo src={logo} alt="Logo" />
        <BotaoPokedex
          onClick={() => {
            goToPokedexPage(navigate);
          }}
        >
          {" "}
          Pokédex{" "}
        </BotaoPokedex>
      </Container>
    </>
  );
}

export default Header;
