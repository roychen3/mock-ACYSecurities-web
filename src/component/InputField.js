import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledInputFieldContainer = styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
`
const StyledLabelContainer = styled.div`
margin-bottom: 0.5rem;
display: flex;
justify-content:space-between;
`
const StyledLabel = styled.label`
color: ${({ theme }) => theme.subText};
font-size: 16px;
`
const StyledInput = styled.input`
width: 100%;
padding: 0.5rem;
border: 1px solid ${({ theme, hasError }) => hasError ? theme.error : theme.borderColor};
border-radius: 4px;

&:focus-visible{
  outline: 1px auto ${({ theme }) => theme.subText};
}
`

const StyledFieldErrorMessage = styled.small`
color: ${({ theme }) => theme.error};
margin-left: 1rem;
`
export const InputFieldFormik = ({ label, type, name, formik }) => {
    const hasError = formik.touched[name] && formik.errors[name]
    return (
        <StyledInputFieldContainer>
            {label &&
                <StyledLabelContainer>
                    <StyledLabel>{label}</StyledLabel>
                    {hasError &&
                        <StyledFieldErrorMessage>
                            {formik.errors[name]}
                        </StyledFieldErrorMessage>
                    }
                </StyledLabelContainer>
            }
            <StyledInput
                label={label}
                type={type}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                hasError={hasError}
            />
        </StyledInputFieldContainer>
    )
}
InputFieldFormik.defaultProps = {
    label: undefined,
    type: 'text',
}
InputFieldFormik.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    formik: PropTypes.instanceOf(Object).isRequired,
}

const InputField = ({
    label,
    type,
    name,
    onChange,
    onBlur,
    value,
}) => {
    return (
        <StyledInputFieldContainer>
            {label &&
                <StyledLabel>{label}</StyledLabel>
            }
            <StyledInput
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        </StyledInputFieldContainer>
    )
}
InputField.defaultProps = {
    label: undefined,
    type: 'text',
    name: undefined,
    onChange: undefined,
    onBlur: undefined,
    value: undefined,
}
InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string,
}

export default InputField
