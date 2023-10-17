import React, { useState } from "react"

  const RandomColor = () => {
  const [color, setColor] = useState("white")

  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return {color, generateColor}
};
export default RandomColor;