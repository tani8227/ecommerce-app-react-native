import React, { useEffect, useState } from "react";
import { View , FlatList, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import Header from "./header.jsx";
import Carousel from "../components/Carousel .jsx";
import Category from "./Category.jsx";


import homeStyle from "../styles/home.style.jsx"




const Home = (props) => {

    const { inputSearchProduct } = useSelector((state) => state.product);

    console.log("search product in home :", inputSearchProduct);
    return (
        <View style={homeStyle.container}>
            <View style={homeStyle.headerSection}>
                <Header navigationProps={props} />
            </View>
            <View style={homeStyle.corousolSection}>
                <Carousel />
            </View>
            {inputSearchProduct?.length>0&&
            <View style={homeStyle.inputSearchProductContainer}>
                <View style={homeStyle.inputSearchProductWrapper}>
                    <FlatList
                        data={inputSearchProduct}
                        renderItem={({ item }) => (
                            <View style={homeStyle.listContainer}>
                                <View style={homeStyle.listWrapper}>
                                    <Image
                                        style={homeStyle.cardImg}
                                        source={{ uri: item?.image }}
                                        />
                                    <View style={homeStyle.cartItemDetails}>
                                        <Text style={homeStyle.cartItemTextStyle}>
                                            {item?.title}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        />
                </View>
            </View>
         }
            <View style={homeStyle.contentSection}>
                <Category props={props} />
            </View>
        </View>
    )
}

export default Home;