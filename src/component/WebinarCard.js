import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Link } from "react-router-dom"


const WebinarButton = styled.button`
width: 32px;
padding: 0.5rem;
border: 0px;
border-radius: 50%;
position: absolute;
top: 50%;
transform: translateY(-50%);
color: ${({ theme }) => theme.mainBackground};
background-color: ${({ theme }) => theme.shadow};
opacity: 0.7;

&:hover {
    opacity: 1;
}

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    width: 48px;
    padding: 1rem;
}
`
export const WebinarLeftButton = styled(WebinarButton)`
left: 0;
transform: translate(-50%, -50%);
`
export const WebinarRightButton = styled(WebinarButton)`
right: 0;
transform: translate(50%, -50%);
`
export const WebinarList = styled.div`
position: relative;
display: grid;
grid-template-columns: auto;
grid-gap: 12px;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    grid-template-columns: 1fr 1fr 1fr;
}
`

// --- Card ---
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
color: ${({ theme }) => theme.highlight};
margin-bottom: 19px;
`
const StyledTitle = styled.div`
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: ${({ theme }) => theme.highlight};
margin-bottom: 12px;
`
const StyledContent = styled.p`
font-weight: 300;
font-size: 12px;
line-height: 17px;
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
const StyledActionContainer = styled.div`
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
const StyledButton = styled.button`
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: ${({ theme }) => theme.subHighlight};
background-color: ${({ theme }) => theme.opacity};
border: 0px;
`
const StyledLink = styled(Link)`
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: ${({ theme }) => theme.subHighlight};
`
const StyledA = styled.a`
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: ${({ theme }) => theme.subHighlight};
`
const StyledIconChevronRight = styled.i`
border: 1px solid;
border-radius: 50%;
padding: 0.25rem 7px;
`
const WebinarCard = ({
    data,
    href,
    primaryText,
    primaryClickType,
    handlePrimaryClick,
    handleDetailClick,
}) => {
    return (
        <StyledCardContainer>
            <div>
                <StyledCreateDate>
                    {dayjs(data.createdAt).format('DD/MM/YYYY')}
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
                    {dayjs(data.createdAt).add(10, 'day').format('YYYY/MM/DD hh:mm')}
                </StyledCreateDatePlus10Days>
            </div>
            <StyledActionContainer>
                {primaryText &&
                    <>
                        {primaryClickType === 'aTag'
                            ?
                            <StyledA href={href} onClick={handlePrimaryClick}>
                                {primaryText}
                            </StyledA>
                            :
                            <StyledButton onClick={handlePrimaryClick}>
                                {primaryText}
                            </StyledButton>
                        }
                    </>
                }
                <StyledButton onClick={handleDetailClick}>
                    <StyledIconChevronRight className="fas fa-chevron-right" />
                </StyledButton>
            </StyledActionContainer>
        </StyledCardContainer>
    )
}
WebinarCard.defaultProps = {
    href: undefined,
    primaryText: '',
    primaryClickType: 'button',
    handlePrimaryClick: null,
    handleDetailClick: null,
}
WebinarCard.propTypes = {
    data: PropTypes.shape({
        createdAt: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        id: PropTypes.string,
    }).isRequired,
    href: PropTypes.string,
    primaryClickType: PropTypes.string,
    primaryText: PropTypes.string,
    handlePrimaryClick: PropTypes.func,
    handleDetailClick: PropTypes.func,
}

export default WebinarCard

