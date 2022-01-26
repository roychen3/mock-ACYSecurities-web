import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import configureStore from './redux/store'

import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'

import Header from './component/Header'

function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </Provider>
  );
}

export default App
