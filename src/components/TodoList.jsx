import {useState} from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
  
    const handleSubmit = (e) => {
        e.preventDefault()
            if(inputValue.trim()) {
                setTodos([...todos, inputValue])
                setInputValue("")
            }       
    }
    
    const handleChange = e => {
        setInputValue(e.target.value)

    }

    return (
    <div>
      <h1>To do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder='add to do' />
        <button type= "submit">Add To do</button>
      </form> 

    {todos.map((todo, index) => (
        <ul>
            <li key = {index}> {todo}</li>
        </ul>
    ))}
    </div> 
  )
}

export default TodoList
