

const FoodPrice = (props) => {
    return(
        <>
        <p>{props.food.name}</p>
        <p>{props.food.price}</p>
        {props.food.ordered && <p>ordered</p>}
        <button onClick={() => props.orderItem(props.index)}>Order</button>
        </>
    )
}

export default FoodPrice