import React from 'react'

const Dice = (props) => {
    return(
        <div className = "rollStyle" onClick = {props.rollDice}> 
        <p>{props.currentRoll}</p>
        </div>

    )
}
export default Dice