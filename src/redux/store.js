import { configureStore }from "@reduxjs/toolkit"
import counterReducer from './counter'
import inputReducer from './input'
export default configureStore({
  reducer:{
    counter: counterReducer,
    input: inputReducer
  }
}) 