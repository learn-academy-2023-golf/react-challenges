import "./App.css"
import React, { useState } from "react"
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"
import ShoutingRobot from "./components/ShoutingRobot"
import NumberSpeakingRobot from "./components/NumberSpeakingRobot"
import DorothyRobot from "./components/DorothyRobot"
import CatRobot from "./assets/CatRobot.jpeg"

const App = () => {
 
  const [speech, setSpeech] = useState("")

  const handleChange = (e) => {
      setSpeech(e.target.value)
  }


  return (
    <>
    <div className="maindiv">
      <h1>Cat Robot Overlords</h1>
      <img className="catrobot" src={CatRobot} /> <br></br><br></br>
      <input type = "text" value={speech} onChange={handleChange} />
      <GoodRobot speech={speech} />
      <BadRobot speech={speech} />
      <ShoutingRobot speech={speech} />
      <NumberSpeakingRobot speech={speech} />
      <DorothyRobot speech={speech} />
    </div>
    </>
  )
}

export default App
