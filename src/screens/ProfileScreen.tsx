import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { colors } from '../utils/theme';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Welcome to Profile Screen
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
    backgroundColor: colors.whiteColor,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 24,
  },
});

export default ProfileScreen;
