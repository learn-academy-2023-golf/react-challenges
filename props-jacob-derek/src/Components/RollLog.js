import React from 'react';

const RollLog = ({ rollHistory }) => {
  return (
    <div className="roll-log">
      <h2>Roll History</h2>
      <ul>
        {rollHistory.map((index) => (
          <li key={index}> {index + 1}</li>
        ))}
      </ul>
    </div>
  );
};
export default RollLog;