import React, { useState } from 'react'
import { useTODO } from '../contexts'

function FormItems({todo}) {
    const[isEditable ,setIsEditable] =useState(false)
    const[todoMsg ,setTodoMsg] =  useState(todo.todo)

    const {updateTodo,toggleSwitch,delTodo } =useTODO()

    const edit = () =>{
        updateTodo(todo.id ,{...todo,todo: todo})
        setIsEditable(false)
    }
    const toggle = () => {
        toggleSwitch(todo.id)
    }
  return(
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
>
        <input type="checkbox" 
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggle}
        />
        <input type='text'
        className={`border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
        />
        <button 
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
            if(todo.completed) return
            if(isEditable) edit()
            else setIsEditable((prev) => !prev)
        } }>
        {isEditable ? "📁": "✏️"}
        </button>
        <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'

        onClick={() => delTodo(todo.id)}
        >❌</button>
        


    </div>
  )
}

export default FormItems