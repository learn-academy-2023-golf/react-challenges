import React, { useState } from "react";
import Dice from "./components/Dice";
import RollLog from "./components/RollLog";
import Button from "./components/Button";
import one from "./assets/1-dice.png"
import two from "./assets/2-dice.png"
import three from "./assets/3-dice.png"
import four from "./assets/4-dice.png"
import five from "./assets/5-dice.png"
import six from "./assets/6-dice.png"

const App = () => {
  const [rolls, setRolls] = useState([]);
  const [currentRoll, setCurrentRoll] = useState(null)

  const diceFaces = [one, two, three, four, five, six]

  const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1
    setCurrentRoll(rollResult);
    setRolls([...rolls, rollResult]);
  }

  const clearRollLog = () => {
    setRolls([]);
    setCurrentRoll(null);
  }

  return (
    <>
      <h1>Dice Game</h1>
      <div className="app-container">
        <Dice
          currentRoll={currentRoll}
          rollDice={rollDice}
          diceFaces={diceFaces}
        />
        <Button onClick={rollDice} text="Roll Dice" />
        <RollLog rolls={rolls} clearRollLog={clearRollLog} />
      </div>
    </>
  )
}

export default App

// const App = () => {
//   const [rolls, setRolls] = useState([]);
//   const [currentRoll, setCurrentRoll] = useState(null)
//   const diceFaces = {
//     1: react/assets/1-dice.png
//     2: react/assets/2-dice.png
//     3: react/assets/3-dice.png
//     4: react/assets/4-dice.png
//     5: react/assets/5-dice.png
//     6: react/assets/6-dice.png
//   }

//   const rollDice = () => {
//     const rollResult = Math.floor(Math.random() * 6) + 1;
//     setCurrentRoll(rollResult);
//     setRolls([...rolls, rollResult]);
//   }
//   const clearRollLog = () => {
//     setRolls([])
//   }
//   return (
//     <> 
//     <h1>Dice Game</h1>
//     <div className="app-container">
//       <div className="square-box" onClick={rollDice}>
//         {rolls.length > 0 && <div className="result-display">{rolls[rolls.length - 1]}</div>}
//       </div>
//       <Button onClick={rollDice} text="Roll Dice" />
//       <RollLog rolls={rolls} clearRollLog={clearRollLog} />
//     </div>
//     </>
//   )
// }