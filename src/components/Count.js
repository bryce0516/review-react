import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from '../redux/counter'
const Count = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count)
  // const [count, setCount] = useState(0)
  const incresement = () => {
    dispatch(increment())
    // setCount(count + 1)
  }
  const decresement = () => {
    dispatch(decrement())
    // setCount(count - 1) 
  }
  const incresementByMount = () => {
    dispatch(incrementByAmount(33))
  }

  return (  
    <div>
      <h1>this is count</h1>
      <p>the count is {count}</p>
      <button onClick={incresement} style={{height:20}}>increment</button>
      <button onClick={decresement} style={{height:20}}>decrement</button>
      <button onClick={incresementByMount} style={{height:20}}>incrementByAmount</button>
    </div>
  );
}
 
export default Count;