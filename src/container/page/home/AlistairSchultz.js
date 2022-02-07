import React from 'react'
import styled from 'styled-components'

import { StyledH3 } from '../../../component/Title'
import { StyledContentLayout } from '../../../component/Layout'


const StyledTitle = styled(StyledH3)`
@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    text-align: left;
}
`
const StyledGridContainer = styled.div`
display: grid;
grid-template-columns: auto;
grid-gap: 20px;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    grid-gap: 28px;
}
@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    grid-template-columns: 1fr 1fr;
}
`
const StyledGridItem = styled.div``
const StyledContent = styled.p`
color: ${({ theme }) => theme.subText};
font-size: 12px;
line-height: 20px;
margin-bottom: 12px;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    margin-bottom: 20px
}
`
const StyledSeeMoreA = styled.a`
font-size: 12px;
line-height: 16px;
display: flex;
align-items:center;
margin-left: 5px;
`
const StyledSeeMoreP = styled.p`
margin-right: 6px;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    margin-right: 12px;
}
`
const StyledIframe = styled.iframe`
width: 100%;
height: 55vw;
border: 0;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    height: 25vw;
}
`
const AlistairSchultz = () => {
    return <StyledContentLayout>
        <StyledGridContainer>
            <StyledGridItem>
                <StyledTitle>Meet Your Host - Alistair Schultz</StyledTitle>
                <StyledContent>
                    With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.
                    <br />
                    <br />
                    As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.
                    <br />
                    <br />
                    At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.
                </StyledContent>
                <StyledSeeMoreA>
                    <StyledSeeMoreP>See more </StyledSeeMoreP>
                    <i className="fas fa-chevron-right" />
                </StyledSeeMoreA>
            </StyledGridItem>
            <StyledGridItem>
                <StyledIframe src="https://www.youtube.com/embed/04cYGZiCF3I?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </StyledGridItem>
        </StyledGridContainer>
    </StyledContentLayout>
}

AlistairSchultz.propTypes = {}

export default AlistairSchultz
