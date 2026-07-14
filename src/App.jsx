import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="font-sans">Anthropic Sans</p>
      <p className="font-human">Virgil</p>
    </>
  )
}

export default App
