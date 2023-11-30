import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NOTIFICATIONS } from "../constants/routeNames";
import NotificationScreen from "../screens/home/NotificationScreen";

const NotificationNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NOTIFICATIONS} component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default NotificationNavigator;
