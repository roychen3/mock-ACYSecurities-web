import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import imgRightArrow from '../asset/img/rightArrow.png'


const StyledCardContainer = styled.div`
width: 100%;
max-width: 380px;
height: 300px;
border-radius: 4px;
box-shadow: 1px 2px 6px rgba(219, 219, 219, 0.5);
border: 1px solid ${({ theme }) => theme.borderColor};
background-color: ${({ theme }) => theme.mainBackground};
padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;
`
const StyledCreateDate = styled.div`
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: 1px solid ${({ theme }) => theme.highlight};
margin-bottom: 19px;
`
const StyledTitle = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: 1px solid ${({ theme }) => theme.highlight};
margin-bottom: 12px;
`
const StyledContent = styled.div`
font-size: 14px;
line-height: 20px;
color: ${({ theme }) => theme.subText};
margin-bottom: 20px;
`
const StyledCreateDatePlus10Days = styled.div`
font-size: 14px;
line-height: 20px;
color: ${({ theme }) => theme.subText};
`
const StyledActionContainer = styled.a`
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: ${({ theme }) => theme.subHighlight};
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
align-self: end;
`

const fakeProps = {
    createDate: '31/10/2019',
    title: 'A structured approach to deciphering FX & Gold sentiment',
    content: 'Market scan across FX & Gold to determine sentiment with accuracy.',
    createDatePlus10Days: '7pm-8:30pm EST',
}
const WebinarCard = () => {
    return (
        <StyledCardContainer>
            <div>
                <StyledCreateDate>
                    {fakeProps.createDate}
                </StyledCreateDate>
                <StyledTitle>
                    {fakeProps.title}
                </StyledTitle>
                <StyledContent>
                    {fakeProps.content}
                </StyledContent>
                <StyledCreateDatePlus10Days>
                    {fakeProps.createDatePlus10Days}
                </StyledCreateDatePlus10Days>
            </div>
            <StyledActionContainer>
                <span>Register Now</span>
                <i class="fas fa-chevron-circle-right" />
            </StyledActionContainer>
        </StyledCardContainer>
    )
}

WebinarCard.propTypes = {}

export default WebinarCard
