import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// <Tabs
// screenOptions={{
//   tabBarActiveTintColor: "white",
//   tabBarInactiveTintColor: "black",
//   tabBarStyle: { backgroundColor: "green" },
// }}
// >
// <Tabs.Screen
//   name="index"
//   options={{
//     title: "Tab Home",
//     tabBarIcon: ({ color }) => (
//       <FontAwesome size={28} name="home" color={color} />
//     ),
//     headerStyle: {
//       backgroundColor: "green",
//     },
//     headerShown: false,
//   }}
// />

// <Tabs.Screen
//   name="settings"
//   options={{
//     title: "Tab Settings",
//     tabBarIcon: ({ color }) => (
//       <FontAwesome size={28} name="cog" color={color} />
//     ),
//     headerStyle: {
//       backgroundColor: "green",
//     },
//     headerShown: false,
//   }}
// />

// <Tabs.Screen
//   name="more"
//   options={{
//     title: "Tab More",
//     tabBarIcon: ({ color }) => (
//       <FontAwesome size={28} name="cog" color={color} />
//     ),
//     headerStyle: {
//       backgroundColor: "green",
//     },
//     headerShown: false,
//   }}
// />
// </Tabs>
