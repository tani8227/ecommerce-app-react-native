import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from "@react-native-firebase/firestore";

const getUser = createAsyncThunk(
  "auth/get-user",
  async (uid, { rejectWithValue }) => {
    try {
      const doc = await firestore()
        .collection("Users")
        .doc(uid)
        .get();

      if (!doc.exists) {
        return rejectWithValue("User not found");
      }

      const data = doc.data(); 

      console.log("user details:", data);

      return {
        uid: uid,
        name: data?.name,
        email: data?.email,
      };

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getUser;