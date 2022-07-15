import React from "react";
import { StyleSheet, View, NativeModules } from "react-native";

import { ToDoScreen } from "../screens";

const ToDoContainer = () => {

  const { ToastExample } = NativeModules;


  const showToastMessage = () => {
    ToastExample.show('Message from Javascript to Native Module')
  };
  showToastMessage()
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
