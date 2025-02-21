import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextProvider } from './contexts'
import { FormInput, FormItems } from './Components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(TODO) =>{
    setTodos((prev) => [{id: Date.now(),...TODO} , ...prev])
  }
  const updateTodo = (id,TODO) =>{
    setTodos((prev) => prev.map((prevTODO) => (prevTODO.id === TODO.id ? TODO : prevTODO)))
  }
  const delTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleSwitch = (id) =>{
    setTodos((prev) => prev.map((prevTODO) => prevTODO.id === id ?{...prevTODO, completed: !prevTODO.completed} :prevTODO))
  }

  useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"))
     if(todos && todos.length > 0)
      setTodos(todos)
  },[])
  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  
  return (
    <ContextProvider value={{todos, addTodo, updateTodo, delTodo, toggleSwitch}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <FormInput />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <FormItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ContextProvider>
  )
}

export default App
