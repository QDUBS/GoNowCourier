import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoutes } from '../constants/app_routes';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileStackNavigator from './ProfileNavigator';
import OrderDeliveryScreen from '../screens/home/OrderDeliveryScreen';
import OrderRatingScreen from '../screens/home/OrderRatingScreen';
import ThankYouScreen from '../screens/home/ThankYouScreen';

const HomeStackNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={AppRoutes.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={AppRoutes.OrderDelivery}
        component={OrderDeliveryScreen}
      />
      <HomeStack.Screen
        name={AppRoutes.OrderRatingScreen}
        component={OrderRatingScreen}
      />
      <HomeStack.Screen
        name={AppRoutes.ThankYouScreen}
        component={ThankYouScreen}
      />
      <HomeStack.Screen
        name={AppRoutes.Profile}
        component={ProfileStackNavigator}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
