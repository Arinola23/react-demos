import React from 'react'
import {useContext} from "react"
import { Data, Data1 } from "../App"
const PropsDrillC = () => {
  const userName = useContext(Data)
    const age = useContext(Data1)

  return (
    <h1>my name is {userName}, I am {age}</h1>
    // <Data.Consumer>
    //   {(name) => {
    //   // return <h1>{name}</h1>
    //     return (
    //       <Data1.Consumer>
    //           {(age) => {
    //             return <p>my name is {name} and I am {age} years of age</p>
    //           }}
    //       </Data1.Consumer>

    //     )
    //   }
    //   }
    // </Data.Consumer>
  )
}

export default PropsDrillC
