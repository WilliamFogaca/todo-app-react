import { combineReducers } from 'redux'
import todoReducer from '../components/todoReducer'

const rootReducers = combineReducers({
  todo: todoReducer
})

export default rootReducers