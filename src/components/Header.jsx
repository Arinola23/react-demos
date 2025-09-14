import React from 'react'
import { ImAddressBook } from "react-icons/im";

const Header = () => {
  // const style = {color: "red", backgroundColor: "yellow", padding: "2em"}
  return (
    <div>
      {/* <h1 style = {{ color: "red", backgroundColor: "yellow", padding: "2em"}}>Welcome to my website!</h1> */}
            {/* <h1 style = {style}>Welcome to my website!</h1> */}
      <h1>Welcome to my website! {<ImAddressBook />
}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  )
}

export default Header
