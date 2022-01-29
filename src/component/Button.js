import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const StyledButton = styled.button`
${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};
font-size: 16px;
line-height: 22px;
padding: 0.5rem 1.5rem;
color: ${({ theme, type }) => type === 'submit' ? theme.mainBackground : theme.highlight};
background-color: ${({ theme, type, disabled }) => {
    if (disabled) return theme.borderColor
    if (type === 'submit') return theme.highlight
    return theme.mainBackground
  }};

${({ theme, disabled }) => disabled ? 'border: 0px;' : `border: 1px solid ${theme.highlight};`}
border-radius: 4px;

&:hover {
  ${({ theme, disabled, type }) => disabled
    ?
    ''
    :
    `
    color: ${type === 'submit' ? theme.highlight : theme.mainBackground};
    background-color: ${type === 'submit' ? theme.mainBackground : theme.highlight};
    `
  }
}


@media (min-width: ${({ theme }) => theme.media.smallDevices}) {
  padding: 0.75rem 1.5rem;
}
`

const Button = ({ text, onClick, type, fullWidth, disabled }) => {
  return (
    <StyledButton onClick={onClick} type={type} fullWidth={fullWidth} disabled={disabled}>
      {text}
    </StyledButton>
  )
}

Button.defaultProps = {
  onClick: null,
  type: 'button',
  fullWidth: false,
  disabled: false,
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Button
