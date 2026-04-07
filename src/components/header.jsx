import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import headerStyle from "../styles/heade.style.jsx"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import userIMG from "../assets/kido1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../redux/reducers/product/productSlice.js";

const Header = ({ navigationProps, }) => {
    const { user, isLogin, error } = useSelector((state) => state.auth);
    const { inputSearchProduct } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);


    function handleSearch(input) {
        dispatch(searchProduct(input));
    }

    console.log("search product :", inputSearchProduct);
    return (
        <View style={headerStyle.headerContainer}>
            <View style={headerStyle.userImageContainer}>
                <View style={headerStyle.userImageContentWrapper}>
                    <Image
                        style={headerStyle.userImage}
                        source={userIMG}
                    />
                    {!isLogin && <Text onPress={() => navigationProps.navigation.navigate("Login")} style={headerStyle.loginBtn} >Login</Text>}
                    {isLogin && <View style={headerStyle.userDeatilsContainer}>
                        <Text style={headerStyle.greetingText}>welcome </Text>
                        <Text style={headerStyle.userName}>{user?.name}</Text>
                    </View>}
                </View>
            </View>
            <View style={headerStyle.notificationContainer}>
                {!show &&
                    <MaterialIcons onPress={() => setShow(true)} name="search" size={25} color="black" />
                }
                {show &&
                    <View style={headerStyle.searchInputWrapper}>
                        <TextInput onChangeText={(text) => handleSearch(text)} style={headerStyle.searchInput} placeholder="search here..." />
                    </View>
                }
                <MaterialDesignIcons name="bell" size={25} color="grey" />
            </View>
        </View>
    )
}

export default Header;