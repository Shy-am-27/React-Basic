import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remTodo } from '../features/TODO/todoSlice'
function Todo() {
    
    const todo = useSelector(state => state.todos)
    const dispatch =useDispatch()
    
  return (
    <>
    {todo.map((TODO)=> (
      <div className='flex mt-5 justify-between bg-gray-600 text-white px-5 py-3 font-bold font-mono' key={TODO.id}>{TODO.text}
      <button onClick={() => dispatch(remTodo(TODO.id))} className=' bg-red-500 rounded-lg py-2 px-3 '>DEL</button>
      </div>
    ))}
    </>
    
  )
}

export default Todo