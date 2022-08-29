import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Apod from './components/Apod/Apod'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Apod/>
    </div>
  )
}

export default App
