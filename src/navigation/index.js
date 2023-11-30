import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';
import { AppRoutes } from '../constants/app_routes';
import { useAuthContext } from '../context/AuthContext';
import AuthStackNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {isLoading, userToken} = useAuthContext();

  if (isLoading) {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center ',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userToken === null ? (
        <Stack.Screen name={AppRoutes.AuthTab} component={AuthStackNavigator} />
      ) : (
        <Stack.Screen name={AppRoutes.HomeTab} component={DrawerNavigator } />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
