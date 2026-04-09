import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import loadingStyle from "./src/styles/loading.Style.js";
import MainTab from "./MainTab.jsx";
import AuthStack from "./authStack.jsx";
import { setIsLogin } from "./src/redux/reducers/auth/authSlice.js";

const App = () => {
  const { isLogin, isLoginLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const id = await AsyncStorage.getItem("userId");
    if (id) {
      dispatch(setIsLogin({ id: id, flag: true }));
    }
  }

  if (isLoginLoading) {
    return (
      <View style={loadingStyle.coantiner}>
        <ActivityIndicator size={"large"} animating={isLoginLoading} color={"red"} />
      </View>
    )
  }


  return (
    <NavigationContainer>
      {isLogin ? <MainTab /> : <AuthStack />}
    </NavigationContainer>

  );
};

export default App;