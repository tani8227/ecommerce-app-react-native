import { Dimensions, StyleSheet } from "react-native";


const orderSuccessStyle=StyleSheet.create(
    {
        container:
        {
            width:Dimensions.get("screen").width,
            height:500,
            padding:5,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:15,         
        },
        textStyle:
        {
            textAlign:"center",
            fontSize:25,
            fontWeight:600,
            padding:10,
            backgroundColor:"green",
            borderRadius:10,
        },
         timerStyle:
         {
             fontSize:25,
             color:"grey",
             fontWeight:600,
         },
    });
    export default orderSuccessStyle;