import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'

const UnableBatch = () => {
  const [count, setCount] = useState(0)
  const onClick = () => {
    ReactDOM.unstable_batchedUpdates(() => {
      setCount(v => v + 1 )
      setCount(v => v + 1 )
    })
  }
  useEffect(() => {
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  })

  console.log('render called')
  return ( 
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>increse</button>
    </div>
  );
}
 
export default UnableBatch;