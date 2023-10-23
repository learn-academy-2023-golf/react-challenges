import React, {useState} from 'react'
import MenuItem from './components/MenuItem'

const App = () => {
  const [menu, setMenu] = useState([
    {name: "Cheese Burger", ordered: false, price: "5.99"},
    {name: "Loaded Fries", ordered: false, price: "3.99"},
    {name: "Big Time Water", ordered: false, price: "1.99"},
    {name: "Onion Rings", ordered: false, price: "3.99"},
    {name: "Waygu Burger", ordered: false, price: "15.99"}
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem)
    // find item by index using bracket notation in the menu array
    // access the ordered key
    // reassign the value of ordered to true
    menu[selectedItem].ordered = true
    // Spread operator makes a copy of menu with the update value and then we set state with the updated array
    setMenu([...menu])
  }

  return(
    <>
      <h1> Big Time Burgers </h1>
      <h2>Menu</h2>
      {menu.map((item, index) => {
        return( 
          <MenuItem 
            item={item} 
            orderItem={orderItem}
            index={index}
            key={index}
          />
        )
      })}
    </>
  )
}

export default App
