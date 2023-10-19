import React, { useState } from "react";

const Log = (props) => {
  return (
    <>
      <ul className="RollLog">
        {props.rollDice.map((roll) => (
          <li>{roll}</li>
        ))}
      </ul>
    </>
  );
};

export default Log;
