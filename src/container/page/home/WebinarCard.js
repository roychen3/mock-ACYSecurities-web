import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { setRegisterFormData } from '../../../redux/actions'

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
const WebinarCard = ({ data }) => {
    const dispatch = useDispatch()

    const userInformation = useSelector((state) => state.home.userInformation)
    const isLogined = userInformation.token

    const handleRegisterClick = () => {
        dispatch(setRegisterFormData(
            {
                topic: `${data.id}`,
            }
        ))
    }

    return (
        <StyledCardContainer>
            <div>
                <StyledCreateDate>
                    {dayjs(data.created_at).format('DD/MM/YYYY')}
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
                    {dayjs(data.created_at).add(10, 'day').format('YYYY/MM/DD hh:mm')}
                </StyledCreateDatePlus10Days>
            </div>
            <StyledActionContainer>
                {isLogined
                    ?
                    <StyledA href="#registerForm" onClick={handleRegisterClick}>Register Now</StyledA>
                    :
                    <StyledLink to="/login">
                        Register Now
                    </StyledLink>
                }
                <StyledLink to={`/webinar/${data.id}`}>
                    <StyledIconChevronRight className="fas fa-chevron-right" />
                </StyledLink>
            </StyledActionContainer>
        </StyledCardContainer>
    )
}

WebinarCard.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
}

export default WebinarCard
