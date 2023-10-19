function Dice({ currentRoll, rollDice, diceFaces }) {
    return (
      <div className="square-box" onClick={rollDice}>
        {currentRoll !== null ? (
          <img
            src={diceFaces[currentRoll - 1]} // Adjust the index to match diceFaces
            alt={`Dice face ${currentRoll}`}
            className="dice-face-image"
          />
        ) : (
          <div className="instruction"></div>
        )}
      </div>
    )
  }

export default Dice

// const Dice = ({ onRoll, result }) => {
//     return (
//       <div className="square-box" onClick={onRoll}>
//         {result !== null && (
//           <div className="dice-result">You rolled: {result}</div>
//         )}
//       </div>
//     )
//   }