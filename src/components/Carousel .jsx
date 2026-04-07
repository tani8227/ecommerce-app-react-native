import React from "react";
import {Image, View,  } from "react-native";
import homePageBanner from "../assets/banner.jpg";

import carouselStyle from "../styles/carousel.style.jsx";

const Carousel=()=>
    {
        return(
              <View style={carouselStyle.conatiner}>
               <Image
                 style={carouselStyle.carouselImg}
                  source={homePageBanner}
               />
              </View> 
        )
    }

    export default Carousel;