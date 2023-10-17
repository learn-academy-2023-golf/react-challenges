import React, {useState} from 'react'
const ColorBox4 = () => {
    const [color, boxColor] = useState("purple")
   

    const handleClick = () => {
        boxColor("pink")
    
  }
return (
    <>
    <div className="box" style={ {backgroundColor: color} }>
        <h2>Color Box 4</h2>
        <button onClick={handleClick} >{color}</button>
    </div>
    </>
  )
}
export default ColorBox4