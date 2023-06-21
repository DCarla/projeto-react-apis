import { BotaoHome, BotaoPokedex, Container, Logo } from "./HeaderStyle";
import logo from "../../assets/LogoPokemon.svg";
import menor from "../../assets/iconeesquerdo.svg";
import { goToHome, goToPokedexPage } from "../../Router/cordinator";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Container>
        <Logo src={logo} alt="Logo" />
        {location.pathname !== "/pokedex" ? (
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
      </Container>
    </>
  );
}

export default Header;
