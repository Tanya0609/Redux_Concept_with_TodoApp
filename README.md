Basics:
https://redux.js.org/basics/example-todo-list
Advance:
https://redux.js.org/advanced

Definitions
======================
store(center)/index.js: which is <Prodiver>, magically make the store available to all container components in the    
                        application without passing it explicitly


components: objects/presentation components
          ^
          |
          |const <container_name> = connect(){ //connect: to hook up presentation components to Redux by creating some containers
          |  mapStateToProps,                  //transform Redux state to component prop
          |  mapDispatchToProps                //make global action functions into component prop
          |}( <component_name> )
          |
          |export default <container_name>
          |
containers: to change data by calling actions(global functions) and inject to prop of presentation components to display;
            also has other component: addTodo mix of both.
    /\
    ||
    || "container" calls "actions" to update/change data for "components"
    ||

actions(interface)
        ^   
        |
        |
reducers(implementation)
