import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { getPostList } from '../redux/actions'
import WebinarCard from '../component/WebinarCard'
import LoadingShadow from '../component/LoadingShadow'

const StyledListContainer = styled.div`
background-color: ${({ theme }) => theme.subBackground};
padding: 40px 25px;
display: grid;
grid-template-columns: 100%;

@media (min-width: 576px) {
    grid-template-columns: auto auto;
}

@media (min-width: 992px) {
    grid-template-columns: auto auto auto;
}
`
const StyledWebinarCardContainer = styled.div`
padding: 12px;
`

const WebinarList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostList())
    }, [])

    const postList = useSelector((state) => state.home.postList)
    const postListLoading = useSelector((state) => state.home.postListLoading)
    const postListError = useSelector((state) => state.home.postListError)

    return (
        <>
            <StyledListContainer>
                {postList.map((item) => (
                    <StyledWebinarCardContainer>
                        <WebinarCard key={item.id} data={item} />
                    </StyledWebinarCardContainer>
                ))}
            </StyledListContainer>
            {postListLoading &&
                <LoadingShadow />
            }
        </>
    )
}

WebinarList.propTypes = {}

export default WebinarList
