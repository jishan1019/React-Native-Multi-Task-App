import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { backgroundColor: "green" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerStyle: {
            backgroundColor: "green",
          },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Tab Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          headerStyle: {
            backgroundColor: "green",
          },
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "Tab More",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          headerStyle: {
            backgroundColor: "green",
          },
        }}
      />
    </Tabs>
  );
}
