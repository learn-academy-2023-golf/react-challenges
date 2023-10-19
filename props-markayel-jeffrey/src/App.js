import React, {useState} from 'react';
import Box from './components/box';
import PreviousRolls from './components/PreviousRolls';
import './App.css';

const App = () => {
  const nums = ["1", "2", "3", "4", "5", "6", "7"]
  const [diceNums, setdiceNums] = useState(nums[0])
  const triggerdiceRoll = () =>{
    let nextNum = Math.floor(Math.random() * nums.length)
  setdiceNums(nums[nextNum])
  console.log(nextNum)}
  const history = []
  const [oldNum, setoldNum] = useState(history)
  const previousroll = () => {
    let lastRoll = history.push(diceNums)
    setoldNum(history[lastRoll])
  }
  return(
    <>
    <h1> Dice Roll </h1>
    <Box diceNum={diceNums} triggerdiceRoll={triggerdiceRoll} />
    <PreviousRolls previousroll={previousroll} oldNums={oldNum}/>

    </>
  )
}







export default App;
