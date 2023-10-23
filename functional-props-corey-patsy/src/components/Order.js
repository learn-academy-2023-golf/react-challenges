import React from "react"

const Order = (props) => {

    return (
        <>
        <button onClick={() => props.orderItem(props.index)}>Order?</button>
        </>
    )
}
export default Order

//When we click the button display item order, number of item, and total price
// Order
// Amount - Item - Total Price
// Amount - Item - Total Price
// Amount - Item - Total Price
// Amount - Item - Total Price
// Amount - Item - Total Price
// Grand Total

// <p>amount - props.name - total = $props.price x amount</p>
// <p>amount - props.name - $props.price x amount</p>
// <p>amount - props.name - $props.price x amount</p>
// <p>amount - props.name - $props.price x amount</p>
// <p>amount - props.name - $props.price x amount</p>
// <p>totalBurger + totalPizza + etc...</p>