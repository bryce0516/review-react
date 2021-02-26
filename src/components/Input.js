import React, { useReducer, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increse, decrese, setDiff, toggleTodo,addTodo} from "../redux/input"


const Input = () => {
  const [text, setText] = useState('')
  const { number, diff,  todos } = useSelector(state => ({
    number: state.input.counter,
    diff: state.input.diff,
    todos: state.input.todo
  }))
  
  const dispatch = useDispatch()
  const onIncrese = () => {
    dispatch(increse())
  }
  const onDecrese = () => {
    dispatch(decrese())
  }
  const onSetDiff = (e) => {
    dispatch(setDiff(parseInt(e.target.value, 10)))
  }  

  const onCreate = (text) => {
    dispatch(addTodo(text))
  }
  
  const onToggle = (id) => {
    dispatch(toggleTodo(id))
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onCreate(text)
    setText('');
  }
  console.log('todos', todos)

  return ( 
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onSetDiff}/>
        <button onClick={onIncrese}>+</button>
        <button onClick={onDecrese}>-</button>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input 
            value={text}
            onChange={onChange}
          />
          <button type="submit">등록</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li 
              key={todo.id}
              onClick={() =>(onToggle(todo.id))}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>

   );
}



const TodoList = (todos, onToggle) => {
  return (
    <ul>
      {/* {todos.map((todo) => (
        <li
         key={todo.id}
         style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
         onClick={(todo) => onToggle(todo.id)}
        >
          {todo.text}
        </li>
      ))} */}
    </ul>
  )
}
 
export default Input;