import React from 'react'
import { useSelector } from 'react-redux'

import Summary from './Summary'
import Webinar from './Webinar'
import AlistairSchultz from './AlistairSchultz'
import RegisterForm from './RegisterForm'

const Home = () => {
    const userInformation = useSelector((state) => state.home.userInformation)
    const isLogined = userInformation.token

    return (
        <>
            <Summary />
            <Webinar />
            <AlistairSchultz />
            {isLogined &&
                <RegisterForm />
            }
        </>
    )
}

Home.propTypes = {}

export default Home
