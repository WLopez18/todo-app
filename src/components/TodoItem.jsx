import React from 'react'
import styles from './TodoItem.module.css'
import {BsCheckCircleFill, BsTrashFill} from 'react-icons/bs'

const TodoItem = (props) => {
    const {todo, completeTodo, removeTodo} = props;
  return (
    <div className={todo.completed ? 'todo-row completed' : 'todo-row'}>
      {todo.text}
      <div className={styles.iconContainer}>
        <BsCheckCircleFill onClick={() => completeTodo(todo.id)} className={styles.icon} />
        <BsTrashFill onClick={() => removeTodo(todo.id)} className={styles.icon} />
      </div>
    </div>
  )
}

export default TodoItem
