import {useEffect, useState} from 'react'

const MoreStateEg = () => {
//     const [randomNumbers, setRandomNumbers] = useState(() => {
//          return Math.floor(Math.random() * 100)
//     })

//     const updateRandom = () => setRandomNumbers(Math.floor(Math.random() * 100))
//   return (
//     <div>
//       <p> randomNumbers: {randomNumbers}</p>
//       <button onClick={updateRandom}>updateRandom</button>
//     </div>
//   )
const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name")
    return savedName ? JSON.parse(savedName) : "";
})

useEffect(() => {
 localStorage.setItem("name", JSON.stringify(name))
, [name]})

const clearName = () => setName("") 

return (
 <>
    <p>Name:{name}</p>
    <input type="text" value = {name} onChange={(e) => setName(e.target.value)} placeholder='entername' />
    <button onClick={clearName}>clear name</button>
 </>
)
}

export default MoreStateEg
