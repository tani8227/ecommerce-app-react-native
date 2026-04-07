import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList, Image } from "react-native"
import Octicons from "@react-native-vector-icons/octicons"
import orderListStyles from "../styles/orderListStyles.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setOrderItems} from "../redux/reducers/order/orders.Slice.js"

const Orders = (props) => {

    const { orderItems } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        loadOrders();
    }, []);



    async function loadOrders() {
        try {
            const orders = await AsyncStorage.getItem("orderItems");
            console.log("orders:", orders)
            if (orders) {
                const parsed = JSON.parse(orders);
                dispatch(setOrderItems(parsed));
            }
        } catch (error) {
            console.log("Error loading cart:", error);
        }
    }

    if (orderItems && orderItems.length == 0) {

        return (
            <View style={orderListStyles.empltyOrderListWrapper}>
                <Text style={orderListStyles.empltyOrderListText}>No Product Found !!!</Text>
            </View>
        )
    }
    console.log("orderItems:", orderItems);

    return (
        <View style={orderListStyles.container} >
            <FlatList
                numColumns={1}
                data={orderItems}
                renderItem={({ item }) =>
                    <View style={orderListStyles.listContainer}>
                        <View style={orderListStyles.listWrapper}>
                            <View>
                                <Image
                                    style={orderListStyles.cardImg}
                                    source={{ uri: item?.image }}
                                />
                            </View>
                            <View style={orderListStyles.cartItemDetails} >
                                <Text style={orderListStyles.cartItemTextStyle}>{item?.title}</Text>
                                <Text style={orderListStyles.cartItemTextStyle}>
                                    <Octicons name="star-fill" size={20} color="#f1d11c" />
                                    {item?.rating?.rate}
                                </Text>
                                <Text style={orderListStyles.cartItemTextStyle}>{`$ ${item?.price}`}</Text>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    )
}

export default Orders;