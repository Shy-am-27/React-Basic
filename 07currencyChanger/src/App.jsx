import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen flex  flexwrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:'url(https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg)'}}>
      
      <h1 className='bg-gray-500'>HELLO</h1>
    </div>
    </>
  )
}

export default App
