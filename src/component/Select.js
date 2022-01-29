import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label, { StyledLabelContainer, StyledFieldErrorMessage } from './Label'

const StyledSelectContainer = styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
`
const StyledSelect = styled.select`
width: 100%;
padding: 0.5rem;
border: 1px solid ${({ theme, hasError }) => hasError ? theme.error : theme.borderColor};
border-radius: 4px;

&:focus-visible{
    outline: 1px auto ${({ theme }) => theme.subText};
  }
`
const StyledHiddenOption = styled.option`
display: none;
`

export const SelectFormik = ({ label, optionList, name, formik }) => {
    const selectDisabled = optionList.length > 0 ? false : true
    const hasError = formik.touched[name] && formik.errors[name]

    return (
        <StyledSelectContainer>
            {label &&
                <StyledLabelContainer>
                    <Label>{label}</Label>
                    {hasError &&
                        <StyledFieldErrorMessage>
                            {formik.errors[name]}
                        </StyledFieldErrorMessage>
                    }
                </StyledLabelContainer>
            }
            <StyledSelect
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                hasError={hasError}
                disabled={selectDisabled}
            >
                {optionList.length > 0
                    ?
                    <>
                        <StyledHiddenOption value="">no option</StyledHiddenOption>
                        {optionList.map((item) => (
                            <option key={item.value} value={item.value}>{item.name}</option>))}
                    </>
                    :
                    <StyledHiddenOption value="">no option</StyledHiddenOption>
                }
            </StyledSelect>
        </StyledSelectContainer>
    )
}
SelectFormik.defaultProps = {
    label: undefined,
    optionList: [],
}
SelectFormik.propTypes = {
    label: PropTypes.string,
    optionList: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    name: PropTypes.string.isRequired,
    formik: PropTypes.instanceOf(Object).isRequired,
}

const Select = ({ label, optionList }) => {
    const selectDisabled = optionList.length > 0 ? false : true

    return (
        <StyledSelectContainer>
            {label &&
                <StyledLabelContainer>
                    <Label>{label}</Label>
                </StyledLabelContainer>
            }
            <StyledSelect disabled={selectDisabled}>
                {optionList.length > 0
                    ?
                    optionList.map((item) => (
                        <option key={item.value} value={item.value}>{item.name}</option>))
                    :
                    <StyledHiddenOption value="">no option</StyledHiddenOption>
                }
            </StyledSelect>
        </StyledSelectContainer>
    )
}
Select.defaultProps = {
    label: undefined,
    optionList: [],
}
Select.propTypes = {
    label: PropTypes.string,
    optionList: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}

export default Select
