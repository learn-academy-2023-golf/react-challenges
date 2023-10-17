import React, {useState} from 'react'
const ColorBox2 = () => {
    const [color, boxColor] = useState("blue")
   

    const handleClick = () => {
        boxColor("orange")
    
  }
return (
    <>
    <div className="box" style={ {backgroundColor: color} }>
        <h2>Color Box 2</h2>
        <button onClick={handleClick} >{color}</button>
    </div>
    </>
  )
}
export default ColorBox2