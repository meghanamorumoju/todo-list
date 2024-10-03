import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (

    <div className='Todo'>
             <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() =>   editTodo(task.id)}/>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)}/>

    </div>
  )
}

export default Todo
