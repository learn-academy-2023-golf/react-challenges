import React, { useState } from "react";
import "./Box.css";
const Box = () => {
  const [color, setColor] = useState("white");
  const [index, setIndex] = useState(1);
  const backgroundColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  const changeColor = () => {
    if (index === backgroundColors.length - 1) {
      return setIndex(0), setColor(backgroundColors[index]);
    } else {
      return setIndex(index + 1), setColor(backgroundColors[index]);
    }
  };
  const handleClick = () => {
    changeColor(backgroundColors[index]);
  };

  return (
    <div
      onClick={handleClick}
      className="counter-box"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Box;