import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --body-bg: var(--color-greys-200);
    --font-family: 'Figtree', sans-serif;    
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --primary-color: #009EE3;
    --color-greens-500: #74C476;   
    --color-greys-100: #FFFFFF;
    --color-greys-200: #F2F2F2;
    --color-greys-300: #F5F5F5;
    --color-greys-400: #CCCCCC;
    --color-greys-700: #575757;
    --color-greys-900: #1A1A1A;
    --error-color: #F23D4F;
    --warning-color: #FF7733;
    --success-color: #00A650;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    line-height: 1.5;
  }

  body {
    background-color: var(--body-bg);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    color: var(--color-greys-900);
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--color-greys-900);
    font-weight: var(--font-weight-bold);
  }
`;

export default GlobalStyle;
