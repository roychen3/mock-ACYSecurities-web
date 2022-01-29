import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  Routes,
  Route,
} from "react-router-dom"

import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'

import Header from './container/Header'
import Login from './container/Login'
import Home from './container/page/home'


const StyledContent = styled.div`
min-height: 100vh;
padding-top: 43px;

@media (min-width: 992px) {
  padding-top: 80px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      <StyledContent>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </StyledContent>
    </ThemeProvider>
  );
}

export default App
