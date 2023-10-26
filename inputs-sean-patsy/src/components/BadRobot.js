import React from "react"

const BadRobot = (props) => {
 
    const changeToBLA = (userInput) => {

        let arr = userInput.split("")

       let newArr = arr.map((value, index) => {
            if(index % 3 === 0){
                return value = "B"
            } else if(index % 3 === 1){
                return value = "L"
            } else if(index % 3 === 2){
                return value = "A"
            }
        })

        return newArr.join("")
    }

    return (
        <>
        <div>
            <h2>Bad Robot</h2>
            <p>I hear you saying {changeToBLA(props.speech)}. Is that correct?</p>
        </div>
        </>
    )
}

export default BadRobot