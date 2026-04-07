import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const signUpStyles = StyleSheet.create(
    {
        container:
        {
            padding: 20,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width:Dimensions.get("screen").width,
            height:Dimensions.get("screen").height,
        },
        formWrapper:
        {
            padding: 20,
            width: Dimensions.get("screen").width - 150,
            backgroundColor: "#f1eded33",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            elevation:3,
        },
        inputText: {
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 10,
            margin:5,
            width:150,
        },
        loginBtnWrapper: {
            padding: 5,
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            height:80,
        },
        loginBtn:
        {
            backgroundColor: "#26b5f7ce",
            borderRadius: 25,
            fontSize: 20,
            padding:10,
            textAlign: "center",
            color:"white",
            width: Dimensions.get("screen").width - 210
        },
    });


export default signUpStyles;