import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
    
  }
@media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}
@media(max-width: 720px){
  html {
    font-size: 87.5%;
  }
}
body {
  background: white;
  color: #0a0a0a;
}
body, input, textarea, select, button {
  font: 400 1rem 'Roboto', sans-serif;
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}

`