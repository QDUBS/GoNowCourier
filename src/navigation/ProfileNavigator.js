import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoutes } from '../constants/app_routes';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import UpdateEmailScreen from '../screens/profile/UpdateEmailScreen';
import UpdateNameScreen from '../screens/profile/UpdateNameScreen';
import UpdatePhoneScreen from '../screens/profile/UpdatePhoneScreen';
import RatingsScreen from '../screens/profile/RatingsScreen';
import UpdateLocationScreen from '../screens/profile/UpdateLocationScreen';

const ProfileStackNavigator = () => {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen
        name={AppRoutes.ProfileScreen}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name={AppRoutes.EditProfileScreen}
        component={EditProfileScreen}
      />
      <ProfileStack.Screen
        name={AppRoutes.UpdateEmailScreen}
        component={UpdateEmailScreen}
      />
      <ProfileStack.Screen
        name={AppRoutes.UpdateNameScreen}
        component={UpdateNameScreen}
      />
      <ProfileStack.Screen
        name={AppRoutes.UpdatePhoneScreen}
        component={UpdatePhoneScreen}
      />
      <ProfileStack.Screen
        name={AppRoutes.UpdateLocationScreen}
        component={UpdateLocationScreen}
      />
      <ProfileStack.Screen
        name={AppRoutes.RatingsScreen}
        component={RatingsScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
