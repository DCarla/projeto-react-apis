import {
  PokemonImg,
  CardBox,
  Container,
  InfoBox,
  BoxInfoT,
  DetailButton,
  CapturarButton,
  IdPok,
  IdNome,
} from "./PokemonCardStyle";
import pokebola from "../../assets/bola.svg";
import estilo from "../../assets/Normal.svg";
import pok from "../../assets/Snorlax.svg";
function PokemonCard(props) {
  return (
    <Container>
      <PokemonImg src={pok} alt="Pokemon Snorlax" />
      <CardBox>
        <InfoBox>
          <BoxInfoT>
            <IdPok>ID</IdPok>
            <IdNome>{props.pokemon.name}</IdNome>
            <img src={estilo} alt=" Tipo do pokemon" />
          </BoxInfoT>
          <DetailButton>
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
