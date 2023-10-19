const Dice = ({ onRoll, result }) => {
    return (
      <div className="square-box" onClick={onRoll}>
        {result !== null && (
          <div className="dice-result">You rolled: {result}</div>
        )}
      </div>
    )
  }
export default Dice