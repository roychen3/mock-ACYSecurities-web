import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { getPostList } from '../../../redux/actions'
import LoadingShadow from '../../../component/LoadingShadow'
import { StyledButton } from '../../../component/Button'
import { StyledContentLayout } from '../../../component/Layout'
import WebinarCard from './WebinarCard'


const WebinarButton = styled(StyledButton)`
width: 40px;
padding: 0.5rem;
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
    width: 50px;
    padding: 1rem;
}
`
const WebinarLeftButton = styled(WebinarButton)`
left: 0;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    left: 5%;
    transform: translate(-50%, -50%);
}

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    left: 10%;
}
`
const WebinarRightButton = styled(WebinarButton)`
right: 0;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    right: 5%;
    transform: translate(50%, -50%);
}

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    right: 10%;
}
`

const StyledWebinarListContainer = styled.div`
background-color: ${({ theme }) => theme.subBackground};
position: relative;
`
const StyledList = styled(StyledContentLayout)`
display: grid;
grid-template-columns: 100%;
grid-gap: 12px;

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
    grid-template-columns: auto auto;
    grid-gap: 20px;
}

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    grid-template-columns: auto auto auto;
}
`

const StyledErrorMessageContainer = styled.div`
color: ${({ theme }) => theme.error};
padding: 5rem;
display: flex;
justify-content: center;
align-items: center;
`
const StyledReloadButton = styled.button`
font-size: 1.5rem;
color: ${({ theme }) => theme.error};
background-color: ${({ theme }) => theme.opacity};
border: 0px;
margin-right: 1rem;
`

const WebinarList = () => {
    const dispatch = useDispatch()

    const [currentGroupID, setCurrentGroupID] = useState(0)

    const postList = useSelector((state) => state.home.postList)
    const postListPagination = useSelector((state) => state.home.postListPagination)
    const postListLoading = useSelector((state) => state.home.postListLoading)
    const postListError = useSelector((state) => state.home.postListError)

    const handleLeftClick = (event) => {
        event.preventDefault()
        if (currentGroupID === 0) {
            const prePage = postListPagination.current_page - 1
            dispatch(getPostList({
                perPage: 12,
                page: prePage,
            }))
            setCurrentGroupID(1)
        } else {
            setCurrentGroupID(preValue => preValue - 1)
        }
    }
    const handleRightClick = (event) => {
        event.preventDefault()
        if (currentGroupID + 1 === postList.length) {
            const nextPage = postListPagination.current_page + 1
            dispatch(getPostList({
                perPage: 12,
                page: nextPage,
            }))
            setCurrentGroupID(0)
        } else {
            setCurrentGroupID(preValue => preValue + 1)
        }
    }

    const getPostListFirstPage = () => {
        if (postList.length === 0) {
            dispatch(getPostList({
                perPage: 12,
                page: 1,
            }))
            setCurrentGroupID(0)
        }
    }
    useEffect(() => {
        getPostListFirstPage()
    }, [postList])

    return (
        <StyledWebinarListContainer>
            {postListLoading &&
                <LoadingShadow />
            }
            {postListError &&
                <StyledErrorMessageContainer>
                    <StyledReloadButton onClick={getPostListFirstPage}>
                        <i className="fas fa-redo-alt" />
                    </StyledReloadButton>
                    <h1>
                        {postListError}
                    </h1>
                </StyledErrorMessageContainer>
            }
            {postListLoading === false && postListError === null &&
                <>
                    {(currentGroupID !== 0 || postListPagination.current_page !== 1) &&
                        <WebinarLeftButton onClick={handleLeftClick}>
                            <i className="fas fa-chevron-left" />
                        </WebinarLeftButton>
                    }
                    {(currentGroupID + 1 !== postList.length || postListPagination.current_page !== postListPagination.total_pages) &&
                        <WebinarRightButton onClick={handleRightClick}>
                            <i className="fas fa-chevron-right" />
                        </WebinarRightButton>
                    }
                    {postList.length > 0 &&
                        <StyledList>
                            {postList[currentGroupID].group.map((item) => (
                                <WebinarCard key={item.id} data={item} />
                            ))}
                        </StyledList>
                    }
                </>
            }
        </StyledWebinarListContainer>
    )
}

WebinarList.propTypes = {}

export default WebinarList
