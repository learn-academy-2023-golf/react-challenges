import React, {useState} from "react"


const Robot2 = (props) => {
    const [blaIndex, setBlaIndex] = useState(0)
    const [robotOutput, setRobotOutput] = useState("")
    const bla = ["B", "L", "A"]
    const robotBla = (userInput) => {
        for (let i = 0; i < userInput.length; i++){
            if (blaIndex = 3) {
                setBlaIndex(0)
            }
            setRobotOutput(robotOutput + bla[blaIndex])
            setBlaIndex(blaIndex + 1)
        } 
    }
    return (
        <>
        <h2>Robot2</h2>
        <p>{robotBla(props.userInput)}</p>
        </>
    )
}

export default Robot2