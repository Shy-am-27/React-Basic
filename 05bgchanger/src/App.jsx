import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive') //If we dont use any value in the setacolor we use this olive

  return (
    <>
      <h1 className='bg-black text-white text-center py-3 font-bold' >BACKGROUND CHANGER PROJECT</h1>

      <div className='flex h-screen justify-around items-center ' style={{ backgroundColor: color }}> {/* viewport of the project */}
        <button onClick={() => setColor('red')} className='bg-red-500 rounded-lg p-4 font-bold'  >RED</button>
        <button onClick={() => setColor('green')} className='bg-green-500 rounded-lg p-4 font-bold ' >GREEN</button>
        <button onClick={() => setColor('blue')} className='bg-blue-500 rounded-lg p-4 font-bold ' >BLUE</button>
        <button onClick={() => setColor('orange')} className='bg-orange-500 rounded-lg p-4 font-bold'  >ORANGE</button>
        <button onClick={() => setColor('violet')} className='bg-violet-300 rounded-lg p-4 font-bold ' >VOILET</button>
        <button onClick={() => setColor('pink')} className='bg-pink-500 rounded-lg p-4 font-bold ' >PINK</button>
        <button onClick={() => setColor('black')} className='bg-black rounded-lg p-4 font-bold text-white ' >BLACK</button>
        <button onClick={() => setColor('gray')} className='bg-gray-700 rounded-lg p-4 font-bold text-white' >GRAY</button>


      </div>

    </>
  )
}

export default App
