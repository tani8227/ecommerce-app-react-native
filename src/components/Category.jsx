import React from "react";
import { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from "../components/card.jsx";
import categoryStyle from "../styles/category.style.jsx";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsByCategory } from "../redux/reducers/product/productSlice.js"


const categoryTitleData = [
    {
        name: "All",
    },
    {
        name: "jewelery"
    },
    {
        name: "electronics"
    },
    {
        name: "men's clothing"
    },
    {
        name: "women's clothing"
    },
]


const Category = (props) => {
    
    const dispatch = useDispatch();
    const { filterProduct } = useSelector((state) => state.product);
  
    console.log(filterProduct);
 
    function handleFilterCategory(filterTitle) {
        console.log(filterTitle);
        dispatch(filterProductsByCategory(filterTitle));
    }

    return (
        <View style={categoryStyle.container}>
            <View style={categoryStyle.headingWrapper}>
                <Text style={categoryStyle.categoryTitle}>
                    Category
                </Text>
                <View style={categoryStyle.categoryListWrapper}>
                    <FlatList
                        horizontal={true}
                        data={categoryTitleData}
                        style={categoryStyle.categoryList}
                        renderItem={({ item }) =>
                            <View style={categoryStyle.categoryTextWapper}>
                                <TouchableOpacity onPress={() => handleFilterCategory(item.name)}>
                                    <Text style={categoryStyle.categoryText}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        keyExtractor={(item) => item.name}
                    />
                </View>
            </View>
            <View style={categoryStyle.categoryContent}>
                <FlatList
                    numColumns={2}
                    data={filterProduct}
                    renderItem={({ item }) =>
                        <View style={categoryStyle.cardWrapper}>
                            <Card navigateProps={props} product={item} />
                        </View>
                    }
                />
            </View>
        </View>
    )
}

export default Category;