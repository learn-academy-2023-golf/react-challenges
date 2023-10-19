import React, {useState} from "react"

const DiceTray = () => {
    
    const diceFacesArray = [1, 2, 3, 4, 5, 6]
    const [index, setIndex] = useState(0)
    const diceFace = diceFacesArray[index]
    const rollDice = () => {
        setIndex(Math.floor(Math.random() * diceFacesArray.length))
    }

    return <>
    <div className = "dicetray" onClick = {rollDice}>
    <h3>{diceFace}</h3>
    </div>
    </>
}

export default DiceTray