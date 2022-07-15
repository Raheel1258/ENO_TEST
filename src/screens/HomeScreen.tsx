import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate('todo')} style={styles.heading}>Welcome Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    padding: 10,
  },
});

export default HomeScreen;
