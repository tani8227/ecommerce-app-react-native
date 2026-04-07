import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    cartItems: [],
    qty: 1,
}

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers:
        {
            setCartItems: (state, action) => {
                state.cartItems = action.payload || [];
            },
            addToCart: (state, action) => {
                state.cartItems.push(action.payload);
                state.qty = 1;
            },
            handleIncreaseQty: (state, action) => {
                console.log(action.payload);
                state.qty += action.payload;
            },
            handleDecreaseQty: (state, action) => {
                if (state.qty > 1) {
                    state.qty -= action.payload;
                }
            },
            handleProductIncreaseQty: (state, action) => {
                console.log(action.payload);
                state.cartItems.forEach((item) => {
                    if (item.id == action.payload) {
                        item.qty += 1;
                    }
                });
            },
            handleProductDecreaseQty: (state, action) => {
                const item = state.cartItems.find(
                    (prd) => prd.id === action.payload
                )
                if (item && item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(
                        (ele) => ele.id !== action.payload
                    );
                }
            },

        }
    }
);

export const {setCartItems, addToCart, handleDecreaseQty, handleIncreaseQty, handleProductDecreaseQty, handleProductIncreaseQty } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;