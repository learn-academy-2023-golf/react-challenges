const Rolls = (props) => {
    return(
        <div className="rollsContainer">
        <div>
             {props.pizza.map((num, index) => <h3 key={index}>Roll Number {index + 1}: {num}</h3>)}
        </div>
            <button onClick={props.restartButton}>Reset</button>
        </div>
    )
}




export default Rolls