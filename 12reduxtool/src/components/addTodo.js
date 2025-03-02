import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/TODO/todoSlice'
function AddTodo() {
    const[input,setInput] = useState('')
    const dispatch  = useDispatch()

    const todohandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div className='flex justify-center'>
    <form onSubmit={todohandler} className='space-x-3 mt-6 '>
        <input type='text' 
        className='bg-gray-800 border rounded border-gray-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Write a todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        />
        <button
        type='submit'
        className='text-white bg-indigo-500 border-0 px-6 py-2 focus:outline-none'
        >SUBMIT</button>

        </form>
    </div>
    
  )
}

export default AddTodo