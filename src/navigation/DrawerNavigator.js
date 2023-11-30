import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DrawerHeader from '../components/common/DrawerHeader';
import { AppRoutes } from '../constants/app_routes';
import SupportScreen from '../screens/settings/SupportScreen';
import HomeStackNavigator from './HomeNavigator';
import SettingsStackNavigator from './SettingNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <DrawerHeader {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#f3f3f3',
        drawerActiveTintColor: '#333',
        drawerInactiveTintColor: '#ccc',
        drawerLabelStyle: {marginLeft: -20},
      }}>
      <Drawer.Screen
        name={AppRoutes.HomeDrawer}
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Feather name="home" color={color} size={18} />
          ),
        }}
      />
      <Drawer.Screen
        name={AppRoutes.OrdersDrawer}
        component={SupportScreen}
        options={{
          title: 'My Orders',
          drawerIcon: ({focused, color, size}) => (
            <AntDesign name="tagso" color={color} size={18} />
          ),
        }}
      />
      <Drawer.Screen
        name={AppRoutes.SupportDrawer}
        component={SupportScreen}
        options={{
          title: 'Support',
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcons name="help-outline" color={color} size={18} />
          ),
        }}
      />
      <Drawer.Screen
        name={AppRoutes.SettingsDrawer}
        component={SettingsStackNavigator}
        options={{
          title: 'About',
          drawerIcon: ({focused, color, size}) => (
            <SimpleLineIcons name="settings" color={color} size={18} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
