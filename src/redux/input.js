



let nextId = 1; 




const INCRESE = 'INCRESE'
const DECRESE = 'DECRESE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'
const SET_DIFF = 'SET_DIFF'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

export const increse = () => {
  return {
    type: INCRESE
  }
}

export const decrese = () => {
  return {
    type: DECRESE
  }
}

export const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    text
  }
}

export const addToList = (item) =>  {
  return {
    type: ADD_TO_LIST,
    item
  }
}

export const setDiff = (diff) => {
  return {
    type: SET_DIFF,
    diff
  }
}

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    todo:{
      id: nextId++,
      text,
      done: false
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    todo:{
      id
    }
  }
}


const initialState = {
  counter: 0,
  text: '',
  list: [],
  diff: 1,
  todo: []
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCRESE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECRESE:
      return {
        ...state,
        counter: state.counter -1
      }  
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.todo]
      }

    case TOGGLE_TODO:
      return {...state}
      // return state.todo.map(
      //   res => res.id === action.todo.id ?
      //   {...state.todo} : {...state.todo}
      // )
    default:
      return state
  }
}

export default reducer