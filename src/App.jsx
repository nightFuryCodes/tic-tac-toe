import { useState } from 'react'
import './App.css'
import TicTacToe from './Components/TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TicTacToe size = {4} />
    </>
  )
}

export default App
