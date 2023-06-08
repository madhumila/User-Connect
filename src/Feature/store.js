import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Feature/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
})