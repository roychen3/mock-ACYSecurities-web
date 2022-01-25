import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'

import Header from './component/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
