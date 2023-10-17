import React, { useState } from 'react'

const Counter = () => {
  const [color, setColor] = useState("blue")
  const handleClick = (color) => {
    setColor(color)
  } 

  return (
    <div className= "color-box"
        style={{backgroundColor: color}}
         onClick = {
            () => {handleClick("orange")
        }
        }>
        Color {color}
        
    </div>
  )
}

export default Counter


