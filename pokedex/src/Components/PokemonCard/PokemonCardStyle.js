import styled from "styled-components";

export const Container = styled.div`
  width: 30vw;
  height: 29vh;
  display: flex;
  align-items: end;
  position: relative;
`;

export const CardBox = styled.div`
  width: 29.9vw;
  height: 23vh;
  background-color: #729f92;
  border-radius: 0.6vw;
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.1vw;
  color: #fff;
  overflow: hidden;
`;
export const BoxInfoT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
`;
export const IdPok = styled.p`
  font-size: 0.8vw;
`;

export const IdNome = styled.p`
  font-size: 1.6vw;
`;

export const DetailButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 0.8vw;
  cursor: pointer;
`;

export const PokemonImg = styled.img`
  position: absolute;
  top: -1vh;
  right: 0.2vw;
  width: 10vw;
`;

export const CapturarButton = styled.button`
  position: absolute;
  bottom: 3vh;
  right: 3.6vw;
  width: 4.2vw;
  height: 3.2vh;
  background: #ffffff;
  border-radius: 0.5vw;
  font-size: 1vw;
  border: none;
`;

export const IdCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
`;

export const IdPokemom = styled.p`
  font-size: 0.8vw;
`;
export const NomePokemom = styled.p`
  font-size: 1.6vw;
`;
