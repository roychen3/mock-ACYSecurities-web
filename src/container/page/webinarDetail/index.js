import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setWebinarDetail } from '../../../redux/actions'

import { StyledContentLayout } from '../../../component/Layout'
import { StyledH2 } from '../../../component/Title'
import Button from '../../../component/Button'


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
`
const StyledCreateDatePlus10Days = styled.div`
font-size: 14px;
line-height: 20px;
color: ${({ theme }) => theme.subText};
margin-bottom: 20px;
`
const StyledButtonSection = styled.div`
text-align: center;
`
const WebinarDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const detail = useSelector((state) => state.home.webinarDetail)

    useEffect(() => {
        return () => {
            dispatch(setWebinarDetail())
        }
    }, [])

    return (
        <StyledContentLayout>
            <StyledH2>Webinar Detail</StyledH2>
            <StyledCreateDate>
                {dayjs(detail.createdAt).format('DD/MM/YYYY')}
            </StyledCreateDate>
            <StyledTitle>
                {detail.title}
            </StyledTitle>
            <StyledContent>
                {detail.content.split('<br />').map((item, index) => (
                    <Fragment key={index}>
                        {item}<br />
                    </Fragment>
                ))}
            </StyledContent>
            <StyledCreateDatePlus10Days>
                {dayjs(detail.createdAt).add(10, 'day').format('YYYY/MM/DD hh:mm')}
            </StyledCreateDatePlus10Days>
            <StyledButtonSection>
                <Button text="go back" onClick={() => navigate(-1)} />
            </StyledButtonSection>
        </StyledContentLayout>
    )
}

WebinarDetail.propTypes = {}

export default WebinarDetail
