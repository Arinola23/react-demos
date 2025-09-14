import {useState, useEffect} from 'react'

// const UseEffect = () => {
//     const [value, setValue] = useState(0)

//     useEffect(() => {
//         console.log('call useEffect')
//         document.title = `increment ${value}`
//     }, [value])
//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>click Me</button>
//     </div>
//   )
// }

const UseEffect = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
        //    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")  
        const data = await response.json()
           if(data && data.length) setData(data)
        }
        getData()
    }, [])

    return (
    <>
    
      {/* {
        data.map((todo) => (
            <ul key={todo.id}>
                <li >boddy---{todo.body}</li>
                 <li >{todo.title}</li>

            </ul>
        ))
      } */}

      <h1>first post Title: </h1>
      {data.length > 0 ? <li>{data.title}</li>  : <p>Loading...</p>}
    </>
)
}



export default UseEffect
