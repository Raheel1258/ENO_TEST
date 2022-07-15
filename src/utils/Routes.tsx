import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { HomeContainer, ProfileContainer, ToDoContainer } from "../containers";
import HomeImage from "../assets/images/home.png";
import ProfileImage from "../assets/images/profile.png";
import { colors } from "./theme";

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        component={HomeContainer}
        name="home"
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: colors.greyColor,
          },

          headerTitleStyle: {
            color: colors.blackColor,
            fontSize: 24,
            fontWeight: "400",
            fontFamily: "Inter",
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

const Profile = () => {
  return (
    <ProfileStack.Navigator >
      <ProfileStack.Screen
        component={ProfileContainer}
        name="profile"
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: colors.greyColor,
          },

          headerTitleStyle: {
            color: colors.blackColor,
            fontSize: 24,
            fontWeight: "400",
            fontFamily: "Inter",
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator initialRouteName='Tabs'>
      <Stack.Screen
        component={MyTabs}
        name="Tabs"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={ToDoContainer}
        name="todo"
        options={{
          title: "To Do",
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: colors.greyColor,
          },
          headerTitleStyle: {
            color: colors.blackColor,
            fontSize: 24,
            fontWeight: "400",
            fontFamily: "Inter",
          },
        }}
      />

    </Stack.Navigator>
  )
}
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.greyColor,
          position: "absolute",
          paddingTop: 10,
          height: 90,
        },
      }}

    >
      <Tab.Screen
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused ? (
                <Image style={styles.homeImage} source={HomeImage} />
              ) : (
                <Image style={styles.homeImage} source={HomeImage} />
              )}
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused ? (
                <Image style={styles.profileImage} source={ProfileImage} />
              ) : (
                <Image style={styles.profileImage} source={ProfileImage} />
              )}
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const MainScreen = createSwitchNavigator(
  {
    App: {
      screen: App,
    },
  },
  {
    initialRouteName: "App",
  }
);

const styles = StyleSheet.create({
  homeImage: {
    width: 40,
    height: 40,
    marginRight: 30,
  },
  profileImage: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
});

export default createAppContainer(MainScreen);
