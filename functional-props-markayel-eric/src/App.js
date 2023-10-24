// import {useState} from "react"
// import Hairstyle from "./components/Hairstyle"


// const App = () => {

// const [foodItems, setfoodItems] = useState([
//  {name: "caramel apple", price: 3, order: false},
//  {name: "nachos", price: 5, order: false},
//  {name: "pizza", price: 5, order: false},

// ]
// )
// const orderFood = (food) => {
//  console.log(food)
// console.log(foodItems[food])
// console.log(foodItems[food].order)
// foodItems[food].order = true
// setfoodItems([...foodItems])
// }

// return (
// <>
// <h1> Food list</h1>
// {foodItems.map((item, index) => 
// <div key={index}>
// <h2>{item.name}</h2>
// <p>Price: ${item.price}</p>
// <button onClick={() => orderFood(index)}>Order me!</button>


// // </div>

// )}
// <div>
// {foodItems.filter(item => item.order === true).map((item, index) => <div key={index}>{item.name} ${item.price}</div>)}
// </div>
// </>
 
// )
// }


// const App = () => {
//   const[texMex, settexMex]= useState("rice")
// const changeBeans = () => {
//   settexMex("beans")
// }
// return (
//   <>
//   <p>Tex Mex</p>
//   <h1>{texMex}</h1>
//   <button onClick={changeBeans}>Beans!</button>
//   </>
// )
// }


// const App = () => {
//   const[pets, setpets] = useState([
//     {dog: "drako"},
//     {dog: "adamar"},
//   ])

// const changepups = (index) => {
//   console.log(index)
// pets[index].dog= "pizza"
// setpets([...pets])


//   // setpets("pups")
// }  
//   return (
// <div>
// <h1>{pets.map((pet, index) => <div index={index}>
//   {pet.dog}
//   <button onClick={() => changepups(index)}>Puppy</button>
//   </div>)}</h1>

// </div>

//   )


// }

// const App = () => {
//   const[sodas, setsodas] = useState([
//     {soda: "coca cola"},
//     {soda: "sprite"},
//     {soda: "fanta"},
   
//   ])
//   const changesoda = (index)=>{
//     console.log(index)
//     sodas[index].soda="eww"
//     setsodas([...sodas])
//   }
//   return (
//     <>
//     <div>
// <h1>{sodas.map((soda, index) => <div key={index} index={index}>
//   {soda.soda}
//   <button onClick={() => changesoda(index)}> Pick me.</button>
// </div>)} </h1>

//     </div>
//     </>
//   )
// }

const App = () => {
  const[hairStyles, sethairStyles] = useState([
    {styles: "braids", doYouLikeIt: false},
    {styles: "afro", doYouLikeIt: false},
    {styles: "ponytail", doYouLikeIt: false}
  ])
  const changehairStyles = (index)=> {
    console.log(index)
    hairStyles[index].styles="WOW"
    sethairStyles([...hairStyles])
  }
  const keepHairStyles = (index)=> {
    console.log(index)
    hairStyles[index].doYouLikeIt= true
    sethairStyles([...hairStyles])
  }
  return (
    <>
    <div>
      
      {hairStyles.map((hair, index) => <div key={index}
      index={index}>
     <Hairstyle index={index} hair={hair} changehairStyles={changehairStyles}
     keepHairStyles={keepHairStyles}/>
      </div>)}
    </div>
    
    </>
  
  )
}

// const App = () => {
// const [flowers, setflowers] = useState([
//   {typeFlower: "sunflowers", price: 1},
//   {typeFlower: "rose", price: 3},
//   {typeFlower: "daisy", price: 2},
// ])

// const [showTotal, setshowTotal] = useState(false)
// const totalPrice =(<p>{flowers[0].price + flowers[1].price + flowers[2].price}</p>)
// const showTotalPrice = () => {
//   setshowTotal(true)
// }

// return(
//   <> 
//  {showTotal === true && <p>{totalPrice}</p>}
//   <button onClick={showTotalPrice}>add me.</button>
//   </>
// )
// }
export default App