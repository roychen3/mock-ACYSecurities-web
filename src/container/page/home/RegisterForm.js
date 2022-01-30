import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { setRegisterFormData, postFavourites } from '../../../redux/actions'
import { InputFieldFormik } from '../../../component/InputField'
import Button from '../../../component/Button'
import { SelectFormik } from '../../../component/Select'
import LoadingShadow from '../../../component/LoadingShadow'
import { StyledH3 } from '../../../component/Title'
import { StyledContentLayout } from '../../../component/Layout'


const StyledRegisterForm = styled.div`
@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    border-radius: 20px;
    box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
    border: 1px solid ${({ theme }) => theme.borderColor};
    padding: 80px 0;
}
`
const StyledRegisterFormContainer = styled.div`
@media (min-width: ${({ theme }) => theme.media.largeDevices}) {
    max-width: 600px;
    margin: 0 auto;
}
`
const StyledDescribe = styled.p`
font-size: 12px;
line-height: 16px;
text-align: center;
margin-bottom: 4px;
`
const StyledErrorMessage = styled.div`
color: ${({ theme }) => theme.error};
text-align: center;
margin: 1rem 0;
`

const initFormValues = {
    topic: '',
    firstName: '',
    lastName: '',
    email: '',
}
const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userInformation = useSelector((state) => state.home.userInformation)
    const isLogined = userInformation.token

    const topicOptionList = useSelector((state) => state.home.registerTopicOptionList)

    const registerFormData = useSelector((state) => state.home.registerFormData)
    useEffect(() => {
        formik.setValues({
            ...formik.values,
            ...registerFormData,
            firstName: userInformation.user.first_name,
            lastName: userInformation.user.last_name,
            email: userInformation.user.email,
        })
    }, [registerFormData])

    const postFavouritesLoading = useSelector((state) => state.home.postFavouritesLoading)
    const postFavouritesError = useSelector((state) => state.home.postFavouritesError)

    const formik = useFormik({
        initialValues: initFormValues,
        validationSchema: Yup.object({
            topic: Yup.string()
                .required('Required'),
            firstName: Yup.string()
                .required('Required'),
            lastName: Yup.string()
                .required('Required'),
            email: Yup.string()
                .required('Required')
                .email('Invalid email address'),
        }),
        onSubmit: (values) => {
            if (isLogined) {
                dispatch(postFavourites([values.topic]))
            } else {
                dispatch(setRegisterFormData(values))
                navigate('/login')
            }
        },
    })

    const buttonDisabled = JSON.stringify(initFormValues) === JSON.stringify(formik.values) || formik.isValid === false

    useEffect(() => {
        return () => {
            dispatch(setRegisterFormData())
        }
    }, [])


    return (
        <>
            {postFavouritesLoading &&
                <LoadingShadow />
            }
            <StyledContentLayout id="registerForm">
                <StyledRegisterForm>
                    <StyledRegisterFormContainer>
                        <StyledH3>
                            Register for a Webinar now
                        </StyledH3>
                        <StyledDescribe>
                            Please fill in the form below and you will be contacted within 1 working day by our professional business experts.
                        </StyledDescribe>
                        <form onSubmit={formik.handleSubmit}>
                            <SelectFormik label="Topic" optionList={topicOptionList} name="topic" formik={formik} />
                            <InputFieldFormik label="First Name" name="firstName" formik={formik} />
                            <InputFieldFormik label="Last Name" name="lastName" formik={formik} />
                            <InputFieldFormik label="Email" type="email" name="email" formik={formik} />
                            <Button text="Register" type="submit" fullWidth disabled={buttonDisabled} />
                            <StyledErrorMessage>
                                {postFavouritesError}
                            </StyledErrorMessage>
                        </form>
                    </StyledRegisterFormContainer>
                </StyledRegisterForm>
            </StyledContentLayout>
        </>
    )
}

RegisterForm.propTypes = {}

export default RegisterForm
