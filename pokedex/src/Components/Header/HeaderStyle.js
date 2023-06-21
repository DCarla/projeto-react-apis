import styled from "styled-components";

export const Container = styled.header`
  border: 1px solid black;
  height: 14vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  position: relative;
`;

export const BotaoPokedex = styled.button`
  /* padding: 4px 10px; */

  width: 15vw;
  min-height: 10vh;
  max-height: 17vh;
  background: #33a4f5;
  border-radius: 1vh;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 2vw;
  font-family: "Poppins", sans-serif;
`;
0;
export const Logo = styled.img`
  min-width: 12vw;
  max-width: 20vw;
`;

export const BotaoHome = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 14vw;
  height: 5vh;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4vw;
  display: flex;
  align-items: center;
  gap: 5vw img {
    height: 2vh;
  }
  position: absolute;
  left: 50px;
`;
