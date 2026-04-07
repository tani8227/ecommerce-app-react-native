import { Dimensions, StyleSheet } from "react-native";

const userProfileStyles=StyleSheet.create(
    {
        container:
        {
            width:Dimensions.get("screen").width,
            height:Dimensions.get("screen").height,
            backgroundColor:"grey",
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            gap:5,
            padding:5,
        },
        textStyle:
        {
            textAlign:"left",
            fontSize:25,
            fontWeight:700,
            color:"white",
        },
        logOutBtnContainer:
        {
             width:Dimensions.get("screen").width-10,
             height:120,
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
        },
        logOutBtnWrapper:
        {     
             width:80,
             height:40,
             borderRadius:10,
             padding:2,
             backgroundColor:"orange",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
        },
        logOutBtn:
        {
           textAlign:"center",
           fontSize:18,
           fontWeight:600,
           color:"white"
        },
    });


    export default userProfileStyles;