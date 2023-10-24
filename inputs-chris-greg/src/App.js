import { useState } from "react"
import ListeningBot from './Components/ListeningBot'

const App = () => {

  const [name, setName] = useState("")

const handleChange = (e) => {
  setName(e.target.value)
}

  return (
  <>
    <h1>Greeter App</h1> 
    <input
      type="text"
      onChange={handleChange}
      value={name}
    />
    <ListeningBot name={name} />
    </>
  );
}

export default App;
