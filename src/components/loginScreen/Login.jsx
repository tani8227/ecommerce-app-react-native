import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import loginStyles from "./login.Style.jsx";
import firebaseUserLogin from "../../redux/reducers/auth/authThunks/userLoginThunk.js";
import { userLogin } from "../../redux/reducers/auth/authSlice.js";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import clickHereStyles from "../../styles/clickhere.style.jsx";



const SignIn = (props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        })

    function handleChange(name, value) {
        setUser((prev) => (
            {
                ...prev,
                [name]: value
            }));
    }


    async function handleLogin() {
        try {
            console.log("inside handle login :", user);
            const resultAction = await dispatch(firebaseUserLogin(user)).unwrap();
            console.log("Login Success:", resultAction);
            await AsyncStorage.setItem("userId", resultAction?.uid);
            navigation.navigate("MainTab", {
                screen: "HomeStack",
                params: {
                    screen: "Home",
                },
            });
        } catch (error) {
            console.log("Login error:", error);
        }
    }

    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.formWrapper}>
                <TextInput onChangeText={(text) => handleChange("email", text)} placeholder="Enter email" style={loginStyles.inputText} />
                <TextInput onChangeText={(text) => handleChange("password", text)} placeholder="Enter password" style={loginStyles.inputText} />
                <TouchableOpacity style={loginStyles.loginBtnWrapper} >
                    <Text style={loginStyles.loginBtn} onPress={handleLogin} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginStyles.loginBtnWrapper} >
                    <Text style={clickHereStyles.clickHere} onPress={() => navigation.navigate("HomeStack", { screen: "SignUp" })} >Click here to Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default SignIn;