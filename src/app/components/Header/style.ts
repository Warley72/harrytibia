import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavegationContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NavegationButton = styled.button`
  position: relative; 
  width: 130px;
  height: 50px;
  color: #A8A8A8;
  background-image: url("./header/backgroundButton.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  border: none;
  line-height: 1.3;
  font-size: 18px;
  font-family: 'Georgia', serif;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 74%; 
    left: 0;
    width: 100%; 
    height: 10px; 
    background-image: url("./header/boxBotton.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1; 
    transition: background-image 0.3s ease; 
  }

  &:hover::after {
    background-image: url("./header/boxBottonHover.png"); 
  }

  &:hover {
    background-image: url("./header/buttonHover.png");
    color: #F7F5D3;
  }
`;

