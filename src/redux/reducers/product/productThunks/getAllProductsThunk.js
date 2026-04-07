import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from "@react-native-firebase/firestore";

const getAllProducts = createAsyncThunk(
  "/products",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await firestore().collection("Products").get();

      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      return products; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getAllProducts;