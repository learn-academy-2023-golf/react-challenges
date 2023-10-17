import React, {useState} from 'react'
const ColorBox = () => {
    const [color, boxColor] = useState("white")
   

    const handleClick = () => {
        boxColor("red")
    
  }
return (
    <>
    <div className="box" style={ {backgroundColor: color} }>
        <h2>Color Box</h2>
        <button onClick={handleClick} >{color}</button>
    </div>
    </>
  )
}
export default ColorBox