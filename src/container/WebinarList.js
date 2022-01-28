import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WebinarCard from '../component/WebinarCard'

const StyledListContainer = styled.div`
background-color: ${({ theme }) => theme.subBackground};
padding: 40px 25px;
`

const WebinarList = () => {
    return <StyledListContainer>
        <WebinarCard />
    </StyledListContainer>
}

WebinarList.propTypes = {}

export default WebinarList
