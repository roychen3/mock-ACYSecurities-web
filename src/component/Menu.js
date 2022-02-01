import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledMainMenuItem = styled.div`
display: none;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  display: initial;
  font-size: 12px;
  margin-right: 2rem;
}
`
const StyledMainMenuItemIcon = styled.i`
margin-left: 0.5rem;
`
const MainMenuItem = ({ text }) => {
    return (
        <StyledMainMenuItem>
            {text}
            <StyledMainMenuItemIcon className="fas fa-angle-down" />
        </StyledMainMenuItem>
    )
}
MainMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
}

const StyledMainMenuList = styled.div`
margin-left: 2rem;
display:flex;
justify-content:space-between;
`
const MainMenuList = ({ list }) => {
    return (
        <StyledMainMenuList>
            {list.map((item, index) => <MainMenuItem key={index} text={item} />)}
        </StyledMainMenuList>
    )
}
MainMenuList.defaultProps = {
    list: [],
}
MainMenuList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default MainMenuList
