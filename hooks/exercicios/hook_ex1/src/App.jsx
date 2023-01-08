import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App"  onClick={() => setCount((count) => count + 1)}>
      Count is {count}
    </div>
    <button onClick={() =>  setCount(0)} > </button>
    </>
  )
}

export default App
