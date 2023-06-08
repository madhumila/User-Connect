import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isAuthenticated: false,
  accessToken: ""
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
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer