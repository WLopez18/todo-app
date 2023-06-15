import React, { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (ev) => {
        props.addTodo(input);
        ev.preventDefault();
        setInput('');
    };
  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
        <input
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        className={styles.todoInput}
        placeholder='Add a todo'/>
        <button className={styles.todoBtn}>Add todo</button>
    </form>
  )
}

export default TodoForm
