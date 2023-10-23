import './App.css'
import React, {useState} from 'react'
import MenuItem from './components/MenuItem'
import OrderedItem from './components/OrderedItem'
import imageHamburger from './assets/Hamburger.avif'
import imageHotdog from './assets/Hotdog.jpeg'
import imageSoda from './assets/Soda.png'

const App = () => {
  const salesTax = 0.0775
  const [totalPrice, setTotalPrice] = useState(0)
  const totalWithTax = (totalPrice*(1+salesTax)).toFixed(2)

  const [menu, setMenu] = useState([
    {name: "Hamburger", price: 5, imgSrc: imageHamburger},
    {name: "Hot Dog", price: 4, imgSrc: imageHotdog},
    {name: "Soda", price: 3, imgSrc: imageSoda}
    ])

  const [shoppingCart, setShoppingCart] = useState([])

  const addToOrder = (selectedItem) => {
    console.log(1)
    var foodName=menu[selectedItem].name 
    var foodPrice=menu[selectedItem].price
    var foodImageSrc=menu[selectedItem].imgSrc
    const newItem = <OrderedItem foodName={foodName} foodPrice={foodPrice} foodImageSrc={foodImageSrc} />

    setTotalPrice(totalPrice+menu[selectedItem].price)
    setShoppingCart([...shoppingCart, newItem])  
  }

  const clearShoppingCart = () => {
    setShoppingCart([])
    setTotalPrice(0)
  }

  return <>
  <div className='AppDiv'>
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
    <h2>Shopping Cart</h2>
    {shoppingCart}
    <p className='p1'>Total Price: ${totalPrice} </p>
    <p className='p2'>Total with Sales Tax: ${totalWithTax}</p>
    <p className='button'><button onClick={clearShoppingCart}>Clear Shopping Cart</button></p>
  </div>
  </>
}

export default App