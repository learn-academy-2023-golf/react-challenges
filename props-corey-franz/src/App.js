import React, {useState} from "react"; 
import Dice from "./components/Dice";
import Log from "./components/Log";
import  "./App.css";


const App = () => {
  const [diceState, setDiceState]= useState (6)
  const [rollDice, setRollDice]= useState ([])
  const handleClick = () => {
    setDiceState(Math.floor(Math.random()*6)+1)
    setRollDice ([...rollDice, diceState])
    console.log(rollDice)
  }
  return (
    <>
      <div className="DiceBlock" onClick={handleClick}> 

      <Dice diceState= {diceState} />
      </div>
      <div className= "DiceLog"> 
      <Log  rollDice= {rollDice}   />
      </div>
    </>
  )
}




export default App