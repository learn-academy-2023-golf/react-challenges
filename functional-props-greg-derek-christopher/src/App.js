import React, {useState} from 'react'
import MenuItem from './component/MenuItem'
import PriceTotal from './component/PriceTotal'
import './App.css'

const App = () => {
const [menu, setMenu] = useState([
  {name: "Lobster", ordered: false, price: "$30"},
  {name: "Shrimp", ordered: false, price: "$10"},
  {name: "Oyster", ordered: false, price: "$15"},
  {name: "Crab Legs", ordered: false, price: "$25"},
  {name: "Calamari", ordered: false, price: "$10"}
])

const [orderedItems, SetOrderedItems] = useState([]);
const orderItem = (selectedItem) => {
  console.log(selectedItem)
  menu[selectedItem].ordered = true
  setMenu([...menu])
}

const [priceTotal, setPriceTotal] = useState()



  return (
    <div>
    <>
    <h1>C.D.G. Restuarant</h1>
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
    <PriceTotal />
    </div>
  )
}





export default App
