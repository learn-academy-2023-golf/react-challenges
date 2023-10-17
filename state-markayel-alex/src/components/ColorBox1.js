import React, { useState } from 'react'

const ColorBox1 = () => {
  const [color, setColor] = useState("black")


  const ColorBox = () => {
    setColor(color)
  }

  return (
   <> <div> <button onClick={ColorBox} className="counter-box">
    </button>
    </div>
    </>
  )
}

export default ColorBox1