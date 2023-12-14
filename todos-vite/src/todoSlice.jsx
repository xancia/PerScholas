import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todosR',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            let newTodo = {
                text: action.payload,
                completed: false,
                id: crypto.randomUUID(),
              };
            state.push(newTodo)
        },
        deleteTodo: (state, action) => {
            // direct "mutating"
            let index = state.findIndex((todo) => todo.id === action.payload)
            state.splice(index, 1)

            // copying and setting new array
            // newTodos = state.filter((item) => item.id !== action.payload)
            // return newTodos
        },
        completeTodo: (state, action) => {
            // direct "mutating"
            let index = state.findIndex((todo) => todo.id === action.payload)
            state[index].completed = !state[index].completed

            //copying and setting new array
            let toggledItem = state.map((item) =>
                item.id === action.payload ? { ...item, completed: !item.completed } : item
                );
            return toggledItem
        }
    }
})

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer