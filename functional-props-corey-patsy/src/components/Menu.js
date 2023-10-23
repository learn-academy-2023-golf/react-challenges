import React from "react"

const Menu = (props) => {
    return (
        <>
        <p>{props.item.name} - ${props.item.price}</p>
        </>
    )
}
export default Menu