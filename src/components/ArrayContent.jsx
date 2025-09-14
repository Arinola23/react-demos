import React from 'react'
import {useState} from "react"
const ArrayContent = () => {
   const [friends, setFriends] = useState(['alex', 'maryam'])
   
   const newFriend = ['yomi']
   
   const addFriend = () => {
        setFriends([...friends, newFriend])
    }

    const removeFriend = () => {
        // setFriends(friends.filter((f) => f !== 'maryam'))
        // setFriends(friends.map((f) => f === "john" ? "friend not found" : f))
    }

    const updatefriend = () => {
        setFriends(friends.map((f) => f === "maryam" ? "maryam Oladipo" : f))
    }
       return (
    <div>
      {friends.map((f, index) => (
        <li key ={index}>{f}</li>
      ))}

      <button onClick={addFriend}>addfriends</button>
      <button onClick = {removeFriend}>removeFriend</button>
    <button onClick = {updatefriend}>updatefriend</button>
    </div>
  )
}

export default ArrayContent
