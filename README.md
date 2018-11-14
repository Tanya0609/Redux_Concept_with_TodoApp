# Redux Concept with Todo App

## Summary
A simple Todo app implementation using the Redux framework. This is a project to understand how the Redux app functions, and how one can build an app with it.

## Redux Resources and Definitions:

## Resources
Basic concepts:
https://redux.js.org/basics/example-todo-list

Advanced concepts:
https://redux.js.org/advanced

## Definitions

### Store
Entry point file has store variable. This is a Provider tag type, and it magically makesthe store available to all container components in the pplication without passing it explicitly

### Components
Objects/presentation components
const <container_name> = connect(){   //connect: to hook up presentation components to Redux by creating some containers
  mapStateToProps,                    //transform Redux state to component prop
  mapDispatchToProps                 //make global action functions into component prop
}( <component_name> )

export default <container_name>

### Containers
To change data by calling actions (which are global functions) and inject to prop of presentation components to display. It also has other component: addTodo mix of both. In other words, "container" calls "actions" to update/change data for "components. "actions" are the interface, while "reduces" are the implementation
