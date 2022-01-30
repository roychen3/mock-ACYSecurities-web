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

padding-top: 57px;
padding-bottom: 57px;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
  padding-top: 65px;
  padding-bottom: 65px;
}
@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  padding-top: 102px;
  padding-bottom: 102px;
}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      <StyledContent>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="webinar/*" element={<>webinar page</>} />
          <Route path="registered" element={<>registered page</>} />
          <Route path="login" element={<Login />} />
        </Routes>
      </StyledContent>

    </ThemeProvider>
  );
}

export default App
