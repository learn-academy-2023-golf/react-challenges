
import './App.css';
import Rolls from './Components/Rolls';
import Dice from './Components/Dice';
import React, {useState} from 'react'

  const App = () =>{
    // array that holds the dice numbers
    const rolls = [1,2,3,4,5,6]

    // the state of the current roll
    const [currentRoll, setCurrentRoll] = useState (0)

    // function to roll the dice
    const rollDice = () => {
     // random rolls
    let diceRoll = Math.floor(Math.random() * rolls.length)
    console.log(diceRoll)
    // updates the current roll
    setCurrentRoll(rolls[diceRoll])
    }
    // returns the app layout and components(dice and rolls)
    return (
      <><div className = "appLayout">
        <h1>Dice Roller</h1> 
        
        {/* prints the current roll */}

       <Rolls currentRoll = {currentRoll}/>

        {/* connects to the rollDice function */}
      <Dice rollDice ={rollDice} currentRoll={currentRoll}/>
     
       
      </div>
      </>
    )
  }
export default App
