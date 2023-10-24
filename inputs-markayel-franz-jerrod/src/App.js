import React, { useState } from "react"

const App = () => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    console.log(e)
    setInput(e.target.value)
    
  }
  const badRobot = (input) => {
    const newInput = input.split(" ").map(letter => "BLABL").join(" ")
    console.log(input)
    if (input.length > 1 ) return newInput 
  }
  const goodRobot = (input) => {
    return ` I hear you saying ${input}. Is that correct`
  }
  const iRobot = (input) => {
    const newInput = input.split(" ").map(word => "Destroy Humanity!").join(" ")
    if (input.length > 1 ) return newInput
    
    console.log(newInput)
  }


  return 
    <>
      <h1>Listening Robot</h1>
      <input 
      type="text"
      onChange={handleChange}
      />
      <h2>Good Robot:{goodRobot(input)}</h2>
      <h2>Bad Robot:{badRobot(input)}</h2>
      <h2>iRobot:{iRobot(input)}</h2>

    </>
  
}
export default App
