import { Dimensions, StyleSheet } from "react-native";


const cardStyle = StyleSheet.create(
    {
        container:
        {
            width: Dimensions.get("screen").width - 215,
            height: 250,
            backgroundColor: "snow",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        cardImageWrapper:
        {
               display:"flex",
               flexDirection:"column",
               justifyContent:"center",
               alignItems:"center",
               gap:1,
        },
        cardImg:
        {
            width: 80,
            height: 80,            
        },
        cardImageContent:
        {
            width: 120,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",  
        },
        ratingContainer:
        {

            width: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 5,
            // backgroundColor:"red",
        },
        productTitleWrapper:
        {
              width:130,
            //   backgroundColor:"red",
        },
        productTitle:
        {
               color:"#7a7171"
        },

    });

export default cardStyle;