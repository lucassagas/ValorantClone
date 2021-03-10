import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #262626;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  *, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

  html, border-style, #root {
    height: 100%;
  }
`
