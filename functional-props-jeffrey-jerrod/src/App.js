import React, { useState } from "react"
import FoodPrice from "./components/FoodPrice"

const App = () => {
  const [food, setFood] = useState([
    { name: "Peanut Butter", ordered: false, price: "$6.79" },
    { name: "Nuttela", ordered: false, price: "$3.19" },
    { name: "Strawberry Jam", ordered: false, price: "$5.29" },
    { name: "Grape Jelly", ordered: false, price: "$3.79" }
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
      {food.map((item, index) => {
        return (<FoodPrice
        item={item}
        orderItem={orderItem}
        index={index}
        key={index}
        />)
      })}
    </>
  )
}

export default App