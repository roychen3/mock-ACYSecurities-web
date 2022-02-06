import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import {
    getRegisteredList,
    resetGetRegisteredList,

    unregisterWebinar,
    resetUnregisterWebinar,

    setWebinarDetail,
} from '../../../redux/actions'

import Modal from '../../../component/Modal'
import { ReloadButton } from '../../../component/Button'
import LoadingShadow from '../../../component/LoadingShadow'
import { StyledContentLayout } from '../../../component/Layout'
import { StyledH2 } from '../../../component/Title'
import WebinarCard, {
    WebinarList,
    WebinarLeftButton,
    WebinarRightButton,
} from '../../../component/WebinarCard'

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

const RegisteredList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userInformation = useSelector((state) => state.home.userInformation)

    const registeredList = useSelector((state) => state.home.registeredList)
    const registeredListPagination = useSelector((state) => state.home.registeredListPagination)
    const registeredListLoading = useSelector((state) => state.home.registeredListLoading)
    const registeredListError = useSelector((state) => state.home.registeredListError)

    const [currentGroupID, setCurrentGroupID] = useState(0)
    const handleLeftClick = (event) => {
        event.preventDefault()
        if (currentGroupID === 0) {
            const prePage = registeredListPagination.current_page - 1
            dispatch(getRegisteredList({
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
        if (currentGroupID + 1 === registeredList.length) {
            const nextPage = registeredListPagination.current_page + 1
            dispatch(getRegisteredList({
                perPage: 12,
                page: nextPage,
            }))
            setCurrentGroupID(0)
        } else {
            setCurrentGroupID(preValue => preValue + 1)
        }
    }

    const handleUnregisterClick = (event, id) => {
        event.preventDefault()
        dispatch(unregisterWebinar(id))
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleCloseModal = () => {
        setModalIsOpen(false)
        dispatch(resetUnregisterWebinar())
    }

    const unregisterWebinarResponse = useSelector((state) => state.home.unregisterWebinarResponse)
    const unregisterWebinarLoading = useSelector((state) => state.home.unregisterWebinarLoading)
    const unregisterWebinarError = useSelector((state) => state.home.unregisterWebinarError)
    useEffect(() => {
        if (unregisterWebinarLoading === false && (unregisterWebinarError || unregisterWebinarResponse)) setModalIsOpen(true)
    }, [unregisterWebinarLoading])

    const handleWebinarCardDetailClick = (event, data) => {
        event.preventDefault()
        dispatch(setWebinarDetail(data))
        navigate(`/webinar/${data.id}`)
    }

    const getRegisteredListFirstPage = () => {
        dispatch(getRegisteredList({
            userId: userInformation.user.id,
            perPage: 12,
            page: 1,
        }))
    }
    useEffect(() => {
        getRegisteredListFirstPage()

        return () => {
            dispatch(resetGetRegisteredList())
            dispatch(resetUnregisterWebinar())
        }
    }, [])

    return (
        <>
            <StyledContentLayout>
                <StyledH2>Registered</StyledH2>
            </StyledContentLayout>
            <StyledWebinar>
                <StyledContentLayout>
                    {(registeredListLoading || unregisterWebinarLoading) &&
                        <LoadingShadow />
                    }
                    {registeredListError &&
                        <StyledErrorMessageContainer>
                            <ReloadButton onClick={getRegisteredListFirstPage} />
                            <h1>
                                {registeredListError}
                            </h1>
                        </StyledErrorMessageContainer>
                    }
                    {registeredListLoading === false && registeredListError === null && registeredList.length > 0 &&
                        <WebinarList>
                            {(currentGroupID !== 0 || registeredListPagination.current_page !== 1) &&
                                <WebinarLeftButton onClick={handleLeftClick}>
                                    <i className="fas fa-chevron-left" />
                                </WebinarLeftButton>
                            }
                            {(currentGroupID + 1 !== registeredList.length || registeredListPagination.current_page !== registeredListPagination.total_pages) &&
                                <WebinarRightButton onClick={handleRightClick}>
                                    <i className="fas fa-chevron-right" />
                                </WebinarRightButton>
                            }
                            {registeredList[currentGroupID].group.map((item) => (
                                <WebinarCard
                                    key={item.id}
                                    data={item}
                                    primaryText="unregister"
                                    handlePrimaryClick={(event) => { handleUnregisterClick(event, item.id) }}
                                    handleDetailClick={(event) => { handleWebinarCardDetailClick(event, item) }}
                                />
                            ))}
                        </WebinarList>
                    }
                </StyledContentLayout>
            </StyledWebinar>
            <Modal isOpen={modalIsOpen} closeClick={handleCloseModal}>
                <>{unregisterWebinarError || unregisterWebinarResponse}</>
            </Modal>
        </>
    )
}

RegisteredList.propTypes = {}

export default RegisteredList
