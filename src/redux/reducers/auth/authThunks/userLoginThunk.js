import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApp } from "@react-native-firebase/app";
import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const firebaseUserLogin = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { email, password } = credentials;
      console.log("credentials",credentials);
      const app = getApp();
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user._user;
      
      if(user)
      {
        const userData= await firestore().collection("Users").doc(user.uid).get();          
           
        console.log("user data:",userData);
            return {
              uid: userData?._data?.uid,
              name: userData?._data?.name,    
              email: userData?._data?.email,
            };
      }
    } catch (error) {
     
      return rejectWithValue(error.message);
    }
  }
);

export default firebaseUserLogin;