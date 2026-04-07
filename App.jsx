import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import getUser from "./src/redux/reducers/auth/authThunks/getUser.js";
import getAllProducts from "./src/redux/reducers/product/productThunks/getAllProductsThunk.js";

import MainTab from "./MainTab.jsx";
import AuthStack from "./authStack.jsx";

const App = () => {
  const { isLogin, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth();
  }, [user]);

  async function checkAuth() {
    const id = await AsyncStorage.getItem("userId");

    if (id && !user) {
      await dispatch(getUser(id)).unwrap();
      await dispatch(getAllProducts()).unwrap();
    }
  }

  console.log("isLogin:", isLogin);

  return (
    <NavigationContainer>
      {isLogin ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;