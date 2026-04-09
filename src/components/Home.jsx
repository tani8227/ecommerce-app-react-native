import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header.jsx";
import Carousel from "../components/Carousel .jsx";
import Category from "./Category.jsx";
import { useNavigation } from "@react-navigation/native";


import homeStyle from "../styles/home.style.jsx"
import loadingStyle from "../styles/loading.Style.js"
import  getUser  from "../redux/reducers/auth/authThunks/getUser.js"
import  getAllProducts  from "../redux/reducers/product/productThunks/getAllProductsThunk.js"



const Home = (props) => {

    useEffect(() => {
        fetchDetails();
    }, [])

    const { inputSearchProduct } = useSelector((state) => state.product);
    const { loading } = useSelector((state) => state.auth);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { userId } = useSelector((state) => state.auth);

    async function fetchDetails() {

        if (userId) {
            await dispatch(getUser(userId)).unwrap();
            await dispatch(getAllProducts()).unwrap();
        }
    }

    if (loading) {
        return (
            <View style={loadingStyle.coantiner}>
                <ActivityIndicator size={"large"} animating={loading} />
            </View>
        )
    }
    else {

        return (
            <View style={homeStyle.container}>
                <View style={homeStyle.headerSection}>
                    <Header navigationProps={props} />
                </View>
                <View style={homeStyle.corousolSection}>
                    <Carousel />
                </View>
                {inputSearchProduct?.length > 0 &&
                    <View style={homeStyle.inputSearchProductContainer}>
                        <View style={homeStyle.inputSearchProductWrapper}>
                            <FlatList
                                data={inputSearchProduct}
                                renderItem={({ item }) => (
                                    <View style={homeStyle.listContainer}>
                                        <TouchableOpacity style={homeStyle.listWrapper} onPress={() => navigation.navigate("Product", { "product": item })}>
                                            <Image
                                                style={homeStyle.cardImg}
                                                source={{ uri: item?.image }}
                                            />
                                            <View style={homeStyle.cartItemDetails}>
                                                <Text style={homeStyle.cartItemTextStyle}>
                                                    {item?.title}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
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
}

export default Home;