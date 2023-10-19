

const Dice = (props) => {
    return(
        <div className="diceContainer">
        <div className="Dice" onClick={props.diceThrow}>
            <p>{props.diceRollValue}</p>            
        </div>
            <h2>Click box to roll</h2>
        </div>
    )
    
}

export default Dice