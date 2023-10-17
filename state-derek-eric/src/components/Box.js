import React, {useState} from 'react'

const Box = () => {
    const [color, setColor] = useState("black")
    
    const changeColor = () => {
        const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

        setColor(colors[Math.floor(Math.random() * colors.length)]

        )
        // setColor("purple")
    }

    return(
      <>
      <div style={{backgroundColor: color}} onClick={changeColor}>
        
        
      </div>
      </>
    )
  }
  
  export default Box