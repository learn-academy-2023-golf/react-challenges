import React, {useState} from 'react'

const RollTracker = () => {

    const [diceLog, setDiceLog] = useState([]);

    const addDiceRecord = () => {
        const newDiceRecord = "NewDiceRecord"
        setDiceLog([...diceLog, newDiceRecord])
    };


    return (
    <>
        <div className = "rollrecord">
            {diceLog}
            <button onClick = {addDiceRecord}>Add a Record</button>
        </div>
    </>
    )
}

export default RollTracker