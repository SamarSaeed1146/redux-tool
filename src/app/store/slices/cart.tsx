import { createSlice } from '@reduxjs/toolkit'

interface CartState {
    name: string
    category: string
    qty: number
}

const initialState: CartState[] = [{name: "Glasses", category: "fox", qty: 1}];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {},
        deleteCart: (state, action) => {}
    }
})

export const { addCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer