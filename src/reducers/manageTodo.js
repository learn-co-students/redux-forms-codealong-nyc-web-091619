export default function manageTodo(state = {
  todos: ["buy groceries", "watch netflix"],
}, action) {

  console.log("reducer received this action:", action);

  switch(action.type) {
    case "ADD_TODO":
      console.log("Todos:", [...state.todos, action.payload.todo])
      return {todos: [...state.todos, action.payload.todo]}
    default:
      return state
  }
}
