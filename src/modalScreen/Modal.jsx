import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { handleDecreaseQty, handleIncreaseQty, addToCart } from "../redux/reducers/cart/cartSlice.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import modalStyles from "./modalStyles.jsx";

const CardModal = ({ toggle, setToggle, user, product }) => {
  const dispatch = useDispatch();
  const { qty , cartItems } = useSelector((state) => state.cart);


  async function handleOk() {
    setToggle(false);
    dispatch(addToCart({ ...user, ...product, qty: qty }));
    AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  return (
    <Modal transparent={true} visible={toggle} animationType="fade">
      <View style={modalStyles.container}>
        <View style={modalStyles.modalBox}>
          <Text style={modalStyles.title}>Select Quantity</Text>
          <View style={modalStyles.qtyContainer}>
            <TouchableOpacity
              style={modalStyles.iconBtn}
              onPress={() => dispatch(handleDecreaseQty(1))}
            >
              <MaterialIcons name="remove" size={28} color="#fff" />
            </TouchableOpacity>

            <Text style={modalStyles.qtyText}>{qty}</Text>

            <TouchableOpacity
              style={modalStyles.iconBtn}
              onPress={() => dispatch(handleIncreaseQty(1))}
            >
              <MaterialIcons name="add" size={28} color="#fff" />
            </TouchableOpacity>

          </View>

          <View style={modalStyles.btnRow}>

            <TouchableOpacity
              style={modalStyles.cancelBtn}
              onPress={() => setToggle(false)}
            >
              <Text style={{ color: "#333", fontWeight: "bold" }}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={modalStyles.okBtn}
              onPress={handleOk}
            >
              <Text style={modalStyles.btnText}>OK</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </Modal>
  );
};

export default CardModal;