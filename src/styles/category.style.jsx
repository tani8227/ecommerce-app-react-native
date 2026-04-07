import { Dimensions, StyleSheet } from "react-native";



const categoryStyle = StyleSheet.create(
    {
        container:
        {
            width: Dimensions.get("screen").width - 50,
            height: 80,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
        },
        headingWrapper:
        {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
        },
        categoryListWrapper:
        {
            width: Dimensions.get("screen").width - 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 5,
            // backgroundColor:"red",
        },
        categoryList:
        {
            width: Dimensions.get("screen").width,
        },
        categoryTitle:
        {
            width: Dimensions.get("screen").width - 50,
            fontSize: 18,
            textAlign: "left",

        },
        categoryTextWapper:
        {
            padding: 5,
        },
        categoryText:
        {
            width: 150,
            fontSize: 16,
            borderRadius: 10,
            textAlign: "center",
            backgroundColor: "#e0e0e0",
        },
        categoryContent:
        {
            width: Dimensions.get("screen").width - 50,
            height: 340,
        },
        cardWrapper:
        {
            backgroundColor: "#e7e6e6",
            padding: 5,
        },
    })

export default categoryStyle;