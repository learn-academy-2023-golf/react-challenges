import React, { useState } from 'react'
import Robot from './components/Robot'

// Create a state variable called userInput and a function to update it. define function to handle changes in the user input. update the userInput state with the new value entered by the user.

const App = () => {
  const [userInput, setUserInput] = useState('')

  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div>
      <h1>Robot Typing App</h1>
      <input type="text" onChange={handleInputChange} value={userInput} />
      <div className="robots">
        <Robot name="Good Robot" text={userInput} />
        <Robot name="Bad Robot" text={userInput} badRobot />
        <Robot name="The Chappelle Robot" text={userInput} customRobot />
      </div>
    </div>
  )
}





export default App

