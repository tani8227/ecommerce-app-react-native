import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    orderItems: []
}

const orderSlice = createSlice(
    {
        name: "order",
        initialState,
        reducers:
        {
            buyNow: (state, action) => {
                console.log("order item :", action.payload)
               state.orderItems.push(action.payload);
            },
            setOrderItems: (state, action) => {
                state.orderItems=action.payload;
            }
        }
    });

export const { buyNow, setOrderItems } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;