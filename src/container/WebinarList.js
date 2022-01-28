import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { getPostList } from '../redux/actions'
import WebinarCard from '../component/WebinarCard'

const StyledListContainer = styled.div`
background-color: ${({ theme }) => theme.subBackground};
padding: 40px 25px;
`

const WebinarList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostList())
    }, [])

    return <StyledListContainer>
        <WebinarCard />
    </StyledListContainer>
}

WebinarList.propTypes = {}

export default WebinarList
