import React, { useState } from "react"


const Counter = () => {
  let [count, setCount] = useState("White")

  const handleClick = () => {
    setCount(Math.floor(Math.random() * (7 - 1 + 1)) + 1); 
    } 
    if (count === 1){
      count = document.body.style.backgroundColor = "red";
  } else if (count === 2){
    count = document.body.style.backgroundColor = "Orange";
  } else if (count === 3){
    count = document.body.style.backgroundColor = "Yellow";
  } else if (count === 4){
    count = document.body.style.backgroundColor = "Green";
  } else if (count === 5){
    count = document.body.style.backgroundColor = "Blue";
  } else if (count === 6){
    count = document.body.style.backgroundColor = "Purple";
  } else if (count === 7){
    count = document.body.style.backgroundColor = "Pink";
  }
  return (
    <>
    <div onClick={handleClick} className="counter-box"> {count}</div>
    </>
  )
}

export default Counter
