import React from "react";

const OrderTable = (props) => {
  let foodEmoji = "";
  if ((props.item.itemName === "Burger")) {
    foodEmoji = "🍔";
  } else if ((props.item.itemName === "Pizza")) {
    foodEmoji = "🍕";
  } else if ((props.item.itemName === "Spaghetti")) {
    foodEmoji = "🍝";
  } else if ((props.item.itemName === "Chicken")) {
    foodEmoji = "🍗";
  } else if ((props.item.itemName === "Tacos")) {
    foodEmoji = "🌮";
  }
  return (
    <>
      <tr>
        <td>{props.item.amount}</td>
        <td>{foodEmoji}</td>
        <td>${props.item.total}</td>
      </tr>
    </>
  );
};

export default OrderTable;
