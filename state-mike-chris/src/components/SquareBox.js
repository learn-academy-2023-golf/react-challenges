import React, { useState } from 'react'

const SquareBox = () => {
  const colors = ["red",  "orange", "yellow", "green", "blue", "purple", 
  "pink"]  
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  const boxStyle = {
    width: '200px', // Adjust the width as needed
    height: '200px', // This maintains a square aspect ratio
    border: '2px solid black',
colors[currentColorIndex],
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    const changeColor = () => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }
  }
  return (
    <div style={boxStyle} onClick={changeColor}>
      <span style={{ color: 'black', fontSize: '20px' }}>{colors[currentColorIndex]}</span>
    </div>
  )
}


export default SquareBox;