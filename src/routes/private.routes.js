import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import TabRoutes from "./tab.routes";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

export default function PrivateRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: "" }} initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          drawerLabel: "Início",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
          drawerLabel: "Configurações",
        }}
      />
    </Drawer.Navigator>
  );
}
