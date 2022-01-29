import styled from 'styled-components'

export const StyledFieldErrorMessage = styled.small`
color: ${({ theme }) => theme.error};
margin-left: 1rem;
`
export const StyledLabelContainer = styled.div`
margin-bottom: 0.5rem;
display: flex;
justify-content:space-between;
`
const StyledLabel = styled.label`
color: ${({ theme }) => theme.subText};
font-size: 16px;
line-height: 22px;
`

export default StyledLabel
