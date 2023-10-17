import React, { useState } from 'react';

const ColorBox1 = () => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const ColorBox = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];

  return (
    <>
      <div
        onClick={ColorBox}
        style={{
          backgroundColor: currentColor,
        }}
        className="counter-box"
      >
        {currentColor}
      </div>
    </>
  );
};

export default ColorBox1;
