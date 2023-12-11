/* eslint-disable no-case-declarations */
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      let item = {
        text: action.payload,
        completed: false,
        id: crypto.randomUUID(),
      };

      let newTodos = [...state, item];
      return newTodos;
    case "DELETE_TODO":
      let filteredTodo = state.filter((item) => item.id !== action.payload);
      return filteredTodo;
    case "COMPLETE_TOGGLE":
        let toggledItem = state.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item
        );
        return toggledItem
    default:
      return state;
  }
}
