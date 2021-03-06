import React from "react";
import { StyleSheet, View } from "react-native";

import { HomeScreen } from "../screens";

const HomeContainer = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeContainer;
