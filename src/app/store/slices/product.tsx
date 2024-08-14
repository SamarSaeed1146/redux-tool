import { createSlice } from '@reduxjs/toolkit'

interface ProductState {
    name: string
    category: string
    qty: number
}

const initialState: ProductState[] = [{name: "Shoes", category: "Service", qty: 4}];

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {},
        deleteProduct: (state, action) => {}
    }
})

export const { addProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer