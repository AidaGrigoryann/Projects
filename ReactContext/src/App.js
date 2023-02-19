import React, { useState } from 'react'
import Login from './Components/Login'
import './App.css'
import Profile from './Components/Profile'
import { LoginContext } from './Contexts/LoginContext'

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div className='app'>
      <LoginContext.Provider value={{username, setShowProfile, setUsername}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  )
}

export default App