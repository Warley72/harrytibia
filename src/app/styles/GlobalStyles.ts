import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Georgia', serif; /* Ou 'Cardo' */
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    background-image: url('/background.png');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  }
`;

