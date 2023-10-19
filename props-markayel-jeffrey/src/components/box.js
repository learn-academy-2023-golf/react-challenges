import React, {useState} from "react";

const Box = (props) => {
return (
    <div className= "Dice" onClick={props.triggerdiceRoll}>
        <h3> number: {props.diceNum}</h3>
    </div>
)
}

export default Box