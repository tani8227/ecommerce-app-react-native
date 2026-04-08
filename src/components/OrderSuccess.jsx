import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import orderSuccessStyle from "../styles/orderSuccess.style.jsx"
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
    const navigation = useNavigation();
    const { orderItems } = useSelector((state)=>state.order);
    console.log(orderItems)

    return (
        <View style={orderSuccessStyle.container} >
            <Text style={orderSuccessStyle.textStyle} >Ordered Succesfully !!!</Text>
             <TouchableOpacity onPress={()=>(navigation.navigate("OrderStack",{screen:"Orders"}))}>
            <Text  style={orderSuccessStyle.timerStyle} >Go To Orders</Text>
             </TouchableOpacity>
        </View>)
}


export default OrderSuccess;