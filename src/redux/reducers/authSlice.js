import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({

  name: 'auth',
  initialState,

  reducers: {
    login: (state, action) => {
      console.log("gelen data",action.payload)
      return {
        ...state,
          user:action.payload,
          isAuthenticated:true
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// console.log('initalstate',initialState)

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
