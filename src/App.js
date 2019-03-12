import React, { useState, memo } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  const change = val => e => setCount(count + val)

  return (
    <div className="App">
      <h1>
        count <p>{count}</p>
      </h1>
      <button onClick={change(1)}>Increment</button>
      <button onClick={change(-1)}>Decrement</button>
    </div>
  )
}

export default memo(App)
