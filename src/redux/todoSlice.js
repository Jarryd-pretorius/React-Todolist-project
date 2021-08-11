import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);


const todoSlice = createSlice({
    name: "todos",
    initialState: todoAdapter.getInitialState(),
    reducers: {
        addTodo: todoAdapter.addOne,
        addTodos: todoAdapter.addMany,
        deleteTodo: todoAdapter.removeOne,
        markCompleted: todoAdapter.updateOne
        }
    
});

export const { addTodo, addTodos, deleteTodo, markCompleted
} = todoSlice.actions
export default todoSlice.reducer