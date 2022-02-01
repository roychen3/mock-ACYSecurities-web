import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledSubMenuItem = styled.span`
margin-right: 2rem;
padding: 6px 0 6px;

&:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.media.hoverHighlight};
    padding-bottom: 3px;
    border-bottom: 3px solid ${({ theme }) => theme.media.hoverHighlight};
}
`
const SubMenuItem = ({ text }) => {
    return (
        <StyledSubMenuItem>
            {text}
        </StyledSubMenuItem>
    )
}
SubMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
}

const StyledSubMenuList = styled.div`
position: absolute;
top: calc(100% - 1rem);
left: 0;
width: 100%;
padding: 2rem;
background-color: ${({ theme }) => theme.mainBackground};
box-shadow: 1px 2px 6px rgba(219, 219, 219, 0.5);
display: none;
`
const SubMenuList = ({ list }) => {
    return (
        <StyledSubMenuList>
            {list.map((item, index) => <SubMenuItem key={index} text={item.text} />)}
        </StyledSubMenuList>
    )
}
SubMenuList.defaultProps = {
    list: [],
}
SubMenuList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
}


const StyledMainMenuText = styled.p`
padding: 6px 0 6px;
display: flex;
align-items: center;

&:hover {
    cursor: pointer;
}
`
const StyledMainMenuIcon = styled.i`
margin-left: 0.5rem;
`
const MainMenuText = ({ text }) => {
    return (
        <StyledMainMenuText>
            {text}
            <StyledMainMenuIcon className="fas fa-angle-down" />
        </StyledMainMenuText>
    )
}
MainMenuText.propTypes = {
    text: PropTypes.string.isRequired,
}


const StyledMainMenuList = styled.div`
display: none;
position: relative;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  display: flex;
}
`
const StyledMainMenuItem = styled.div`
font-size: 12px;
margin-right: 2rem;
padding: 1rem 0;

&:hover {
    & p {
        color: ${({ theme }) => theme.media.hoverHighlight};
        padding-bottom: 3px;
        border-bottom: 3px solid ${({ theme }) => theme.media.hoverHighlight};
    }

    & div {
        display: initial;
    }
}
`
const MainMenuList = ({ list }) => {
    return (
        <StyledMainMenuList>
            {list.map((item, index) => (
                <StyledMainMenuItem>
                    <MainMenuText key={index} text={item.text} />
                    <SubMenuList list={item.list} />
                </StyledMainMenuItem>
            ))}
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
