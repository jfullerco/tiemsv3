import React, { useState, useEffect } from 'react'
import RestDBService from '../services/RestDBService'

export default Login() {
const initialState = false
const [ isLoggedIn, setIsLoggedIn ] = useState()
const [ userAccount, setUserAccount ] = useState([])

useEffect(() => {
  RestDBService.getUsers
  
}),[]

const handleChange = () => {

}

const handleLogin = (e) => {
  setUserAccount()
}

return (
  <div>

    <input 
      type="text"
      placeholder="email"
      value={userEmail}
    />

    <input 
      type="text"
      placeholder="password"
      value={userPassword}
    />

    <button
      type="submit"
      onClick={(e) => {handleLogin(e)}}
    ></button>

  </div>
)
}
