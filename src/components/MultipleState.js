import { useState } from "react";

const MultipleState = () => {
  const [state, setState] = useState({name:'', age:0})
  const eventClick = () => {
    setState({...state, name:'john', age:15})
  }
  return ( 
    <div>
      <p>name is {state.name}</p>
      <p>age is {state.age}</p>
      <button onClick={eventClick}>change info</button>
    </div>
   );
}
 
export default MultipleState;