import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledCardContainer = styled.div`
min-width: 200px;
width: 100%;
height: 300px;
max-height: 300px;
border-radius: 4px;
box-shadow: 1px 2px 6px rgba(219, 219, 219, 0.5);
border: 1px solid ${({ theme }) => theme.borderColor};
background-color: ${({ theme }) => theme.mainBackground};
padding: 20px;
margin: 0 auto;
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

display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;  
overflow: hidden;
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
const WebinarCard = ({ data }) => {
    return (
        <StyledCardContainer>
            <div>
                <StyledCreateDate>
                    {data.createDate}
                </StyledCreateDate>
                <StyledTitle>
                    {data.title}
                </StyledTitle>
                <StyledContent>
                    {data.content.split('<br />').map((item, index) => (
                        <Fragment key={index}>
                            {item}<br />
                        </Fragment>
                    ))}
                </StyledContent>
                <StyledCreateDatePlus10Days>
                    {data.createDate}
                </StyledCreateDatePlus10Days>
            </div>
            <StyledActionContainer>
                <span>Register Now</span>
                <i className="fas fa-chevron-circle-right" />
            </StyledActionContainer>
        </StyledCardContainer>
    )
}

WebinarCard.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired
}

export default WebinarCard
