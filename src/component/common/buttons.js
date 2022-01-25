import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledButton = styled.button`
padding: 0.25rem 1.5rem;
color: ${({ theme }) => theme.highlight};
background-color: ${({ theme }) => theme.mainBackground};
border: 1px solid ${({ theme }) => theme.highlight};
border-radius: 2px;
&:hover {
  color: ${({ theme }) => theme.mainBackground};
  background-color: ${({ theme }) => theme.highlight};
  
}
`
const Button = ({ text }) => {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
