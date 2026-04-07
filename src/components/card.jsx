import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Octicons from "@react-native-vector-icons/octicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import cardStyle from "../styles/card.style.jsx";

import { addToCart } from "../redux/reducers/cart/cartSlice.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardModal from "../modalScreen/Modal.jsx"


const Card = (props) => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { qty } = useSelector((state) => state.product);
    const { product, navigateProps } = props;

    const [toggle, setToggle] = useState(false);

    function handdleViewItem() {
        navigateProps.props.navigation.navigate("Product", { "product": product })
        console.log("inside Card", navigateProps, props);
    }


    async function handdleToCard() {
        try {
            setToggle(true);
        } catch (error) {
            console.log("error in setting the user in asyncStorage")
        }
    }

    return (
        <View style={cardStyle.container}>
            <TouchableOpacity onPress={handdleViewItem} style={cardStyle.cardImageWrapper} >
                <Image
                    style={cardStyle.cardImg}
                    source={{ uri: product?.image }}
                    />
                <View style={cardStyle.productTitleWrapper}>
                    <Text style={cardStyle.productTitle}>{product?.title}</Text>
                    <View style={cardStyle.ratingContainer}>
                        <Octicons name="star-fill" size={20} color="#f1d11c" />
                        <Text>{product?.rating?.rate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={cardStyle.cardImageContent} >
                <Text>{`$ ${product?.price}`}</Text>
                <TouchableOpacity>
                    <MaterialIcons onPress={handdleToCard} name="add-circle" size={30} color="#0f88ce" />
                </TouchableOpacity>
            </View>
            <>
            <CardModal toggle={toggle} setToggle={setToggle} user={user} product={product}/> 
            </>
        </View>
    )
}

export default Card; 