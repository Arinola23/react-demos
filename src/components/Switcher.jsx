import React from 'react'
import {useState} from "react"
const Switcher = () => {
    const [sw, setSw] = useState(false)
  return (
    <div>
      {sw ? ( <span>Dark</span> ) : (<span>Light</span> )}
               <input type="text" key={sw ?  "dark": "light"} />

        {/* <input type="text" placeholder={sw ?  "dark": "light"} /> */}
        {/* That function receives the previous state value (s) i.e false.
          !s means “not s” → if s is true, it becomes false; if s is false, it becomes true. */}
        <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  )
}

export default Switcher
