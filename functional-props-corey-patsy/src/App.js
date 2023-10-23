import React, { useState } from "react";
import Menu from "./components/Menu";
import Order from "./components/Order";
import OrderTable from "./components/OrderTable";

const App = () => {
  const [food, setFood] = useState([
    {name: "Burger", price: 10},
    {name: "Pizza", price: 15},
    {name: "Spaghetti", price: 12},
    {name: "Chicken", price: 7},
    {name: "Tacos", price: 9},
  ])
  const [order, setOrder] = useState([])

  const orderItem = (selectedItem) => {
        console.log(selectedItem)
        
        if(order.some((obj) => obj.itemName === food[selectedItem].name)){
          console.log("has value")
          console.log(food[selectedItem].name)
          const currentIndex = order.findIndex((obj) => obj.itemName === food[selectedItem].name)
          console.log(currentIndex)
          order[currentIndex].amount = order[currentIndex].amount + 1
          order[currentIndex].itemName = food[selectedItem].name
          order[currentIndex].total = order[currentIndex].total + food[selectedItem].price 
        } else {
          console.log("no value")
          order.push({amount: 1, itemName: food[selectedItem].name, total: food[selectedItem].price})
          console.log(order)
        }

        setOrder([...order])

  }  

  const sumTotal = order.reduce((accumulator, object) => {
    return accumulator + object.total
  }, 0)
  console.log("🍕")

  const grandTotal = (sumTotal * .07 + sumTotal).toFixed(2)

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
          {order.map((item, index) => {
            return (
              <>
              <OrderTable item={item} index={index}/>
              </>
            )
          })}
          
        </table>
        <h3>Sum Total - ${sumTotal}</h3>
        <h2>Grand Total - ${grandTotal}</h2>
      </div>
  </>
  )
};

export default App;
