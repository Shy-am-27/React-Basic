import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15;
  // const addValue = () => {
  //   counter= counter+1
  //   console.log(counter);
    
  // }

  const [counter,setCounter]= useState(0)
  const addValue= () => {
    //setCounter(counter+1) //To add one to everycount
    //to Add  multiple
    setCounter((precounter) =>precounter+1) 
    setCounter((precounter) => precounter+1)
    setCounter((precounter) => precounter+1)
    setCounter((precounter) => precounter+1)
  }
  const removeValue = () => {
    //setCounter(counter-1)
    setCounter((counter) =>counter-1) 
    setCounter((counter) => counter-1)
    setCounter((counter) => counter-1)
    setCounter((counter) => counter-1)
  }
  return (
    <>
      <h1>Hi Shyam</h1>,
      <h2>A simple counter App : {counter}</h2>
      <button
      onClick={addValue}
      >Increase</button>{" "}
      <button
      onClick={removeValue}
      >Decrease</button>
      <p>End: {counter}</p>
    </>
  )
}

export default App
