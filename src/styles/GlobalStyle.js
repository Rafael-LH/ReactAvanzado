import { createGlobalStyle } from 'styled-components'

// de esta manera podemos crear estilos globales con styled components
// aqui estoy haciendo mi archivo de reset global para toda mi app
export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    /* utilizara la fuente que tenga nuestro computador */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button, figure { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    /* es para que no haga un rebote al llegar al final */
    overscroll-behavior: none;
    width: 100%; 
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
