import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setpassword] = useState('');
  const passRefernce = useRef(null)

  const generatePass = useCallback(() =>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"

    for(let i=0;i<length;i++){
      const chare = Math.floor(Math.random()*str.length+1)
      pass+= str.charAt(chare)

    }
    setpassword(pass)
  },[numberAllowed,charAllowed,length])
  useEffect(()=>{
      generatePass()
  },[numberAllowed,charAllowed,length])
  const copyTheItems = () => {
    window.navigator.clipboard.writeText(password) //writetext means writing the value in your keyboard
    passRefernce.current.select();
    
  }

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'> {/* Main DIV for holding all elements*/}
      <h1 className='text-white text-center my-4'
      >PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> {/* for input box*/}
        <input 
        type="text" 
        value={password}
        className='outline-none w-full px-2 py-2'
        placeholder='password'
        readOnly
        ref={passRefernce}
        name="" 
        id="" 
        />
        <button className='outline-none bg-blue-300 text-white px-3'
        onClick={copyTheItems}
        >COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'> {/* for range,checkbox*/}
        <div className='flex items-center gap-x-1'> {/* for length range*/}
          <input 
          type="range" 
          min={2}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id="" />
          <label htmlFor="length">Length: {length}</label>
        </div>
        

        <div className='flex items-centergap-x-1'> {/* for number checkbox*/}
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={()=> {
            setNumberAllowed((prev)=>!prev)
          }}
          name="" 
          id="" />
          <label htmlFor="numbersAllowded">Numbers</label>
        </div>

        <div> {/* for char checkbox*/}
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=> {
            setCharAllowed((prev)=>!prev)
          }}
          name="" 
          id="" />
          <label htmlFor="charAllowded">Character </label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
