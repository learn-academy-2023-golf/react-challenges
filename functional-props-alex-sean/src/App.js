import React, {useState} from 'react'
import MenuItem from './components/MenuItem'

const App = () => {
  const salesTax = 0.0775
  const [totalPrice, setTotalPrice] = useState(0)
  const totalWithTax = totalPrice*(1+salesTax)

  const [menu, setMenu] = useState([
    {name: "Hamburger", price: 5},
    {name: "Hot Dog", price: 4},
    {name: "Soda", price: 3}
    ])

  const [orderedItems, setOrderedItems] = useState([])

  const addToOrder = (selectedItem, index) => {
    console.log(1)
    var foodName={selectedItem.name}
    const newItem = 1

    setTotalPrice(totalPrice+selectedItem.price)
    setOrderedItems([...orderedItems, newItem])  
  }

  return <>
  <div>
    <h1>Menu</h1>
    {menu.map((foodItem, index) => {
      return <MenuItem
        foodItem={foodItem}
        index={index}
        addToOrder={addToOrder}
        key={index}
      />
    })}
    <br></br>
    <h2>Ordered Items</h2>
    {orderedItems}
    <p>Total Price: ${totalPrice}</p>
    <p>Total with Sales Tax: ${totalWithTax}</p>
  </div>
  </>
}

export default App