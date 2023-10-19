
import './App.css';
import Rolls from './Components/Rolls';
import Dice from './Components/Dice';
import React, {useState} from 'react'

  const App = () =>{
    const rolls = [1,2,3,4,5,6]
    const [currentRoll, setCurrentRoll] = useState (0)
    const rollDice = () => {
    let diceRoll = Math.floor(Math.random() * rolls.length)
    setCurrentRoll(rolls[diceRoll])
    }
    return (
      <><div className = "appLayout">
      <Dice rollDice ={rollDice}/>
      <Rolls currentRoll = {currentRoll}/>
      </div>
      </>
    )
  }
export default App
