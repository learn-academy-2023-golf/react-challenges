import React, {useState} from "react"
import Robot1 from "./components/Robot1"
import Robot2 from "./components/Robot2"
import Robot3 from "./components/Robot3"


const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }

  return (
    <>
      <h1>Robo Cop</h1>
      <input type="text" value={userInput} onChange={handleChange} />
      <Robot1 userInput={userInput}/>
      <Robot2 userInput={userInput}/> 
      <Robot3 userInput={userInput}/> 
    </>
  )
}

export default App;
