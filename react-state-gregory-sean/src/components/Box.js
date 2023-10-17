import React, {useState} from "react"

const Box = () => {
    const colorArray = ["white", "red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    const [index, setIndex] = useState(0)
    const boxColor = colorArray[index]
    const changeColor = () => {
        setIndex((index + 1) % colorArray.length)
    }

    return (
        <>
        <div className = "color-box" onClick={changeColor} style = { {backgroundColor: boxColor}}>
        <p className = "color-name">color: {boxColor}</p>
        </div>
        </>
    )
}



export default Box