import React from "react";
import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";

const homeStyle = StyleSheet.create(
    {
        container:
        {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height - 122,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
        },
        headerSection:
        {
            width: Dimensions.get("screen").width,
            height: 80,

        },
        corousolSection:
        {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height - 620,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
        },

        inputSearchProductContainer: {
            width: Dimensions.get("screen").width - 190,
            position: "absolute",
            top: 55,
            left: 145,
            right: 0,
            zIndex: 999,
        },

        inputSearchProductWrapper: {
            backgroundColor: "#fff",
            maxHeight: 300,
            borderRadius: 5,
        },
        listContainer:
        {
            padding: 5,
            backgroundColor: "#d3d3d32d",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor:"#eeebeb",

        },
        listWrapper:
        {
            width: Dimensions.get("screen").width - 210,
            height: 60,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-start",
            alignItems: "center",
            backgroundColor: "white",
            padding: 5,
            gap: 5,
            borderRadius: 5,
            // backgroundColor: "red",
        },
        cardImg:
        {
            width: 50,
            height: 45,
        },
        cartItemDetails:
        {
            width: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor:"blue",
        },
        cartItemTextStyle:
        {
            width: 90,
            textAlign: "left",
            // backgroundColor:"pink",
        },


    });


export default homeStyle;