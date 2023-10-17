import React, {useState} from "react";

const Counter = () => {
    const [number, setNumber] = useState(1)
    const add1 = () => {
        setNumber(number + 1)
    }
    const sub1 = () => {
        setNumber(number - 1)
    }
    const reset = () => {
        setNumber(0)
    }
    return(
    <div className="button" style={{marginLeft:"100%", marginTop:"-110%",}}>
        <h2>{number}</h2>
        <button onClick={add1}>Add 1</button>
        <button onClick={sub1}>Sub 1</button>
        <button onClick={reset}>Reset</button>
    </div>)
}



export default Counter