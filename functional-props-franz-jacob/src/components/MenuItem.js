const MenuItem = (props) => {
    return(
        <>
        <p>{props.item.name}</p>
        <p>${props.item.price}</p>
        {props.item.ordered &&
            <p>Ordered</p>   
        }
            {props.item.ordered && 
            
            <p>Test</p>
             
        }
        <button onClick={() => props.orderItem(props.index)}>Order</button>

        
        {/* <button onClick={handleClick} */}

        
        </>
    )
}

export default MenuItem