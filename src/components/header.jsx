import React from "react";
import { View, Text, Image } from "react-native";
import headerStyle from "../styles/heade.style.jsx"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import userIMG from "../assets/kido1.jpg";
import { useSelector } from "react-redux";

const Header = (props) => {
    const { user, isLogin, error } = useSelector((state) => state.auth);
    return (
        <View style={headerStyle.headerContainer}>
            <View style={headerStyle.userImageContainer}>
                <View style={headerStyle.userImageContentWrapper}>
                    <Image
                        style={headerStyle.userImage}
                        source={userIMG}
                    />
                    {!isLogin && <Text onPress={() => props.navigationProps.navigation.navigate("Login")} style={headerStyle.loginBtn} >Login</Text>}
                    {isLogin && <View style={headerStyle.userDeatilsContainer}>
                        <Text style={headerStyle.greetingText}>welcome </Text>
                        <Text style={headerStyle.userName}>{user?.name}</Text>
                    </View>}
                </View>
            </View>
            <View style={headerStyle.notificationContainer}>
                <MaterialIcons name="search" size={25} color="black" />
                <MaterialDesignIcons name="bell" size={25} color="grey" />
            </View>
        </View>
    )
}

export default Header;