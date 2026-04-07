import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import orderSuccessStyle from "../styles/orderSuccess.style.jsx"
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
    const navigation = useNavigation();
    // useEffect(() => {
    //     handletimer();
    //     return (() => {
    //         clearInterval(intervalId);
    //     })
    // }, []);

    // const [time, setTime] = useState(5);
    // const [intervalId, setIntervalId] = useState(5);
    // function handletimer() {
    //     const countDown = setInterval(() => {
    //         if (time > 0) {
    //             setTime((prev) => (prev - 1));
    //         }
    //     }, 1000);
    //     setIntervalId(countDown);
    // }

    // if (time == 0) {
    //     clearInterval(intervalId)
    //     setTime(5),
    //     navigation.navigate("OrderStack", {
    //         screen: "Orders",
    //     });
    // }
 
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