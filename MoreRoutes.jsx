import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import Home from "./src/components/Home.jsx";
import Cart from "./src/components/Cart.jsx";
import Orders from "./src/components/Orders.jsx";
import UserProfile from "./src/components/userProfileScreen/User.Profile.jsx";

import Product from "./src/components/Product.jsx";
import OrderSuccess from "./src/components/OrderSuccess.jsx";



const Stack = createStackNavigator();

const HomeStack = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerBackVisible: false,
      headerBackImage: () => <MaterialIcons name="arrow-back-ios" size={30} color="#413b3b" />,
    }}>

      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}


const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,

      headerBackImage: () => <MaterialIcons name="arrow-back-ios" size={30} color="#413b3b" />,
    }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerBackVisible: false,
    }}>
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerBackImage: () => <MaterialIcons name="arrow-back-ios" size={30} color="#413b3b" />,
    }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  )
}

export { HomeStack, CartStack, OrderStack, ProfileStack };