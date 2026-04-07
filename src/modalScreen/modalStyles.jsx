import { Dimensions, StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: Dimensions.get("screen").width-50,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 25,
  },

  iconBtn: {
    backgroundColor: "#0f88ce",
    borderRadius: 5,
    padding: 5,
  },


  qtyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  cancelBtn: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },

  okBtn: {
    flex: 1,
    backgroundColor: "#0f88ce",
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

});

export default modalStyles;