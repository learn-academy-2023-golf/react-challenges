import React from "react"

const NumberSpeakingRobot = (props) => {
 
    const changeToBLA = (userInput) => {

        let arr = userInput.split("")

       let newArr = arr.map((value, index) => {
                return value = Math.floor(Math.random()*9)
            }
        )

        return newArr.join("")
    }

    return (
        <>
        <div>
            <h2>Number Speaking Robot</h2>
            <p>I hear you saying {changeToBLA(props.speech)}. Is that correct?</p>
        </div>
        </>
    )
}

export default NumberSpeakingRobot