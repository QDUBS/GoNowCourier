import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoutes } from '../constants/app_routes';
import PasswordResetScreen from '../screens/auth/PasswordResetScreen';
import AboutScreen from '../screens/settings/AboutScreen';
import CheckUpdatesScreen from '../screens/settings/CheckUpdatesScreen';
import DataProtectionPolicyScreen from '../screens/settings/DataProtectionPolicyScreen';
import FAQScreen from '../screens/settings/FAQScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import SupportScreen from '../screens/settings/SupportScreen';
import TermsConditionsScreen from '../screens/settings/TermsConditionsScreen';

const SettingsStackNavigator = () => {
  const SettingssStack = createStackNavigator();

  return (
    <SettingssStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingssStack.Screen
        name={AppRoutes.SettingsScreen}
        component={SettingsScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.AboutScreen}
        component={AboutScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.CheckUpdatesScreen}
        component={CheckUpdatesScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.DataProtectionPolicyScreen}
        component={DataProtectionPolicyScreen}
      />
      <SettingssStack.Screen name={AppRoutes.FAQScreen} component={FAQScreen} />
      <SettingssStack.Screen
        name={AppRoutes.PasswordResetScreen}
        component={PasswordResetScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.SupportScreen}
        component={SupportScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.TermsConditionsScreen}
        component={TermsConditionsScreen}
      />
    </SettingssStack.Navigator>
  );
};

export default SettingsStackNavigator;
