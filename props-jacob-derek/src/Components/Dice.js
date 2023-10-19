import React from 'react';

const Dice = ({ rollDice, diceResult }) => {
  return (
    <div className="dice" onClick={rollDice}>
      {diceResult}
    </div>
  );
};
export default Dice