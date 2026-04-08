import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { setIsLogin } from "./src/redux/reducers/auth/authSlice.js";
import getUser from "./src/redux/reducers/auth/authThunks/getUser.js";
import getAllProducts from "./src/redux/reducers/product/productThunks/getAllProductsThunk.js";

import MainTab from "./MainTab.jsx";
import AuthStack from "./authStack.jsx";



const App = () => {
  const { isLogin, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const id = await AsyncStorage.getItem("userId");
    if (id) {
      setCheck(true);
      dispatch(setIsLogin({ id: id, flag: true }));
    } else {
      setCheck(false);
    }
  }

  return (
    <NavigationContainer>
      {check != null && isLogin && <MainTab />}
      {check != null && !isLogin && <AuthStack />}
    </NavigationContainer>

  );
};

export default App;