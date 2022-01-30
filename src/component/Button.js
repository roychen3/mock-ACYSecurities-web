import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledReloadButton = styled.button`
font-size: 1.5rem;
color: ${({ theme }) => theme.error};
background-color: ${({ theme }) => theme.opacity};
border: 0px;
margin-right: 1rem;
`
export const ReloadButton = ({ onClick }) => {
  return (
    <StyledReloadButton onClick={onClick}>
      <i className="fas fa-redo-alt" />
    </StyledReloadButton>
  )
}
ReloadButton.defaultProps = {
  onClick: null,
}
ReloadButton.propTypes = {
  onClick: PropTypes.func,
}

const StyledButton = styled.button`
${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};
font-size: 16px;
line-height: 22px;
padding: 0.25rem 1.5rem;
color: ${({ theme, type, highlight }) => (type === 'submit' || highlight) ? theme.mainBackground : theme.highlight};
background-color: ${({ theme, type, highlight, disabled }) => {
    if (disabled) return theme.borderColor
    if (type === 'submit' || highlight) return theme.highlight
    return theme.mainBackground
  }};

border: 1px solid ${({ theme, disabled }) => disabled ? theme.borderColor : theme.highlight};
border-radius: 4px;

&:hover {
  ${({ theme, disabled, type, highlight }) => disabled
    ?
    'cursor: not-allowed;'
    :
    `
    color: ${(type === 'submit' || highlight) ? '' : theme.mainBackground};
    background-color: ${(type === 'submit' || highlight) ? theme.hoverHighlight : theme.hoverHighlight};
    `
  }
}

@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
  padding: 0.5rem 1.5rem;
}
`
const Button = ({ text, onClick, type, fullWidth, disabled, highlight }) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
      highlight={highlight}
    >
      {text}
    </StyledButton>
  )
}
Button.defaultProps = {
  onClick: null,
  type: 'button',
  fullWidth: false,
  disabled: false,
  highlight: false,
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  highlight: PropTypes.bool,
}

export default Button
