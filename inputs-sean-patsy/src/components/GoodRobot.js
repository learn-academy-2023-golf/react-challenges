import React from "react"

const GoodRobot = (props) => {
    return (
        <>
         <div>
            <h2>Good Robot</h2>
            <p>I hear you saying {props.speech}. Is that correct?</p>
        </div>
        </>
    )
}

export default GoodRobot