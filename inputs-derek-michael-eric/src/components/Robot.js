import React from 'react'

// pseudo code for robot.js  ,     define robot component that takes 4 parameters. Create a variable to store the modified text, initially set to the input.

function Robot({ name, text, badRobot, customRobot }) {
  let modifiedText = text

  if (badRobot) {
    modifiedText = text.replace(/./g, 'B')
  } else if (customRobot) {
    modifiedText = text.replace(/./g,'Hold My Drink')

  }

  return (
    <div className="robot">
      <h2>{name}</h2>
      <p>{modifiedText}</p>
    </div>
  )
}

export default Robot