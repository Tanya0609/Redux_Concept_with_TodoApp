// Actions are plain JavaScript objects

/*
 * action creators
 */
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
//     OR
// function addTodo(text) {
//   return {
//     type: ADD_TODO,
//     text
//   }
// }
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Actions
//     are payloads of information that send data from your application to your store.
//     They are the only source of information for the store.
//     You send them to the store using store.dispatch().
//
//     Actions must have a type property that indicates the type of action being performed.
//
// to actually initiate a dispatch, pass the result to the dispatch() function:
// dispatch(addTodo(text))
// OR
// const boundAddTodo = text => dispatch(addTodo(text))
// boundAddTodo(text)