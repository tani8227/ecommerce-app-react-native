import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { useDispatch, useSelector, } from "react-redux";
import userProfileStyles from "./userProfileStyles.jsx";
import { getAuth, signOut } from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { userLogOut } from "../../redux/reducers/auth/authSlice.js"
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserProfile = () => {

    const { user, isLogin } = useSelector((state) => state.auth);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    async function handleLogOut() {
        try {
            const authInstance = getAuth();
            await signOut(authInstance);
            console.log("logged out successfully!!!");
            await AsyncStorage.removeItem("userId");
            dispatch(userLogOut());
            navigation.navigate("AuthStack", { screen: "Login" });
        } catch (error) {
            console.log("Logout error:", error);
        }
    }

    return (
        <View style={userProfileStyles.container}>
            <Text style={userProfileStyles.textStyle}>{`name : ${user?.name}`}</Text>
            <Text style={userProfileStyles.textStyle}>{`Email : ${user?.email}`}</Text>
            {isLogin && <View style={userProfileStyles.logOutBtnContainer}>
                <TouchableOpacity style={userProfileStyles.logOutBtnWrapper} onPress={handleLogOut} >
                    <Text style={userProfileStyles.logOutBtn} >Logout</Text>
                </TouchableOpacity>
            </View>}
        </View>
    )
}

export default UserProfile;