const MenuItem = (props) => {
    return(
        <>
            <p>{props.item.name} {props.item.price}</p>
            {props.item.ordered && 
            <p>ordered</p>
            }
            <button onClick={() => props.orderItem(props.index)}>Order</button>
        </>
    )
} 


export default MenuItem