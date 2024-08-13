import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addCart: (state, action) => {},
        deleteCart: (state, action) => {}
    }
})

export const { addCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer