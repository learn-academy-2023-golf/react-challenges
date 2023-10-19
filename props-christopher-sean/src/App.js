import './App.css';
import DiceTray from './components/dicetray';
import RollTracker from './components/RollTracker';
import React, {useState} from "react"

const App = () => {
  const diceFacesArray = [1, 2, 3, 4, 5, 6]
  const [index, setIndex] = useState(0)
  const diceFace = diceFacesArray[index]
  const rollDice = () => {
    setIndex(Math.floor(Math.random() * diceFacesArray.length))
    }
    
    const [diceLog, setDiceLog] = useState([]);
    const addDiceRecord = () => {
    const newDiceRecord = diceFace
      setDiceLog([...diceLog, newDiceRecord])
  };



  return (
    <>
      <h1>Dice Roller</h1>
      <div className = "dicecontrol">
      <DiceTray diceFace = {diceFace} rollDice = {rollDice} addDiceRecord = {addDiceRecord}  /> 
      <RollTracker diceLog = {diceLog} />
      </div>
    </>
  )
}

export default App;
