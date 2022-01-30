import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { useSelector } from 'react-redux'

import { GlobalStyles } from './globalStyles'
import { theme } from './webTheme'

import Header from './container/Header'
import Login from './container/Login'
import Home from './container/page/home'
import RegisteredList from './container/page/registeredList'


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
  const userInformation = useSelector((state) => state.home.userInformation)
  const isLogined = userInformation.token

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      <StyledContent>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="webinar/*" element={<>webinar page</>} />
          {!isLogined &&
            <Route path="login" element={<Login />} />
          }
          {isLogined &&
            <Route path="registered" element={<RegisteredList />} />
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </StyledContent>

    </ThemeProvider>
  );
}

export default App
