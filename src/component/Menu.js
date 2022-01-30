import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


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

const StyledMenuList = styled.div`
margin-left: 2rem;
display:flex;
justify-content:space-between;
`
const MenuList = ({ list }) => {
    return (
        <StyledMenuList>
            {list.map((item, index) => <MenuItem key={index} text={item} />)}
        </StyledMenuList>
    )
}
MenuList.defaultProps = {
    list: [],
}
MenuList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default MenuList
