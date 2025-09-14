import {useReducer, createContext} from 'react'

const initialState = {count: 0}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, count:state.count + 1}
 case "decrement":
            return {...state, count:state.count - 1}
 case "reset":
            return {...state, count: 0}    
case "incrementByAmount":
        return {...state, count: state.count + action.payload}
case "decrementByAmount":
        return {...state, count: state.count - action.payload}
        
        default :
            return state;
    }
}

export {reducer, initialState}

// export const UseContext = createContext()

// const CounterReducer = ({children}) => {
//     const[state, dispatch] = useReducer(reducer, initialState)
//   return (
//    <UseContext.Provider value={[state, dispatch]}>
//         {children}
//    </UseContext.Provider>
//   )
// }

// export default CounterReducer
