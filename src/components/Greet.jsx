import React from 'react'

const Greet = ({timeOfDay}) => {
    return timeOfDay === "morning" ? (<p> good morning</p>) : (<p>good afternoon</p>)
  // const greet = "hello"
  // const currentDate = new Date()
  // const name = "John"
  
  // return (
  //   <div>
  //      <h1>{greet}</h1>
  //      <p>my name is {name} whose birthday is today {currentDate.getDate()}th of August</p>
  //   </div>
  // )
}

export default Greet
