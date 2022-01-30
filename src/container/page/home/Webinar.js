import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { getPostList, setRegisterFormData } from '../../../redux/actions'

import { ReloadButton } from '../../../component/Button'
import LoadingShadow from '../../../component/LoadingShadow'
import { StyledContentLayout } from '../../../component/Layout'
import WebinarCard, {
    WebinarList,
    WebinarLeftButton,
    WebinarRightButton,
} from '../../../component/WebinarCard'


const WebinarSwitchRegisteredLink = styled(Link)`
position: absolute;
top: 40px;
left: 5%;
transform: translateY(-100%);
color: ${({ theme }) => theme.subText};
padding: 0.5rem 0;

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    top: 80px;
    left: 10%;
}
`
const StyledWebinar = styled.div`
background-color: ${({ theme }) => theme.subBackground};
position: relative;
`
const StyledErrorMessageContainer = styled.div`
color: ${({ theme }) => theme.error};
padding: 5rem;
display: flex;
justify-content: center;
align-items: center;
`

const Webinar = () => {
    const dispatch = useDispatch()

    const [currentGroupID, setCurrentGroupID] = useState(0)

    const userInformation = useSelector((state) => state.home.userInformation)
    const isLogined = userInformation.token

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

    const handleRegisterClick = (data) => {
        dispatch(setRegisterFormData(
            {
                topic: `${data.id}`,
            }
        ))
    }

    const getPostListFirstPage = () => {
        dispatch(getPostList({
            perPage: 12,
            page: 1,
        }))
        setCurrentGroupID(0)
    }
    useEffect(() => {
        if (postList.length === 0 && postListError === null) {
            getPostListFirstPage()
        }
    }, [postList])


    return (
        <StyledWebinar>
            <StyledContentLayout>
                {postListLoading &&
                    <LoadingShadow />
                }
                {postListError &&
                    <StyledErrorMessageContainer>
                        <ReloadButton onClick={getPostListFirstPage} />
                        <h1>
                            {postListError}
                        </h1>
                    </StyledErrorMessageContainer>
                }
                {postListLoading === false && postListError === null &&
                    <>
                        {isLogined &&
                            <WebinarSwitchRegisteredLink to="/registered">
                                See registered
                            </WebinarSwitchRegisteredLink>
                        }
                        {postList.length > 0 &&
                            <WebinarList>
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
                                {postList[currentGroupID].group.map((item) => (
                                    isLogined
                                        ? <WebinarCard
                                            key={item.id}
                                            data={item}
                                            href="#registerForm"
                                            primaryText="Register Now"
                                            handlePrimaryClick={() => { handleRegisterClick(item) }}
                                        />
                                        :
                                        <WebinarCard
                                            key={item.id}
                                            data={item}
                                            useRouterLink
                                            linkTo="/login"
                                            primaryText="Register Now"
                                        />
                                ))}
                            </WebinarList>
                        }
                    </>
                }
            </StyledContentLayout>
        </StyledWebinar>
    )
}

Webinar.propTypes = {}

export default Webinar
