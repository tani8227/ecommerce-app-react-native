import { Dimensions, StyleSheet } from "react-native";


const productStyle = StyleSheet.create(
    {
        container:
        {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        cardImageWrapper:
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height - 500,
        },
        ImageWrapper:
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#807e7e15",
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height - 560,
        },
        cardImg:
        {
            width: 200,
            height: 200,
        },
        cardImageContent:
        {
            width: Dimensions.get("screen").width,
            height:160,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            // backgroundColor: "white",
            padding: 5,
        },
        productTitleWrapper:
        {
            width: 180,
            height: 80,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding:5,
            gap:5,
            // backgroundColor:"blue",

        },
        productPriceWrapper:
        {
            width: 100,
            height: 80,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding:5,
            // backgroundColor:"blue", 
        },
        ratingContainer:
        {

            width: 100,
            height:30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
            // backgroundColor:"red",
        },
        textSize:
        {
            fontSize: 20,
        },
        textColor:
        {
            color: "#1991af",
        },
       
        BtnWrapper:
        {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height - 640,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: 10,
            // backgroundColor: "red",
        },
        btnText:
        {
            padding: 10,
            borderRadius: 30,
            borderWidth: 2,
            borderColor: "white",
            color: "white",
            fontSize: 14,
            fontWeight: 600,
            backgroundColor: "#19b6e6",
        },
    });

export default productStyle;