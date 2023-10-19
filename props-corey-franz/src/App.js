import React, { useState } from "react";
import Dice from "./components/Dice";
import Log from "./components/Log";
import one from "./images/1-dice.png";
import two from "./images/2-dice.png";
import three from "./images/3-dice.png";
import four from "./images/4-dice.png";
import five from "./images/5-dice.png";
import six from "./images/6-dice.png";
import "./App.css";

const App = () => {
  const [diceState, setDiceState] = useState(6);
  const [rollDice, setRollDice] = useState([6]);
  const imageArray = ["empty", one, two, three, four, five, six];
  const handleClick = () => {
    setDiceState(Math.floor(Math.random() * 6) + 1);
    setRollDice([...rollDice, diceState]);
    console.log("diceState: " + diceState);
    console.log(rollDice);
  };
  const reset = () => {
    setDiceState(6);
    setRollDice([]);
  };
  return (
    <>
      <h1 className="Title">DICE BLOCK</h1>
      <div className="Entire">
        <div className="DiceApp">
          <div className="DiceBlock" onClick={handleClick}>
            <Dice image={imageArray[rollDice[rollDice.length - 1]]} />
          </div>
          <div className="DiceLog">
            <Log rollDice={rollDice} />
          </div>
          <button className="Button" onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
