import React, {useState} from 'react'
const ColorBox3 = () => {
    const [color, boxColor] = useState("yellow")
   

    const handleClick = () => {
        boxColor("green")
    
  }
return (
    <>
    <div className="box" style={ {backgroundColor: color} }>
        <h2>Color Box 3</h2>
        <button onClick={handleClick} >{color}</button>
    </div>
    </>
  )
}
export default ColorBox3