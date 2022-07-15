import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, NativeModules, Platform, Dimensions } from "react-native";

import { ToDoScreen } from "../screens";
import { Todo } from '../utils/interface';
import { URL } from '../utils/constants';

const ToDoContainer = () => {

  const { ToastExample } = NativeModules;
  const windowHeight = Dimensions.get('window').height;

  const [animation, setAnimation] = useState(true)
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const consoleToastMessage = () => {
    if (Platform.OS === 'ios') {
      ToastExample.addEvent('Message from Javascript to Native Module');
    } else {
      ToastExample.show('Message from Javascript to Native Module');
    }
  };

  const fetchData = useCallback(
    () => {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          setTodoList(data)
          setAnimation(false);
          consoleToastMessage()
        });
    }, [todoList]
  )

  return (
    <View style={styles.container}>
      <ToDoScreen
        animation={animation}
        todoList={todoList}
        windowHeight={windowHeight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ToDoContainer;
