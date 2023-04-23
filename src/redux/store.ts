// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import ShoppingSlice from "./reducers/shoppingSlice";
import UserSlice from "./reducers/userSlice";
import { ThunkAction } from 'redux-thunk'

// export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export const store = configureStore({
  reducer: {
    user: UserSlice,
    shopping: ShoppingSlice
  },
});