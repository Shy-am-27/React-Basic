import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-600 rounded-md p-3'>Hi Shyam</h1>
    <Card username ="shyam" imgs="https://picsum.photos/536/354"/>
    <Card post="Enginner"/>
    <Card username ="sujin"/>
    </>
  )
}

export default App
