import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSideMenuItem = styled.div`
padding: ${({ subMenuListIsOpen }) => subMenuListIsOpen ? '0.5rem 1rem 0.5rem 0.5rem' : '0.5rem 1rem'};
border-bottom: 1px solid ${({ theme }) => theme.borderColor};
border-left: ${({ theme, subMenuListIsOpen }) => subMenuListIsOpen ? `0.5rem solid ${theme.hoverHighlight}` : `0px`};
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({ theme, level }) => level === 0 ? theme.mainBackground : theme.subBackground};
`
const StyledSideMenuLink = styled.a`
margin-left: ${({ level }) => level * 0.5}rem;
padding: 6px 0 6px;

&:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.hoverHighlight};
    padding-bottom: 3px;
    border-bottom: 3px solid ${({ theme }) => theme.hoverHighlight};
}
`
const StyledSideMenuIcon = styled.i`
padding: 6px 0 6px;
transform: rotate(${({ subMenuListIsOpen }) => subMenuListIsOpen ? '180deg' : '0deg'});
transition: transform 0.3s linear;

&:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.hoverHighlight};
}
`
const SideMenuItem = ({ text, list, level }) => {
    const [subMenuListIsOpen, setSubMenuListIsOpen] = useState(false)

    return (
        <>
            <StyledSideMenuItem subMenuListIsOpen={subMenuListIsOpen} level={level}>
                <StyledSideMenuLink level={level}>{text}</StyledSideMenuLink>
                {list.length > 0 &&
                    <StyledSideMenuIcon
                        className="fas fa-angle-down"
                        onClick={() => setSubMenuListIsOpen(preValue => !preValue)}
                        subMenuListIsOpen={subMenuListIsOpen}
                    />
                }
            </StyledSideMenuItem>
            {subMenuListIsOpen &&
                <>
                    {list.map((item, index) => (
                        <SideMenuItem
                            key={index}
                            text={item.text}
                            list={item.list}
                            level={level + 1}
                        />
                    ))}
                </>
            }
        </>

    )
}
SideMenuItem.defaultProps = {
    level: 0,
}
SideMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    level: PropTypes.number,
}


const StyledSideMenuContainer = styled.div`
width: 100%;
min-height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: ${({ theme }) => theme.zIndex.top};
visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
transition: opacity 0.3s linear;
display: grid;
grid-template-columns: 100% 0;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    grid-template-columns: 300px auto;
}
`
const StyledSideMenuListContainer = styled.div`
min-height: 100vh;
max-height: 100vh;
background-color: ${({ theme }) => theme.mainBackground};
overflow-x: clip;
overflow-y: auto;
overscroll-behavior: none;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    width: 300px;
}
`
const StyledSideMenuShadow = styled.div`
min-height: 100vh;
max-height: 100vh;
background-color: ${({ theme }) => theme.shadow};
`
export const SideMenu = ({ isOpen, onClose, list }) => {
    const menuShadowRef = useRef()
    useEffect(() => {
        menuShadowRef.current.addEventListener('click', onClose)
    }, [])



    useEffect(() => {
        const bodyElement = document.querySelector('body')
        if (isOpen) {
            bodyElement.style.overflow = 'hidden'
        } else {
            bodyElement.style.overflow = 'auto'
        }

        return () => {
            bodyElement.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <StyledSideMenuContainer isOpen={isOpen} >
            <StyledSideMenuListContainer>
                {list.map((item, index) => (
                    <SideMenuItem
                        key={index}
                        text={item.text}
                        list={item.list}
                    />
                ))}
            </StyledSideMenuListContainer>
            <StyledSideMenuShadow ref={menuShadowRef} />
        </StyledSideMenuContainer>
    )

}
SideMenu.defaultProps = {
    list: [],
}
SideMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(Object),
}


// === largeDevices Menu ===

const StyledSubMenuItem = styled.a`
margin-right: 2rem;
padding: 6px 0 6px;

&:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.hoverHighlight};
    padding-bottom: 3px;
    border-bottom: 3px solid ${({ theme }) => theme.hoverHighlight};
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
    list: PropTypes.arrayOf(Object),
}


const StyledMainMenuText = styled.a`
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
    & > a {
        color: ${({ theme }) => theme.hoverHighlight};
        padding-bottom: 3px;
        border-bottom: 3px solid ${({ theme }) => theme.hoverHighlight};
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
                <StyledMainMenuItem key={index}>
                    <MainMenuText text={item.text} />
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
    list: PropTypes.arrayOf(Object),
}

export default MainMenuList
