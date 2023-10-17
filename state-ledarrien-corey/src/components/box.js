import React, { useState } from "react"

const Box = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div onClick={handleClick} className="counter-box">
      Count {count}
    </div>
  )
}

export default Box