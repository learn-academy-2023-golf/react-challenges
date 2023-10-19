import React from "react";

const RollLog = (props) => {
  const { rolls } = props;

  return (
    <div>
      <h2>Roll History</h2>
      <ul>
        {rolls((roll, index) => (
          <li key={index + 1}>Roll {index + 1}: {roll + ("")}</li>
        ))}
      </ul>
    </div>
  );
};

export default RollLog