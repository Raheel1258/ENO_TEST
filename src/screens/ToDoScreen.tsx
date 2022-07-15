import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  ActivityIndicator
} from "react-native";

import SlidesComponent from "../components/SlidesComponent";
import { Todo } from '../utils/interface'

const ToDoScreen = () => {
  const windowHeight = Dimensions.get('window').height;

  const [animation, setAnimation] = useState(true)
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodoList(data)
        setAnimation(false);
      });
  };

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
    backgroundColor: 'white',
  },
});

export default ToDoScreen;
