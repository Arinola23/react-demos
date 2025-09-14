import React from 'react'
//update name on the profile
import {useState} from 'react'
const Profile = () => {
    const [proflieInfo, setprofileInfo] = useState({
            name : "",
            age : ""
    })

  

    const handleChange = (e) => {
      const {name, value} = e.target

      setprofileInfo((prevProfile) => ({
        ...prevProfile, [name]: value
    }))
    }

  return (
    <div>
      <label> Name:
                <input type="text" name='name' value={proflieInfo.name} onChange={handleChange} />
      </label>
       <label> Age:
                <input type="text" name='age' value={proflieInfo.age} onChange={handleChange} />
      </label>

      <h3>Profile Information</h3>
    <p>Name: {proflieInfo.name}</p>
    <p>Age: {proflieInfo.age}</p>

    </div>
  )
}

export default Profile
