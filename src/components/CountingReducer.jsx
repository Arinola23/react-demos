import {reducer, initialState} from "./CounterReducer"
import {useReducer, useState} from 'react'
const CountingReducer = () => {
    const[initialValue, setInitialValue] = useState("")
    const [state, dispatch] = useReducer(reducer, initialState)
  
    const AddByAmount = () =>{
         dispatch({type : "incrementByAmount", payload: Number(initialValue)})
            setInitialValue("")
        }
    
        const subByAmount = () =>{
         dispatch({type : "decrementByAmount", payload: +initialValue})
            setInitialValue("")
        }
    return (
    <div>
      <h1>{state.count}</h1>
      
    
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
              <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type:'reset'})}>reset</button>
        <h1>aading values to the amount</h1>
        <input type="number" value={initialValue} onChange={e => setInitialValue(e.target.value)} placeholder="0" />
    <button onClick={AddByAmount}>add</button>
        <button onClick={subByAmount}>subtract</button>

    </div>
  )
}

export default CountingReducer
