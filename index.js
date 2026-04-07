/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import store from './src/redux/store/store.js';
import { name as appName } from './app.json';
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import getUser from "./src/redux/reducers/auth/authThunks/getUser.js";
// import getAllProducts from "./src/redux/reducers/product/productThunks/getAllProductsThunk.js";



const root = () => {

    // const { isLogin } = useSelector((state) => state.auth);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     checkAuth();
    // }, []);

    // async function checkAuth() {
    //     const id = await AsyncStorage.getItem("userId");
    //     if (id) {
    //         const user = dispatch(getUser(id)).unwrap();
    //         const products = dispatch(getAllProducts(id)).unwrap();
    //         console.log(products)
    //     }
    // }

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => root);
