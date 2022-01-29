import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const StyledButton = styled.button`
${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};
font-size: 16px;
line-height: 22px;
padding: 0.5rem 1.5rem;
color: ${({ theme, type }) => type === 'submit' ? theme.mainBackground : theme.highlight};
background-color: ${({ theme, type }) => type === 'submit' ? theme.highlight : theme.mainBackground};
border: 1px solid ${({ theme }) => theme.highlight};
border-radius: 4px;

&:hover {
  color: ${({ theme, type }) => type === 'submit' ? theme.highlight : theme.mainBackground};
  background-color: ${({ theme, type }) => type === 'submit' ? theme.mainBackground : theme.highlight};
  
}

@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
  padding: 0.75rem 1.5rem;
}
`

const Button = ({ text, onClick, type, fullWidth }) => {
  return (
    <StyledButton onClick={onClick} type={type} fullWidth={fullWidth}>
      {text}
    </StyledButton>
  )
}

Button.defaultProps = {
  onClick: null,
  type: 'button',
  fullWidth: false,
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
}

export default Button
