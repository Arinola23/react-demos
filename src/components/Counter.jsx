import React from 'react'
import {useState} from 'react'

const Counter = () => {
    // const [count, setCount] = useState(0)
        const [count, setCount] = useState( () => {
              const initialCount = 10
              return initialCount

})
     const increment = () => setCount(count + 1)
  return (
    <div>
      <p>you clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
      <button onClick={increment}>increment</button>
      {/* <button onClick = {() => setCount(count - 1)}>decrement </button> */}
      <button onClick = {() => setCount((prevCount) => prevCount - 1)}>decrement </button>

    </div>
  )
}

export default Counter
