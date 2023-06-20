import grass from "../../assets/imagens/iconeGrass.svg";
import bug from "../../assets/imagens/iconeBug.svg";
import dark from "../../assets/imagens/iconeDarck.svg";
import dragon from "../../assets/imagens/iconeDragon.svg";
import eletric from "../../assets/imagens/iconeEletric.svg";
import fairy from "../../assets/imagens/iconeFairy.svg";
import fighting from "../../assets/imagens/iconeFighting.svg";
import fire from "../../assets/imagens/iconeFire.svg";
import ghost from "../../assets/imagens/iconeGhost.svg";
import ground from "../../assets/imagens/iconeGround.svg";
import ice from "../../assets/imagens/iconeIce.svg";
import normal from "../../assets/imagens/iconeNormal.svg";
import poison from "../../assets/imagens/iconePoison.svg";
import psychic from "../../assets/imagens/iconePsychic.svg";
import rock from "../../assets/imagens/iconeRock.svg";
import steel from "../../assets/imagens/iconeSteel.svg";
import water from "../../assets/imagens/iconeWater.svg";
import flying from "../../assets/imagens/iconeflying.svg";
import { Tag } from "./SwitchTagStyle";
("");

export const SwitchTag = (props) => {
  switch (props.type) {
    case "grass":
      return (
        <Tag className="grass">
          <img src={grass} />
          Grass
        </Tag>
      );

    case "poison":
      return (
        <Tag className="poison">
          <img src={poison} />
          Poison
        </Tag>
      );

    case "dark":
      return (
        <Tag className="dark">
          <img src={dark} />
          Normal
        </Tag>
      );

    case "bug":
      return (
        <Tag className="bug">
          <img src={bug} />
          Bug
        </Tag>
      );

    case "water":
      return (
        <Tag className="water">
          <img src={water} />
          Water
        </Tag>
      );

    case "steel":
      return (
        <Tag className="steel">
          <img src={steel} />
          steel
        </Tag>
      );

    case "rock":
      return (
        <Tag className="rock">
          <img src={rock} />
          Rock
        </Tag>
      );

    case "psychic":
      return (
        <Tag className="psychic">
          <img src={psychic} />
          Psychic
        </Tag>
      );

    case "normal":
      return (
        <Tag className="normal">
          <img src={normal} />
          Normal
        </Tag>
      );

    case "dragon":
      return (
        <Tag className="dragon">
          <img src={dragon} />
          Dragon
        </Tag>
      );

    case "eletric":
      return (
        <Tag className="eletric">
          <img src={eletric} />
          Eletric
        </Tag>
      );

    case "ice":
      return (
        <Tag className="ice">
          <img src={ice} />
          Ice
        </Tag>
      );

    case "ground":
      return (
        <Tag className="ground">
          <img src={ground} />
          Ground
        </Tag>
      );

    case " ghost":
      return (
        <Tag className="ghost">
          <img src={ghost} />
          Ghost
        </Tag>
      );

    case "fire":
      return (
        <Tag className="fire">
          <img src={fire} />
          Fire
        </Tag>
      );

    case "fairy":
      return (
        <Tag className="fairy">
          <img src={fairy} />
          Fairy
        </Tag>
      );

    case "fighting":
      return (
        <Tag className="fighting">
          <img src={fighting} />
          Fighting
        </Tag>
      );
    case "flying":
      return (
        <Tag className="flying">
          <img src={flying} />
          Flying
        </Tag>
      );
  }
  return "test";
};
