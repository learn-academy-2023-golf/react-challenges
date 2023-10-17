import React, { useState } from "react";
import Box from "./components/Box";
import "./App.css";

const App = () => {
  const [boxes, setBoxes] = useState([])

  const addBoxes = () => {
    setBoxes([...boxes, <Box />])
  }

  const removeBoxes = () => {
    const lessBoxes = [...boxes]
    lessBoxes.pop()
    setBoxes(lessBoxes)
  }

  return (
<>

    <div>
      <button onClick={addBoxes}>Add Box</button>
    <button onClick={removeBoxes}>Remove Box</button>

    </div>
    <div className="counters">
      {boxes}
      </div>
      </>
  );
};

export default App;
