import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/product/productSlice.js";
import authReducer from "../reducers/auth/authSlice.js";
import cartReducer from "../reducers/cart/cartSlice.js"
import orderReducer from "../reducers/order/orders.Slice.js";


const store = configureStore(
    {
        reducer:
        {
            product: productReducer,
            auth: authReducer,
            cart:cartReducer,
            order:orderReducer,
        }
    });

export default store;