import {useContext, useState } from 'react'
import { UserContext } from './UseContext'
const UpdateUserContext = () => {
    const {updateName} = useContext(UserContext)
    const[newName, setNewName] =useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(newName.trim()) {
            updateName(newName)
            setNewName("")
        }
    }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder='update name'/>
        <button type='submit'>update</button>
      </form>
    </div>
  )
}

export default UpdateUserContext
