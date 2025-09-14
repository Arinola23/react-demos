import React from 'react'
let temperature = 3
const weather = () => {
  if(temperature < 15) {
    return <p> it's cold outside</p>
    }
   else if(temperature >= 15 && temperature <= 25) {
    return <p>it is nice outside</p>
   }
   else if (temperature > 25) return <p>it is hot</p>
}

export default weather
