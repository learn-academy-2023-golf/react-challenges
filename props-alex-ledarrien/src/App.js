import React, { useState } from "react";
import Dice from "./Components/Dice";
import RollLog from "./Components/RollLog";
import "./App.css";

const App = () => {
  const [rolls, setRolls] = useState([]); // To store the roll history

  // Function to roll a six-sided die
  const rollDie = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    setRolls([rolls, rollResult]); // Add the new roll to the history
  };

  return (
    <div>
      <h1>DICE ROLLER</h1>
      <button onClick={rollDie}>Roll the Die</button>
      <div className="die">
        <Dice roll={rolls.length > 0 ? rolls[rolls.length - 1] : "#"} />
      </div>
     {rolls.map((roll,index) => {
      return <RollLog row={roll} key={index}/>
     })
     }
    </div>
  );
};

export default App;
