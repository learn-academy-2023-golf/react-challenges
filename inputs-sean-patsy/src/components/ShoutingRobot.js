import React from "react"

const ShoutingRobot = (props) => {

    const toUpperCase = (userInput) => {
        return userInput.toUpperCase()
    }

    return (
        <>
         <div>
            <h2>Shouting Robot</h2>
            <p>I hear you saying {toUpperCase(props.speech)}. Is that correct?</p>
        </div>
        </>
    )
}

export default ShoutingRobot