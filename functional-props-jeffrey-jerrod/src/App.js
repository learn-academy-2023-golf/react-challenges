import React, { useState } from "react"
import FoodPrice from "./components/FoodPrice"

const App = () => {
  const [food, setFood] = useState([
    { name: "Peanut Butter", ordered: false, price: "$0.00" },
    { name: "Nuttela", ordered: false, price: "$0.00" },
    { name: "Strawberry Jam", ordered: false, price: "$0.00" },
    { name: "Grape Jelly", ordered: false, price: "$0.00" }
  ])

const orderItem = (selectedItem) => {
  console.log(selectedItem) 
  food[selectedItem].ordered = true
  setFood([...food])
}

  return (
    <>
      <h1>Food Items</h1>
      <div>Food Menu</div>
      {food.map((food, price, index) => {
        return (<FoodPrice
        food={food}
        price={price}
        orderItem={orderItem}
        index={index}
        key={index}
        />)
      })}
    </>
  )
}

export default App