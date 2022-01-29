import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

import { userLogout, checkUserToken } from '../redux/actions'

import imgLogo from '../asset/img/logo.png'
import Button from '../component/Button'
import LoadingShadow from '../component/LoadingShadow'


const StyledMenuItem = styled.div`
display: none;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  display: initial;
  font-size: 12px;
  margin-right: 2rem;
}
`
const StyledMenuItemIcon = styled.i`
margin-left: 0.5rem;
`
const MenuItem = ({ text }) => {
  return (
    <StyledMenuItem>
      {text}
      <StyledMenuItemIcon className="fas fa-angle-down" />
    </StyledMenuItem>
  )
}
MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
}

const menuList = ['Why ACY', 'Products', 'Platforms', 'Education', 'Partners']
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
display:flex;
align-items:center;
font-size: 18px;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  width: 80%;
  margin: 0 auto;
}
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
width: 120px;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  width: 136px;
}
`
const StyledHeaderLeftContainer = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const StyledMenuContainer = styled.div`
margin-left: 2rem;
display:flex;
justify-content:space-between;
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


  return (
    <>
      {(userLogoutLoading || checkUserTokenLoading) &&
        <LoadingShadow />
      }
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledMobilMenuIcon className="fas fa-bars" />
          <StyledLogo src={imgLogo} />
          <StyledHeaderLeftContainer>
            <StyledMenuContainer>
              {menuList.map((item, index) => <MenuItem key={index} text={item} />)}
            </StyledMenuContainer>
            {showLoginButton
              ?
              <Link to="/login">
                <Button text="Login" />
              </Link>
              :
              isInLoginPage === false &&
              <Button text="Logout" onClick={handleLogoutClick} />
            }
          </StyledHeaderLeftContainer>
        </StyledHeaderContainer>
      </StyledHeader>
    </>
  )
}

Header.propTypes = {}

export default Header
