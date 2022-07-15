import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Todo } from '../utils/interface'

const SlidesComponent = ({ item }: { item: Todo }) => {

  return (
    <View style={styles.cardContainer} >
      <Text
        style={styles.textStyle}
        numberOfLines={2}
      >
        {item.title}
      </Text>
    </View>);
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#D9D9D9',
    height: 56,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    width: '80%',
    textAlign: 'center'
  }
});

export default SlidesComponent;
