import React, {useState} from 'react'
import ColorBox from './ColorBox'
const AddBoxButton = () => {
    const [box, addBox] = useState(true)

    const handleClick = () => {
       
       addBox(box)
  }
  
return (
    <>
        <button onClick={handleClick}>Add Box</button>
        

        <button onClick={handleClick}>Remove Box</button>
        
    </>
  )
}
export default AddBoxButton

