import React, { useState } from 'react';

const ColorBox2 = () => {
  const colors = [ "blue", "purple", "pink","red","orange", "yellow", "green",];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const Box = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];

  return (
    <>
      <div
        onClick={Box}
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

export default ColorBox2;
