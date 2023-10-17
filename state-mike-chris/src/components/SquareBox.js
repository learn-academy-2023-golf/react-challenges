import React, { useState } from 'react';

const SquareBox = () => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const boxStyle = {
    width: '200px',
    height: '200px',
    border: '2px solid black',
    backgroundColor: colors[currentColorIndex], // Fix: Set the background color based on the current color index
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div style={boxStyle} onClick={changeColor}>
      <span style={{ color: 'black', fontSize: '20px' }}>{colors[currentColorIndex]}</span>
    </div>
  );
};

export default SquareBox;
