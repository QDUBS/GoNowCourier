import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../constants/app_routes';
import LoginScreen from '../screens/auth/LoginScreen';
import PasswordResetScreen from '../screens/auth/PasswordResetScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
// import DrawerNavigator from './DrawerNavigator';

const AuthStackNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={AppRoutes.Login} component={LoginScreen} />
      <AuthStack.Screen name={AppRoutes.Register} component={RegisterScreen} />
      <AuthStack.Screen
        name={AppRoutes.PasswordResetScreen}
        component={PasswordResetScreen}
      />
      {/* <AuthStack.Screen name={AppRoutes.Home} component={DrawerNavigator} /> */}
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
