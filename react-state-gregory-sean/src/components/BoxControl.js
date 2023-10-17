import Box from './Box'
import React, {useState} from "react"


const BoxControl = () => {
    const [colorBoxes, setColorBoxes] = useState([]);

    const addColorBox = () => {
        const newBox = <Box />
        setColorBoxes([...colorBoxes, newBox])
    };

    const removeColorBox = () => {
        if (colorBoxes.length > 0) {
        const updatedColorBoxes = [...colorBoxes];
        updatedColorBoxes.pop();
        setColorBoxes(updatedColorBoxes)
        }
    }

    return(
        <>
        {colorBoxes}
        <br></br>
        <div>
        <button onClick = {addColorBox}>
            add a color box
        </button>
        <button onClick = {removeColorBox}>
            Remove a color box
        </button>
        </div>
        </>
    )
    

}






export default BoxControl 