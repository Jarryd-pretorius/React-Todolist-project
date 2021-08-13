import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

// export const loginAdapter = createEntityAdapter();
// export const loginSelectors = loginAdapter.getSelectors((state) => state.users )

const userSlice = createSlice({
    name: "users",
    initialState: {
        userName: "Wayne",
        password: "",
        theme: "light",
        todos: []
    },
    
    reducers: {
            addUser: (state, action) => {
                state.userName = action.payload.name;
                state.password = action.payload.password;           
            
            },
            modifiyUser: (state, action) => {
                state.userName = action.payload.user;
            },
            changeThemeDark: (state, action) => {
                state.theme = action.payload.themeDark;
            },
            changeThemeLight: (state, action) => {
                state.theme = action.payload.themeLight;
            },
            addTodoList: (state, action) => {
                state.todos = action.payload.todolist;
            }

        },
    
});

export const {addUser, modifiyUser, changeTheme, changeThemeLight, changeThemeDark, addTodoList} = userSlice.actions
export default userSlice.reducer