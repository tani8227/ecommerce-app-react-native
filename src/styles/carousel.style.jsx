import { Dimensions, StyleSheet } from "react-native";

const carouselStyle = StyleSheet.create(
    {
        conatiner:
        {
            // width: Dimensions.get("screen").width,
            width: 250,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "green",
        },
        carouselImg:
        {
            width: 310,
            height: 150,
            borderRadius:10,
        }
    })

export default carouselStyle;