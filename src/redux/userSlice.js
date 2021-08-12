import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

// export const loginAdapter = createEntityAdapter();
// export const loginSelectors = loginAdapter.getSelectors((state) => state.users )

const userSlice = createSlice({
    name: "users",
    initialState: {
        userName: "",
        password: "",
        theme: "light"
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
            }
        },
    
});

export const {addUser, modifiyUser, changeTheme, changeThemeLight, changeThemeDark} = userSlice.actions
export default userSlice.reducer