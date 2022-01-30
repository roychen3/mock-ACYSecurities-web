import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledContentLayout } from '../../../component/Layout'
import { StyledH2 } from '../../../component/Title'


const StyledContent = styled.p`
color: ${({ theme }) => theme.subText};
font-size: 12px;
line-height: 20px;
text-align: center;
`
const Summary = () => {
    return (
        <StyledContentLayout>
            <StyledH2>Forex Webinars</StyledH2>
            <StyledContent>Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.</StyledContent>
        </StyledContentLayout>
    )
}

Summary.propTypes = {}

export default Summary
