import React, { useState } from "react";
import Menu from "./components/Menu";
import Order from "./components/Order";

const App = () => {
  const [food, setFood] = useState([
    {name: "Burger", price: 10},
    {name: "Pizza", price: 15},
    {name: "Spaghetti", price: 12},
    {name: "Chicken", price: 7},
    {name: "Tacos", price: 9},
  ])
  const [order, setOrder] = useState([
    {amount: 0, itemName: "TEST", total: 0}
  ])

  const orderItem = (selectedItem) => {
        console.log(selectedItem)

      order[selectedItem].amount = order[selectedItem].amount + 1
        console.log(order.amount)
        setOrder([...order])
  }  

  return (
  <>
  <h1>FOOD?</h1>
  {food.map((item, index) => {
    return (
      <>
      <Menu item={item} key={index}/>
      <Order orderItem={orderItem} index={index}/>
      </>
    )
  })}
  <div>
        <table>
          <tr>
            <th>Amount</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>
              {order[0].amount}
            </td>
            <td>
              {order[0].itemName}
            </td>
            <td>
              {order[0].total}
            </td>
          </tr>
        </table>
        <h3>GRAND TOTAL - </h3>
      </div>
  </>
  )
};

export default App;
