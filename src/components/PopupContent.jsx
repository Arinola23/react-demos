
import {createPortal} from "react-dom"

const PopupContent = ({copied}) => {

  return createPortal (
    <section>
       {copied && (
        <p style={{position: "absolute", bottom: "3rem"}}>copied to clipboard</p>
       )}
    </section>,
    document.querySelector('#popup-content')
    
)
}

export default PopupContent
