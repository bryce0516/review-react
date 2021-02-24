import React, {useState} from 'react'
const Count = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1) 
  }
  return (  
    <div>
      <h1>this is count</h1>
      <p>the count is {count}</p>
      <button onClick={increment} style={{height:20}}>increment</button>
      <button onClick={decrement} style={{height:20}}>decrement</button>
    </div>
  );
}
 
export default Count;