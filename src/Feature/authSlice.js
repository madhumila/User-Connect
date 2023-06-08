import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isAuthenticated: false,
  accessToken: "",
  users:[]
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = action.payload.user? true : false;
        state.accessToken = action.payload.accessToken
    },
    getUsers:(state,action)=>{
      state.users = action.payload;
    },
    updateUser:(state,action)=>{
      state.user=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { login,getUsers,updateUser } = authSlice.actions
export default authSlice.reducer