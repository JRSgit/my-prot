import { useState } from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />

    </>

  )
}

export default App
