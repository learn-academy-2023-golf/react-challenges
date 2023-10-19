import React, { useState } from "react";
import one from "./images/1-dice.png";
import two from "./images/2-dice.png";
import three from "./images/3-dice.png";
import four from "./images/4-dice.png";
import five from "./images/5-dice.png";
import six from "./images/6-dice.png";

const Dice = (props) => {
  return (
    <>
      <img src={props.image} alt="dice" />
    </>
  );
};

export default Dice;
