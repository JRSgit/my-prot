import { useState } from 'react'
import Header from './components/header/Header'
import Homes from './pages/home/Homes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homes />

    </>

  )
}

export default App
