import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6/static";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

import { HomeStack, CartStack, OrderStack, ProfileStack } from "./MoreRoutes.jsx";



const Tab = createBottomTabNavigator();

const MainTab = () => {
     
  return (
 
        <Tab.Navigator screenOptions=
          {{
            headerShown: false,
     
          }}>

          <Tab.Screen name="HomeStack" component={HomeStack}

            options={{
              tabBarLabel: "Home",
              tabBarActiveTintColor: "#0f88ce",
              tabBarIcon: () => <MaterialIcons name="home" size={30} color="#0f88ce" />
            }}
          />
          <Tab.Screen name="CartStack" component={CartStack}
            options={{
              tabBarLabel: "Cart",
              tabBarActiveTintColor: "#0f88ce",
              tabBarIcon: () => <MaterialDesignIcons name="cart" size={30} color="#0f88ce" />
            }}
          />
          <Tab.Screen name="OrderStack" component={OrderStack}
            options={{
              tabBarLabel: "Orders",
              tabBarActiveTintColor: "#0f88ce",
              tabBarIcon: () => <MaterialDesignIcons name="heart" size={30} color="#0f88ce" />
            }}
          />

          <Tab.Screen name="ProfileStack" component={ProfileStack}
            options={{
              tabBarLabel: "Profile",
              tabBarActiveTintColor: "#0f88ce",
              tabBarIcon: () => <FontAwesome6 name="user" size={30} color="#0f88ce" />
            }} />
        </Tab.Navigator>
      
  
  )
}

export default MainTab;