import React, { useState } from "react" 
import Box from './components/Box.js'
import Counter from './components/Counter.js'
import './App.css'
const App = () => {
  const [on, setOn] = useState(false)
  const isOn = () => {
    setOn(true)
  }
  return(
    <>
    <Box/>
    <Box/>
    <Box/>
    <div className="left"> 
      <Box/>
      <Box/>
      <Box/>
    </div>
    <Counter/>
    </>
  )
}

export default App