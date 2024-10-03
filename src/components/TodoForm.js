
import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value,setValue]=useState(" ")
  const handle = e => {
    e.preventDefault();
    addTodo(value);

    setValue(" ")
  }
  return (
    <div className='TodoForm '>
      <form onSubmit={handle}>
        <input type='text' className='todo-input'value={value} placeholder='whats todays plan?' onChange={(e) => setValue(e.target.value)} />
        <button className='todo-btn' type='submit'>add task</button>
      </form>
    </div>
  )
}

export default TodoForm
