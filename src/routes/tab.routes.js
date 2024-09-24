import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import NewPost from "../screens/NewPost";
import SearchPost from "../screens/SearchPost";
import SearchUser from "../screens/SearchUser";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-plus-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Novo Post",
        }}
      />
      <Tab.Screen
        name="SearchUser"
        component={SearchUser}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
          tabBarLabel: "Pesquisar Usuário",
        }}
      />
      <Tab.Screen
        name="SearchPost"
        component={SearchPost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-question-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Pesquisar Post",
        }}
      />
    </Tab.Navigator>
  );
}
