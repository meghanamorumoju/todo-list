
import React, { useState } from 'react';

const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue]=useState(" ")
  const handle = e => {
    e.preventDefault();
    editTodo(value,task.id);

    setValue("")
  }
  return (
    <div className='TodoForm '>
      <form onSubmit={handle}>
        <input type='text' className='todo-input'value={value} placeholder='modify your task' onChange={(e) => setValue(e.target.value)} />
        <button className='todo-btn' type='submit'>update task</button>
      </form>
    </div>
  )
}

export default EditTodoForm
