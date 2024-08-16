import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product";
import cartSlice from "./slices/cart";
import { postApi } from "./slices/postApi";

export const store = configureStore({
  reducer: {
    // define state or data
    productArray: productSlice,
    cartArray: cartSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
