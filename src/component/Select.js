import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label, { StyledLabelContainer, StyledFieldErrorMessage } from './Label'


const StyledSelectContainer = styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
`


const StyledDropdownList = styled.div`
position: relative;
`
const StyledDropdownListField = styled.button`
width: 100%;
min-height: 34.73px;
text-align: left;
padding: 0.5rem;
background-color: ${({ theme }) => theme.opacity};
border: 1px solid ${({ theme, hasError }) => hasError ? theme.error : theme.borderColor};
border-radius: 4px;
display: flex;
justify-content: space-between;
align-items: center;

&:hover {
    color: ${({ theme }) => theme.mainBackground};
    background-color: ${({ theme }) => theme.hoverHighlight};
}
`
const StyledDropdownOptionContainer = styled.div`
display: ${({ optionListIsOpen }) => optionListIsOpen ? 'initial' : 'none'};
width: 100%;
max-height: 200px;
overflow-y: scroll;
background-color: ${({ theme }) => theme.mainBackground};
border: 1px solid ${({ theme }) => theme.borderColor};
border-radius: 4px;
position: absolute;
z-index: ${({ theme }) => theme.zIndex.option};
top: calc(100% + 0.5rem);
left: 0;
`
const StyledDropdownOption = styled.button`
width: 100%;
text-align: left;
padding: 0.5rem;
background-color: ${({ theme }) => theme.opacity};
border: 0px;

&:hover {
    color: ${({ theme }) => theme.mainBackground};
    background-color: ${({ theme }) => theme.hoverHighlight};
}
`
export const DropdownListFormik = ({ label, optionList, onChange, name, formik }) => {
    const hasError = formik.touched[name] && formik.errors[name]
    const [optionListIsOpen, setOptionListIsOpen] = useState(false)

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
            <StyledDropdownList>

                <StyledDropdownListField
                    type="button"
                    onClick={() => setOptionListIsOpen(preValue => !preValue)}
                    hasError={hasError}
                >
                    <div>
                        {optionList.find((item) => item.value === formik.values[name])?.name}
                    </div>
                    <i className="fas fa-chevron-down" />
                </StyledDropdownListField>

                <StyledDropdownOptionContainer optionListIsOpen={optionListIsOpen}>
                    {optionList.map((item) => (
                        <StyledDropdownOption
                            key={item.value}
                            type="button"
                            onClick={() => {
                                setOptionListIsOpen(false)
                                onChange(item.value)
                            }}
                        >
                            {item.name}
                        </StyledDropdownOption>))}
                </StyledDropdownOptionContainer>
            </StyledDropdownList>
        </StyledSelectContainer>
    )
}
DropdownListFormik.defaultProps = {
    label: undefined,
    optionList: [],
}
DropdownListFormik.propTypes = {
    label: PropTypes.string,
    optionList: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    formik: PropTypes.instanceOf(Object).isRequired,
}



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
                        <StyledHiddenOption value="">{` `}</StyledHiddenOption>
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
