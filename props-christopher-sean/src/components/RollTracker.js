import React, {useState} from 'react'

const RollTracker = (props) => {

    return (
    <>
        <div className = "rollrecord">
            {props.diceLog}
            <button >Add a Record</button>
        </div>
    </>
    )
}

export default RollTracker