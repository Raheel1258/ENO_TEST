import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator
} from "react-native";

import SlidesComponent from "../components/SlidesComponent";
import { Todo } from '../utils/interface'
import { colors } from '../utils/theme';

type Props = {
  animation: boolean,
  todoList: Todo[],
  windowHeight: number
}
const ToDoScreen = ({
  animation,
  todoList,
  windowHeight
}: Props) => {

  const renderItem = ({ item }: { item: Todo }) => <SlidesComponent item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View >
        {!animation ?
          <FlatList
            data={todoList}
            renderItem={renderItem}
            keyExtractor={(item: Todo,) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            ListEmptyComponent={
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: windowHeight / 1.5,
                }}>
                <Text>No data found</Text>
              </View>}
          /> :
          <View style={{
            height: windowHeight / 1.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ActivityIndicator
              color={'black'}
              size={'small'}
              animating={true} />
          </View>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.whiteColor,
  },
});

export default ToDoScreen;
