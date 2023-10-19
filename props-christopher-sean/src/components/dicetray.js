import React, {useState} from "react"

const DiceTray = (props) => {
    const rollDiceAndRecord = () => {
        props.rollDice();
        props.addDiceRecord();
      }
    
    return <>
    <div className = "dicetray" onClick = {rollDiceAndRecord}>
    <h3>{props.diceFace}</h3>
    </div>
    </>
}



export default DiceTray