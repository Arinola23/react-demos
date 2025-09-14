//updating array of objects
import {useState} from 'react'

const ArrayObject = () => {
    const[movies, setMovies] = useState([{id: 1, title: "fuji house"}, {id:2, title: "papa ajasco"}])

    const handleClick = () => {
        setMovies(movies.map((m)=> m.id === 1 ? { ...movies, title: "superStory"} : m))
    }

    return (
    <div>
      {movies.map((m,index) => (
        <ul>
            <li key= {index}>{m.title}</li>
        </ul>
      ))}
      <button onClick={handleClick}>update title</button>
    </div>
  )
}

export default ArrayObject
