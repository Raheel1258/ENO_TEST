import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  View,
  Dimensions
} from "react-native";

import SlidesComponent from "../components/SlidesComponent";
import { Todo } from '../utils/interface'

const ToDoScreen = () => {
  const windowHeight = Dimensions.get('window').height;

  const [pullRefresh, setPullRefresh] = useState(false)
  const [todoList, setTodoList] = useState<Todo[]>([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodoList(data)
        setPullRefresh(false);
      });
  };

  const onRefresh = () => {
    setPullRefresh(true);
    fetchData();
  };

  const renderItem = ({ item }: { item: Todo }) => <SlidesComponent item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={pullRefresh}
          />
        }
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item: Todo,) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={2}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: windowHeight / 1.5,
            }}>
            <Text>No data found, Please Pull doun to refresh</Text>
          </View>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default ToDoScreen;
