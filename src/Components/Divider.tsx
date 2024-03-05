import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  return (
    <View style={[styles.divider]}>
      <View style={[styles.shadowTL]} />
      <View style={[styles.shadowBR]} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderWidth: 0,
    height: 4,
    borderRadius: 10,
    width: "90%",
    marginLeft: "10%",
  },
  shadowTL: {
    shadowColor: "#fff",
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 4,
    width: "100%",
    height: "100%",
  },
  shadowBR: {
    shadowColor: "#b4d0fc",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 4,
    width: "100%",
    height: "100%",
  },
});
