import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const dispatch = useDispatch();
  const userList = useSelector((state) => {
    return state.users.value
  })
  return (
    <div className="App">
      {' '}
      <div className='addUser'>
        <input type='text' placeholder='Name...' onChange={(e) => {
          return setName(e.target.value)
        }} />
        <input type='text' placeholder='Username...' onChange={(e) => {
          return setUsername(e.target.value)
        }} />
        <button onClick={() => {
          dispatch(addUser({ id: userList[Object.keys(userList).length - 1].id + 1, name, username }))
        }}>Add user</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input type='text' placeholder='New Username...' onChange={(e) => {
                return setNewUsername(e.target.value)
              }} />
              <button onClick={() => {
                dispatch(updateUsername({id: user.id, username: newUsername}))
              }} >Update Username</button>
              <button onClick={() => {
                return dispatch(deleteUser({ id: user.id }))
              }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;