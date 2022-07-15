import React from "react";
import { SafeAreaView, StyleSheet, Text, Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Welcome to Home Screen
        </Text>
        <Button
          title="todo list"
          onPress={() => navigation.navigate('todo')}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 24,
  },
});

export default HomeScreen;
