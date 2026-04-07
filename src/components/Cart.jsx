import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import cartStyle from "../styles/cart.style.jsx";
import { useDispatch , useSelector } from "react-redux";
import { handleProductDecreaseQty, handleProductIncreaseQty, setCartItems } from "../redux/reducers/cart/cartSlice.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { isLogin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log("cartItems:", cartItems, isLogin);
    
    useEffect(()=>{
            loadCart()
    },[])
    

  useEffect(() => {
    loadCart();
}, []);

const loadCart = async () => {
    try {
        const data = await AsyncStorage.getItem("cartItems");

        if (data) {
            const parsed = JSON.parse(data);
            dispatch(setCartItems(parsed)); 
        }
    } catch (error) {
        console.log("Error loading cart:", error);
    }
};

    return (
        <View style={cartStyle.container} >
            <FlatList
                numColumns={1}
                data={cartItems}
                renderItem={({ item }) =>
                    <View style={cartStyle.listContainer}>

                        <View style={cartStyle.listWrapper}>
                            <View>
                                <Image
                                    style={cartStyle.cardImg}
                                    source={{ uri: item?.image }}
                                />
                            </View>
                            <View style={cartStyle.cartItemDetails} >
                                <Text style={cartStyle.cartItemTextStyle}>{item?.title}</Text>
                                <Text style={cartStyle.cartItemTextStyle}>{`$ ${item?.price}`}</Text>
                                <Text style={cartStyle.cartItemTextStyle}>{item?.qty}</Text>
                            </View>
                            <View style={cartStyle.cartItemQuantityBtnWrapper} >
                                <MaterialIcons onPress={()=>dispatch(handleProductIncreaseQty(item.id))} name="add-box" size={30} color="blue" />
                                <MaterialDesignIcons onPress={()=>dispatch(handleProductDecreaseQty(item.id))} name="minus" size={30} color="black" />
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    );
}

export default Cart;


