import { useState } from 'react';
import './App.css';
import Dice from "./components/Dice"
import Rolls from "./components/Rolls"

function App() {
  const [diceRoll, setDiceRoll] = useState(Math.floor(Math.random() * 6)+ 1)
  const [diceRollContainer, setDiceRollContainer] = useState([])

  const diceThrow = () => {
    setDiceRoll(Math.floor(Math.random() * 6)+ 1)
    setDiceRollContainer(curr => curr.concat(diceRoll))
  }
  const restart = () => {
    setDiceRollContainer([])
  }
  console.log(diceRollContainer) 
  return (
    <div className="App">
      <Dice diceRollValue={diceRoll} diceThrow={diceThrow} />
      <div className="rollsMargin">
        <Rolls pizza={diceRollContainer} restartButton={restart} />
      </div>





    </div>
  );
}

export default App;
