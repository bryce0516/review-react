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
  
  console.log(number, diff, todos)
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
  
  const onToggle = useCallback((id) => {
    dispatch(toggleTodo(id))
  }, [dispatch])

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e, text) => {
    e.preventDefault()
    onCreate(text)
    setText('');
  }


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
        <TodoList todos={todos} onToggle={onToggle}/>
      </div>
    </div>

   );
}


const TodoItem = React.memo(function TodoItem({todo, onToggle}){
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  )
})

const TodoList = React.memo(function TodList({todos, onToggle}){
  console.log('todolist todos', todos)
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
      ))}
    </ul>
  )
})
 
export default Input;