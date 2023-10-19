function RollLog({ rolls, clearRollLog }) {
    return (
      <div className="roll-log">
        <h2>Roll Log</h2>
        <ul>
          {rolls.map((roll, index) => (
            <li key={index}>{roll}</li>
          ))}
        </ul>
        {rolls.length > 0 && (
          <button onClick={clearRollLog} className="clear-button">
            Clear Log
          </button>
        )}
      </div>
    )
  }
export default RollLog