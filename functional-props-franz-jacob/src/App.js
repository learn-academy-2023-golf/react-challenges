import React, {useState} from 'react'
import MenuItem from './components/MenuItem'

const App =  () => {
  const [menu, setMenu] = useState([
    { name: "Bacon", ordered: false, price: 5},
    { name: "Eggs", ordered: false, price: 3},
    { name: "Hash Brown", ordered: false, price: 2},
    { name: "Sausage", ordered: false, price: 2.50}
  ])
  

  const orderItem = (selectedItem) => {
    console.log(selectedItem)

    menu[selectedItem].ordered = true

    setMenu([...menu])
  }
  
    
  

  return(
    <>
      <h1> Breakfast Food</h1>
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
