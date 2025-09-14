import {useState} from 'react'
//  updating object content
const ObjectContent = () => {
    const [food, setFood] = useState({
        ingredient : "ginger",
        quantity : 10
    })

    const handleClick = () => {
        const changeQuant = {
          ...food, quantity : 50
        }
        setFood(changeQuant)
      // setFood({...food, quantity: 100})
    }
  return (
    <div>
      <li>Ingredient 1: {food.ingredient} </li>
      <li>Quantity: {food.quantity}</li>
    
    <button onClick={handleClick}>update Ingredent</button>
    </div>
  )
}

export default ObjectContent
