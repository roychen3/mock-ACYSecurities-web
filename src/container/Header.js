import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

import { userLogout, checkUserToken } from '../redux/actions'

import imgLogo from '../asset/img/logo.svg'
import Button from '../component/Button'
import LoadingShadow from '../component/LoadingShadow'
import MainMenuList, { SideMenu } from '../component/Menu'


const menuList = [
  {
    text: 'Why ACY',
    list: [
      {
        text: 'Why ACY item1',
        list: [],
      },
      {
        text: 'Why ACY item2',
        list: [],
      },
      {
        text: 'Why ACY item3',
        list: [],
      }
    ]
  },
  {
    text: 'Products',
    list: [
      {
        text: 'Products item1',
        list: [],
      },
      {
        text: 'Products item2',
        list: [],
      },
      {
        text: 'Products item3',
        list: [],
      }
    ]
  },
  {
    text: 'Platforms',
    list: [
      {
        text: 'Platforms item1',
        list: [],
      },
      {
        text: 'Platforms item2',
        list: [],
      },
      {
        text: 'Platforms item3',
        list: [],
      }
    ]
  },
  {
    text: 'Education',
    list: [
      {
        text: 'Education item1',
        list: [],
      },
      {
        text: 'Education item2',
        list: [],
      },
      {
        text: 'Education item3',
        list: [],
      }
    ]
  },
  {
    text: 'Partners',
    list: [
      {
        text: 'Partners item1',
        list: [],
      },
      {
        text: 'Partners item2',
        list: [],
      },
      {
        text: 'Partners item3',
        list: [],
      }
    ]
  },
]
const StyledHeader = styled.header`
padding: 0.5rem;
width: 100%;
position: fixed;
z-index: ${({ theme }) => theme.zIndex.header};
top: 0; 
background-color: ${({ theme }) => theme.mainBackground};
border-bottom: 1px solid ${({ theme }) => theme.subBorderColor};
font-size: 18px;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  padding: 1.5rem 0;
  font-size: 27px;
}
`
const StyledHeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 18px;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  width: 80%;
  margin: 0 auto;
}
`
const StyledMobilMenuIconAndLogoContainer = styled.div`
display:flex;
align-items:center;
`
const StyledMobilMenuIcon = styled.i`
margin-right: 1rem;

&:hover {
  cursor: pointer;
}

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  display: none;
}
`
const StyledLogo = styled.img`
height: 32px;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  height: 48px;
}
`
const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const userInformation = useSelector((state) => state.home.userInformation)

  const isInLoginPage = location.pathname === '/login'
  const showLoginButton = isInLoginPage === false && !userInformation.token

  const handleLogoutClick = (event) => {
    event.preventDefault()
    dispatch(userLogout())
  }
  const userLogoutLoading = useSelector((state) => state.home.userLogoutLoading)

  const checkUserTokenLoading = useSelector((state) => state.home.checkUserTokenLoading)
  const checkUserTokenError = useSelector((state) => state.home.checkUserTokenError)
  useEffect(() => {
    if (checkUserTokenLoading === false && checkUserTokenError) {
      localStorage.clear()
    }
  }, [checkUserTokenLoading])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkUserToken())
    }
  }, [])

  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)
  const sideMenuOnClose = () => {
    setSideMenuIsOpen(false)
  }

  return (
    <>
      {(userLogoutLoading || checkUserTokenLoading) &&
        <LoadingShadow />
      }
      <SideMenu isOpen={sideMenuIsOpen} onClose={sideMenuOnClose} list={menuList} />
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledMobilMenuIconAndLogoContainer>
            <StyledMobilMenuIcon className="fas fa-bars" onClick={() => { setSideMenuIsOpen(true) }} />

            <Link to="/home">
              <StyledLogo src={imgLogo} />
            </Link>
          </StyledMobilMenuIconAndLogoContainer>
          <MainMenuList list={menuList} />
          {showLoginButton
            ?
            <Link to="/login">
              <Button text="Login" />
            </Link>
            :
            isInLoginPage === false
              ?
              <Button text="Logout" onClick={handleLogoutClick} highlight />
              :
              <div />
          }
        </StyledHeaderContainer>
      </StyledHeader>
    </>
  )
}

Header.propTypes = {}

export default Header
