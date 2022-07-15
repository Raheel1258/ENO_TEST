import React from "react";
import { StyleSheet, View } from "react-native";

import { ToDoScreen } from "../screens";

const ToDoContainer = () => {
  return (
    <View style={styles.container}>
      <ToDoScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ToDoContainer;
