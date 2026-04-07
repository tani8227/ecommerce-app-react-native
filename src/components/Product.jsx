import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native"
import Octicons from "@react-native-vector-icons/octicons"
import productStyle from "../styles/product.style.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducers/cart/cartSlice.js";
import { buyNow } from "../redux/reducers/order/orders.Slice.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


const Product = (props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { user } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart);
    const { orderItems } = useSelector((state) => state.order);
    const { product } = props.route.params


    async function handdleToCard() {
        try {
            const newCardItem = { ...user, ...product, qty: 1 };
            const updatedCartItems = [ ...cartItems, newCardItem ];
            console.log("inside product :", updatedCartItems);
            dispatch(addToCart(newCardItem));
            await AsyncStorage.setItem("cartItems", JSON.stringify(updatedCartItems));      
        } catch (error) {
            console.log("error in setting the cartItems in asyncStorage")
        }
    }


    async function handleOrder() {
        try {
            const newOrder = {
                ...user,
                ...product
            };

            const updatedOrders = [...orderItems, newOrder];
            dispatch(buyNow(newOrder));
            await AsyncStorage.setItem("orderItems", JSON.stringify(updatedOrders));
            navigation.navigate("OrderStack", {
                screen: "OrderSuccess",
            });
        } catch (error) {
            console.log("error in setting order in asyncStorage");
        }
    }


    return (
        <View style={productStyle.container}>
            <View style={productStyle.cardImageWrapper} >
                <View style={productStyle.ImageWrapper}>
                    <Image
                        style={productStyle.cardImg}
                        source={{ uri: product?.image }}
                    />
                </View>
            </View>
            <View style={productStyle.cardImageContent} >
                <View style={productStyle.productTitleWrapper}>
                    <Text style={productStyle.productTitle}>{product?.title}</Text>
                    <View style={productStyle.ratingContainer}>
                        <Octicons name="star-fill" size={25} color="#f1d11c" />
                        <Text>{product?.rating?.rate}</Text>
                    </View>
                </View>
                <View style={productStyle.productPriceWrapper}>
                    <Text>price</Text>
                    <Text style={[productStyle.textColor, productStyle.textSize]}>{`$ ${product?.price}`}</Text>
                </View>
            </View>
            <View style={productStyle.BtnWrapper}>
                <TouchableOpacity>
                    <Text onPress={handdleToCard} style={productStyle.btnText}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={handleOrder} style={productStyle.btnText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product;