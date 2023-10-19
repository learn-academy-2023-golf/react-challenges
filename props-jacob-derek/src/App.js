import React, { useState } from 'react';
import Dice from './Components/Dice';
import RollLog from './Components/RollLog';
import './App.css';
import one from './Assets/1-dice (1).png'
import two from './Assets/2-dice (1).png'
import three from './Assets/3-dice (1).png'
import four from './Assets/4-dice.png'
import five from './Assets/5-dice.png'
import six from './Assets/6-dice.png'

const App = () => {
  const [rollHistory, setRollHistory] = useState([]);
  const [diceResult, setDiceResult] = useState();
  const rollDice = () => {
    let rollResult = Math.floor(Math.random() * 6) + 1;
    setDiceResult(rollResult);
    setRollHistory([...rollHistory, rollResult]);
  };
  
  return (
    <div className='result'>
      <Dice rollDice={rollDice} diceResult={diceResult} />
      <RollLog rollHistory={rollHistory} />


      <img src={diceResult === 1 ? one :
                 diceResult === 2 ? two :
                 diceResult === 3 ? three :
                 diceResult === 4 ? four :
                 diceResult === 5 ? five : six}
             alt={`Dice result: ${diceResult}`} />
      
      {/* <img src={one}/>
      <img src={two}/>
      <img src={three}/>
      <img src={four}/>
      <img src={five}/>
      <img src={six}/> */}
    </div>
  );
};
export default App;







