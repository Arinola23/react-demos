//PORTAL USAGE
import React from 'react'
import {useState} from "react"
import PopupContent from './PopupContent'
const copyInput = () => {
    const[inputValue, setInputValue] = useState("")
    const[copied, setCopied] = useState(false)

    //to enable copy text
    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true)
            //schedules a function to run after 2 seconds, which resets copied to false, hiding the "Copied!" message automatically.
            setTimeout(() => setCopied(false) , 8000);
        })
    }

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleCopy}>copy Text</button>
        <PopupContent copied = {copied}/>
    </div>
  )
}

export default copyInput
