import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApp } from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "@react-native-firebase/auth";


const firebaseUserSignUp = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const {name, email, password } = credentials;
      const app = getApp();
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user._user;
      if(user){
        
        const newUser= await firestore().collection("Users").doc(user.uid).add( {
          name: name,
          uid: user.uid,
          email: user.email,
          password:password,
        })
        if(newUser)
          {
            console.log("user created in firestore :", newUser);
          }
        
        console.log("signed up data", user);
        
        return {
          uid: user.uid,
          email: user.email,
        };
      }
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export default firebaseUserSignUp;