const FoodPrice = (props) => {
    return(
        <>
        <p>{props.item.name}</p>
        <p>{props.item.price}</p>
        {props.item.ordered && <p>ordered</p>}
        <button onClick={() => props.orderItem(props.index)}>Order</button>
       <p>Total</p>
        </>
    )
}

export default FoodPrice