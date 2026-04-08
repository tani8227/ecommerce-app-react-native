import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import signUpStyles from "./signUp.Style.jsx";
import { userLogin } from "../../redux/reducers/auth/authSlice.js";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseUserSignUp from "../../redux/reducers/auth/authThunks/userSignUpThunk.js";
import { useNavigation } from "@react-navigation/native";
import clickHereStyles from "../../styles/clickhere.style.jsx";

const SignUp = (props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [user, setUser] = useState(
        {
            name: "",
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

    async function handleSignUp() {
        try {
            console.log("user:", user)
            const resultAction = await dispatch(firebaseUserSignUp(user)).unwrap();
            console.log("Signup Success:", resultAction);

            props.navigation.navigate("HomeStack",
                {
                    screen: "Login"
                });

        } catch (error) {
            console.log("Signup error:", error);
        }
    }

    return (
        <View style={signUpStyles.container}>
            <View style={signUpStyles.formWrapper}>
                <TextInput onChangeText={(text) => handleChange("name", text)} placeholder="Enter name" style={signUpStyles.inputText} />
                <TextInput onChangeText={(text) => handleChange("email", text)} placeholder="Enter email" style={signUpStyles.inputText} />
                <TextInput onChangeText={(text) => handleChange("password", text)} placeholder="Enter password" style={signUpStyles.inputText} />
                <TouchableOpacity style={signUpStyles.loginBtnWrapper} >
                    <Text style={signUpStyles.loginBtn} onPress={handleSignUp} >Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={signUpStyles.loginBtnWrapper} >
                    <Text style={clickHereStyles.clickHere} onPress={()=>navigation.navigate("HomeStack", { screen: "Login" })} >Click here to Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default SignUp;