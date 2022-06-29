import React, { useState } from 'react'

export default function Click() {
  const [count, setCount] = useState(1);

  const increaseCount = (increaseAmount) => setCount(count + increaseAmount)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{
        increaseCount(3)
      }}> CLick Me </button>
    </div>
  )
}
