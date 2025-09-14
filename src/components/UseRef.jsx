import {useRef} from 'react'

const UseRef = () => {
    const inputElement = useRef(null)

    const focusInput = () => {
        if(inputElement.current) {
          inputElement.current.focus()
        inputElement.current.value = "maryam"

        }
        // inputElement.current.focus()
        // inputElement.current.value = "maryam"
    }
  return (
    <div>
      <input type="text" ref={inputElement} />
      {/* <button onClick={() => focusInput()}>focus &write</button> */}
     <button onClick={focusInput}>focus &write</button>
    </div>
  )
}

export default UseRef
