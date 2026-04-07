import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "./header.jsx";
import Carousel from "../components/Carousel .jsx";
import Category from "./Category.jsx";


import homeStyle from "../styles/home.style.jsx"




const Home = (props) => {


    return (
        <View style={homeStyle.container}>
            <View style={homeStyle.headerSection}>
                <Header navigationProps={props} />
            </View>
            <View style={homeStyle.corousolSection}>
                <Carousel />
            </View>
            <View style={homeStyle.contentSection}>
                <Category props={props} />
            </View>
        </View>
    )
}

export default Home;