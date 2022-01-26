import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root,
.app {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  color: ${({ theme }) => theme.mainText};
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.mainText};

  &:hover {
    color: ${({ theme }) => theme.highlight};
    cursor: pointer;
  }
}

button {
  &:hover {
    cursor: pointer;
  }
}
`
