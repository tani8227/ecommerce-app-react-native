import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const headerStyle = StyleSheet.create(
    {
        headerContainer:
        {
            width: Dimensions.get("screen").width,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            backgroundColor:"#eeeeee",
        },
        userImageContainer:
        {
            width: Dimensions.get("screen").width / 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
        },
        userImageContentWrapper:
        {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
        },
        userDeatilsContainer:
        {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
        userImage:
        {
            maxWidth: 50,
            maxHeight: 50,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "grey",
        },
        greetingText:
        {
            fontSize: 16,
            fontWeight: 600,
            color: "#a7a4a4",
            padding: 0,
        },
        userName:
        {
            fontSize: 18,
            fontWeight: 500,
            color: "#363434de",
            padding: 0,
        },
        notificationContainer:
        {
            width: 150,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
            padding: 1,
        },
        loginBtn:
        {
            backgroundColor:"orange",
            fontSize:14,
            padding:6,
            borderRadius:10,

        },
        searchInputWrapper:
        {
            width:Dimensions.get("screen").width-190,
        },
        searchInput:
        {
            borderWidth:1.5,
            borderColor:"grey",
            borderRadius:50,
            padding:10,
        }
    })

export default headerStyle;