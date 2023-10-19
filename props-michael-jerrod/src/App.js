import React, { useState } from "react";
import Dice from "./components/Dice";
import RollLog from "./components/RollLog";

const App = () => {
  const [rolls, setRolls] = useState([]);
  const [currentRoll, setCurrentRoll] = useState(null);

  const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    setCurrentRoll(rollResult);
    setRolls([...rolls, rollResult]);
  }
  const clearRollLog = () => {
    setRolls([])
  }
  return (
    <div className="app-container">
      <div className="square-box" onClick={rollDice}>
        {rolls.length > 0 && <div className="result-display">{rolls[rolls.length - 1]}</div>}
      </div>
      <RollLog rolls={rolls} clearRollLog={clearRollLog} />
    </div>
  )
}

export default App;