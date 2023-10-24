import React, { useState } from "react"
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"

const App = () => {
 
  const [speech, setSpeech] = useState("")

  const handleChange = (e) => {
      setSpeech(e.target.value)
  }


  return (
    <>
      <h1>Robo Active Listening</h1>
      <input type = "text" value={speech} onChange={handleChange} />
      <GoodRobot speech ={speech} />
      <BadRobot speech ={speech} />
    </>
  )
}

export default App
