import { Dimensions, StyleSheet } from "react-native";


const cartStyle = StyleSheet.create(
    {
        container:
        {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height - 185,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap:120,
            padding:10,
        },
         listContainer:
        {
            padding:5,
            backgroundColor:"#d3d3d32d"
        },
      listWrapper:
      {
          width:Dimensions.get("screen").width-40,
          height:120,
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-evenly",
          alignItems:"center",
          backgroundColor:"white",
          padding:5,
          gap:5,
      },
      cardImg:
        {
            width: 100,
            height: 100,
        },
        cartItemDetails:
        {
            width:150,
            height:50,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:5,
            // backgroundColor:"red",
        },
        cartItemTextStyle:
        {
            width:120,
            textAlign:"left",
            // backgroundColor:"blue",
        },
        empltyCardWrapper:
        {
            width:Dimensions.get("screen").width,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:10,
        },
        empltyCardText:
        {
            fontSize:20,
            padding:5,
            backgroundColor:'white',
        },
        cartItemQuantityBtnWrapper:
        {   
            height:80,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"flex-start",
            gap:10,
        },
      

    });


export default cartStyle;