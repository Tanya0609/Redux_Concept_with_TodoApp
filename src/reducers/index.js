import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   todos,
//   visibilityFilter
// })

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

// Reducers specify how the application's state changes in response to actions sent to the store.
// For our todo app, we want to store two different things:
//    The currently selected visibility filter.
//    The actual list of todos.

// HANDLE ACTIONS:
// (previousState, action) => newState