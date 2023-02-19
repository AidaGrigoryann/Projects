import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Login = () => {
    const { setUsername } = useContext(LoginContext);
    const { setShowProfile } = useContext(LoginContext);
    return (
        <>
            <input
                type='text'
                placeholder='Username...'
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                type='text'
                placeholder='Password...'
            />
            <button
                onClick={() => {
                    setShowProfile(true)
                }}
            >
                Login
            </button>
        </>
    )
}

export default Login