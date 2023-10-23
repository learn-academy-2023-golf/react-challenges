const MenuItem = (props) => {
    return (
        <>
        <p>{props.foodItem.name}: ${props.foodItem.price}</p>
        <button onClick={() => props.addToOrder(props.index)}>Order</button>
        </>
    )
}

export default MenuItem