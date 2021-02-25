import { useRef, useState, useEffect, useCallback } from "react";

const INITIAL_TEXT = 'hello'
const UseRef1 = () => {
  const [text, setText] = useState(INITIAL_TEXT)
  const [showText, setShowText] = useState(true)
  const inputRef = useRef();
  const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT),[])
  useEffect(() => {
    inputRef.current.focus()
  },[])
  return ( 
    <div>
      <InputAndSave inputRef={inputRef}/>
      {showText && (
        <input 
          type="text"
          ref={setInitialText}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>turnon/turnoff</button>
      {/* <Button ref={buttonRef} /> */}
    </div>
   ); 
}

function InputAndSave( {inputRef} ){
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button>save</button>
    </div>
  )
}


// const Button = React.forwardRef(function ({onClick}, ref) {
//   return (
//     <button onClick={onClick} ref={ref}>
//       save
//     </button>
//   )
// })
 
export default UseRef1;

