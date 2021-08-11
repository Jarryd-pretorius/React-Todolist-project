import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const loginAdapter = createEntityAdapter();
export const loginSelectors = loginAdapter.getSelectors((state) => state.users )

const userSlice = createSlice({
    name: "users",
    initialState: loginAdapter.getInitialState(),
    
    reducers: {
            addUser: loginAdapter.addOne,
            }
    
});

export const {addUser} = userSlice.actions
export default userSlice.reducer