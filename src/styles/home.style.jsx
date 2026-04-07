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
    

    });


export default homeStyle;