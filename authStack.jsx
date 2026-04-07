import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/loginScreen/Login.jsx"
import SignUp from "./src/components/registerScreen/Sign_up.jsx";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
     
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
     
    );
};
export default AuthStack;