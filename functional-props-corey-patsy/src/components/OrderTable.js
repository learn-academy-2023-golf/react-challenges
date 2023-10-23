import React from "react"

const OrderTable = (props) => {
    return (
        <>
        <tr>
            <td>{props.item.amount}</td>
            <td>{props.item.itemName}</td>
            <td>{props.item.total}</td>
        </tr>

        </>
    )
}

export default OrderTable