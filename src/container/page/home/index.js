import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Summary from './Summary'
import WebinarList from './WebinarList'
import AlistairSchultz from './AlistairSchultz'
import RegisterForm from './RegisterForm'

const Home = () => {
    return (
        <>
            <Summary />
            <WebinarList />
            <AlistairSchultz />
            <RegisterForm />
        </>
    )
}

Home.propTypes = {}

export default Home
