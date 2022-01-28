import React from 'react'
import styled from 'styled-components'

const StyledShadowContainer = styled.div`
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
const StyledLoader = styled.div`
display: inline-block;
border: 9px solid ${({ theme }) => theme.opacity};
border-radius: 50%;
border-top: 9px solid ${({ theme }) => theme.mainBackground};
border-right: 9px solid ${({ theme }) => theme.mainBackground};
border-bottom: 9px solid ${({ theme }) => theme.mainBackground};
width: 90px;
height: 90px;
animation: spin 1s linear infinite;

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`
const LoadingShadow = () => {
    return (
        <StyledShadowContainer>
            <StyledLoader />
        </StyledShadowContainer>
    )
}

LoadingShadow.propTypes = {}

export default LoadingShadow
