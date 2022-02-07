import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {StyledFontAwesomeIconButton} from './Button'


const StyledModal = styled.div`
position: fixed;
z-index: ${({ theme }) => theme.zIndex.top};
left: 0;
top: 0;
width: 100%;
height: 100vh;
overflow: hidden;
background-color: ${({ theme }) => theme.shadow};
display: flex;
justify-content: center;
align-items: center;
`
const StyledModalContainer = styled.div`
position: relative;
width: 90%;
background-color: ${({ theme }) => theme.mainBackground};
border-radius: 20px;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    width: 35%;
}
`
const StyledModalHeader = styled.div`
padding: 7px;
display: flex;
justify-content: space-between;
align-items:center;
`
const StyledModalTitle = styled.h3`
color: ${({ theme }) => theme.highlight};
`
const StyledModalClose = styled(StyledFontAwesomeIconButton)`
padding: 0 7px;
font-size: 2rem;

&:hover {
    color: ${({ theme }) => theme.hoverHighlight};
}
`
const StyledModalContent = styled.div`
padding: 1.5rem;
text-align: center;
`
const StyledModalFooter = styled.div`
min-height: 36px;
`
const Modal = ({ isOpen, title, closeClick, children }) => {
    return (
        <>
            {isOpen &&
                <StyledModal>
                    <StyledModalContainer>
                        <StyledModalHeader>
                            <StyledModalTitle>{title}</StyledModalTitle>
                            <StyledModalClose onClick={closeClick}>
                                <i className="fas fa-times" />
                            </StyledModalClose>
                        </StyledModalHeader>
                        <StyledModalContent>
                            {children}
                        </StyledModalContent>
                        <StyledModalFooter />
                    </StyledModalContainer>
                </StyledModal>
            }
        </>
    )
}

Modal.defaultProps = {
    title: '',
    closeClick: null,
}
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    closeClick: PropTypes.func,
}

export default Modal
