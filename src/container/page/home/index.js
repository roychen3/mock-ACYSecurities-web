import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Summary from './Summary'
import Webinar from './Webinar'
import AlistairSchultz from './AlistairSchultz'
import RegisterForm from './RegisterForm'

const Home = () => {
    return (
        <>
            <Summary />
            <Webinar />
            <AlistairSchultz />
            <RegisterForm />
        </>
    )
}

Home.propTypes = {}

export default Home
