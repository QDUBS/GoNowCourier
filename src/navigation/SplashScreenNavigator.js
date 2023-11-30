import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppRoutes } from "../constants/app_routes";
import LoginScreen from "../screens/auth/LoginScreen";
import PasswordResetScreen from "../screens/auth/PasswordResetScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import SplashScreen from "../screens/auth/SplashScreen";
import DrawerNavigator from "./DrawerNavigator";

const SplashScreenNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoutes.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
      <Stack.Screen name={AppRoutes.Register} component={RegisterScreen} />
      <Stack.Screen name={AppRoutes.PasswordResetScreen} component={PasswordResetScreen} />
      <Stack.Screen name={AppRoutes.Home} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default SplashScreenNavigator;
