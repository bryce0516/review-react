import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [ todoList, setTodoList ] = useState([])
  const [ currentId, setCurrentId] = useState(1)
  const [ desc, setDesc ] = useState('')
  const [ showOdd, setShowOdd] = useState(false)

  function onAdd() {
    const todo = { id:currentId, desc}
    setCurrentId(currentId + 1)
    setTodoList([...todoList, todo])
  } 
  function onDelete(e){
    const id = Number(e.target.dataset.id)
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
  }
  function onSaveToServer(){

  }

  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {todoList.filter((_, index) => showOdd ? index%2 === 0: true).map(todo => (
          <li key={todo.id}>
            <span>{todo.desc}</span>
            <button data-id={todo.id} onClick={onDelete}>
              delete
            </button>
          </li>
        ))}
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={onAdd}>add</button>
      <button onClick={() => setShowOdd(!showOdd)}>show odd</button>
      <button onClick={onSaveToServer}>onSaveToServer</button>
    </div>
  );
}



export default App;
