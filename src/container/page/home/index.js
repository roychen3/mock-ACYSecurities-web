import React from 'react'
import PropTypes from 'prop-types'

import WebinarList from './WebinarList'
import RegisterForm from './RegisterForm'

const Home = () => {
    return <>
        <WebinarList />
        <RegisterForm />
    </>
}

Home.propTypes = {}

export default Home
