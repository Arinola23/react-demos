import {useState} from 'react'

const ShoppingList = () => {
    const[items, setItems] = useState([])
    const [name, setName] = useState("")
    const [quantity,setQuantity] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()

      if(!name || !quantity) return

      const newItem =  {
        name,
        quantity: parseInt(quantity)
      }

      setItems((prevItem) => [...prevItem, newItem])
      setName("")
      setQuantity("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" name = "name" value ={name} placeholder='Item Name' onChange = {(e) => setName(e.target.value)} />
          <input type="text" name = "quantity" value ={quantity} placeholder='Item quantity' onChange = {(e) =>setQuantity(e.target.value)} />
    <button>add Item</button>
      </form>

      <p>list of items</p>
      {items.map((item, index) => (
        <ul key={index}>
          <li>{item.name} - {item.quantity}</li>
        </ul>
      ))}
    </div>
  )
}

export default ShoppingList
