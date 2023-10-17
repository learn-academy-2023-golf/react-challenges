import React, { useState } from "react"
import "./App.css"
const App = () => {
  const [color, setColor] = useState("white")
  const [index, setIndex] = useState(0)
  const backgroundColors =["white", "black"]
  const changeColor = () => {
  if (index === backgroundColors.length - 1){
    return setIndex(0) 
  } else{
    return setIndex(index  + 1)
}
  }
  const handleClick = () => {
    changeColor(backgroundColors[index])
    setColor(backgroundColors)
  }

  return (
    <div onClick={handleClick} className="counter-box">
    {color}
    </div>
  )
}

export default App