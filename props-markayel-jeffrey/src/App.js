import React, {useState} from 'react';
import Box from './components/box';
import PreviousRolls from './components/PreviousRolls';
import './App.css';

const App = () => {
  const nums = ["1", "2", "3", "4", "5", "6"]
  const [diceNums, setdiceNums] = useState(nums[0])

  const triggerdiceRoll = () =>{
    let nextNum = Math.floor(Math.random() * nums.length)
  setdiceNums(nums[nextNum])
  
  const previousRolls  => {(triggerdiceRoll)}
  }

  return(
    <>
    <h1> Dice Roll </h1>
    <Box triggerdiceRoll={triggerdiceRoll} />
    <PreviousRolls previousRolls={previousRolls} />

    </>
  )
}







export default App;
