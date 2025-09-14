
//set timer
import {useEffect, useRef, useState} from 'react'

const TimerRef = () => {
    const intervalRef = useRef(null)
    const[timer, setTimer] = useState(0)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1)
        }, 1000)

         return () => {
            clearInterval(intervalRef.current)
         }
    }, [])

        const continueTimer = () => {
            intervalRef.current = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1)
            }, 1000)
        }

   

  return (
    <div>
        <h1>Timer: {timer} seconds</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>stop timer</button>
        <button onClick={continueTimer}>continue</button>
    </div>
  )
}

export default TimerRef
