import { Tabs } from "expo-router";
import { Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs options={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "shopping list",

          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "My Idea",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="lightbulb" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
