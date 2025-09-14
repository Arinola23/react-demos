import React from 'react'
import {useContext}  from "react"
import { UserContext } from './UseContext'
const UserCprofile = () => {
   const {user} = useContext(UserContext)
  return (
    <div>
       <h1>I am {user.name} </h1>
    </div>
  )
}

export default UserCprofile
