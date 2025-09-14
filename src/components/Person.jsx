import React from 'react'

const Person = (props) => {
  return (
    <div>
        <p>his name is: {props.name} and he is {props.age}, hobbies are{props.hobbies}</p>
    </div>
  )
}

export default Person
