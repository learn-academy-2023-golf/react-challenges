import React from 'react'

const Dice = (props) => {
    return(
        <div className = "dice">
          <h1>Dice Roller</h1>  
        <button onClick = {props.rollDice}>Roll Dice</button>
        </div>

    )
}
export default Dice