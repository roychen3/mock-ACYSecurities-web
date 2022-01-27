import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { userLogin } from '../redux/actions'
import { InputFieldFormik } from './common/InputField'
import Button from './common/Button'

const StyledLoginContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

width: 100%;
max-width: 350px;
padding: 1rem;
`
const StyledTitle = styled.h1`
color: ${({ theme }) => theme.highlight};
text-align: center;
margin-bottom: 2rem;
`
const StyledActionContainer = styled.div`
display: flex;
justify-content:flex-end;
`

const initFormValues = {
  email: 'yuntest@mailinator.com',
  password: 'A123456',
}

const Login = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: initFormValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required')
        .email('Invalid email address'),
      password: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(userLogin(values))
    },
  })

  // const userLoginLoading = useSelector((state) => state.home.userLoginLoading)

  return (
    <StyledLoginContainer>
      <form onSubmit={formik.handleSubmit}>
        <StyledTitle>Log in</StyledTitle>
        <InputFieldFormik label="Email" type="email" name="email" formik={formik} />
        <InputFieldFormik label="Password" type="password" name="password" formik={formik} />
        <StyledActionContainer>
          <Button text="Login" type="submit" />
        </StyledActionContainer>
      </form>
    </StyledLoginContainer>
  )
}

Login.propTypes = {}

export default Login
